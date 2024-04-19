import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { extractColors } from 'extract-colors';
import { confirm } from '~/core/components/Confirm';
import { readFileAsync } from '~/helpers';
import useUser from '~/core/hooks/useUser';
import useSDK from '~/core/hooks/useSDK';
import useImage from '~/core/hooks/useImage';

import styles from './DraftsPage.module.css';
import { SubmitHandler } from 'react-hook-form';
import Truncate from 'react-truncate-markup';

import { usePageBehavior } from '~/v4/core/providers/PageBehaviorProvider';
import { AspectRatioButton, BackButton, HyperLinkButton, ShareStoryButton } from '../../elements';
import { useStoryContext } from '../../providers/StoryProvider';
import { StoryVideoPreview } from './styles';
import { StoryRepository } from '@amityco/ts-sdk';
import { notification } from '~/core/components/Notification';

import { HyperLink } from '../../elements/HyperLink';
import { HyperlinkFormContainer } from '../../components/HyperLinkConfig/styles';
import { HyperLinkConfig } from '../../components';
import { useNavigation } from '~/social/providers/NavigationProvider';

type AmityStoryMediaType = { type: 'image'; url: string } | { type: 'video'; url: string };

type AmityDraftStoryPageProps = {
  targetId: string;
  targetType: Amity.StoryTargetType;
  mediaType?: AmityStoryMediaType;
};

type HyperLinkFormInputs = {
  url: string;
  customText?: string;
};

const AmityDraftStoryPage = ({ targetId, targetType, mediaType }: AmityDraftStoryPageProps) => {
  // TODO: Change to usePageBehavior() to align with v4
  const { onBack } = useNavigation();
  const { file, setFile } = useStoryContext();
  const { navigationBehavior } = usePageBehavior();
  const [isHyperLinkBottomSheetOpen, setIsHyperLinkBottomSheetOpen] = useState(false);

  const [hyperLink, setHyperLink] = useState<
    {
      data: { url: string; customText: string };
      type: Amity.StoryItemType;
    }[]
  >([]);

  const handleHyperLinkBottomSheetClose = () => {
    setIsHyperLinkBottomSheetOpen(false);
  };

  const { currentUserId } = useSDK();
  const user = useUser(currentUserId);
  const creatorAvatar = useImage({ imageSize: 'small', fileId: user?.avatarFileId });

  const { formatMessage } = useIntl();

  const [imageMode, setImageMode] = useState<'fit' | 'fill'>('fit');
  const [colors, setColors] = useState<Awaited<ReturnType<typeof extractColors>>>([]);

  const onClickImageMode = () => {
    setImageMode(imageMode === 'fit' ? 'fill' : 'fit');
    if (imageMode === 'fill') {
      setColors([]);
    }
  };

  const onCreateStory = async (
    file: File | null,
    imageMode: 'fit' | 'fill',
    metadata?: Amity.Metadata,
    items?: Amity.StoryItem[],
  ) => {
    if (!file) return;
    onBack();
    const formData = new FormData();
    formData.append('files', file);
    setFile(null);
    if (mediaType?.type === 'image') {
      const { data: imageData } = await StoryRepository.createImageStory(
        targetType,
        targetId,
        formData,
        metadata,
        imageMode,
        items,
      );
      if (imageData) {
        notification.success({
          content: formatMessage({ id: 'storyViewer.notification.success' }),
        });
      }
    } else if (mediaType?.type === 'video') {
      const { data: videoData } = await StoryRepository.createVideoStory(
        targetType,
        targetId,
        formData,
        metadata,
        items,
      );
      if (videoData) {
        notification.success({
          content: formatMessage({ id: 'storyViewer.notification.success' }),
        });
      }
    }
  };

  const discardCreateStory = () => {
    confirm({
      title: formatMessage({ id: 'storyViewer.action.confirmModal.title' }),
      content: formatMessage({ id: 'storyViewer.action.confirmModal.content' }),
      cancelText: formatMessage({ id: 'general.action.cancel' }),
      okText: formatMessage({ id: 'delete' }),
      onOk: () => {
        setFile(null);
        navigationBehavior.onCloseAction();
      },
    });
  };

  const onSubmitHyperLink: SubmitHandler<HyperLinkFormInputs> = ({ url, customText }) => {
    setHyperLink([
      {
        data: {
          url,
          customText: customText || '',
        },
        // TODO: fix type
        type: 'hyperlink' as Amity.StoryItemType,
      },
    ]);
    setIsHyperLinkBottomSheetOpen(false);
  };

  const onRemoveHyperLink = () => {
    setHyperLink([]);
  };

  useEffect(() => {
    const extractColorsFromImage = async (fileTarget: File) => {
      const img = await readFileAsync(fileTarget);

      if (fileTarget?.type.includes('image')) {
        const image = new Image();
        image.src = img as string;

        const colorsFromImage = await extractColors(image, {
          crossOrigin: 'anonymous',
        });

        setColors(colorsFromImage);
      }
    };

    if (mediaType?.type === 'image') {
      if (file) {
        extractColorsFromImage(file);
      } else if (mediaType.url) {
        fetch(mediaType.url)
          .then((response) => response.blob())
          .then((blob) => {
            const fileFromUrl = new File([blob], 'image', { type: 'image/jpeg' });
            extractColorsFromImage(fileFromUrl);
          });
      }
    }
  }, [file, imageMode, mediaType]);

  return (
    <>
      <div id="asc-uikit-create-story" className={styles.draftPage}>
        <div className={styles.header}>
          <BackButton pageId="create_story_page" componentId="*" onClick={discardCreateStory} />
          <div className={styles.topRightButtons}>
            {mediaType?.type === 'image' && (
              <AspectRatioButton
                pageId="create_story_page"
                componentId="*"
                onClick={onClickImageMode}
              />
            )}
            <HyperLinkButton
              pageId="create_story_page"
              componentId="*"
              onClick={() => setIsHyperLinkBottomSheetOpen(true)}
            />
          </div>
        </div>

        {mediaType?.type === 'image' ? (
          <div
            className={styles.mainContainer}
            style={{
              background: `linear-gradient(
              180deg,
              ${colors?.length > 0 ? colors[0].hex : 'var(--color-black)'} 0%,
              ${colors?.length > 0 ? colors[colors?.length - 1].hex : 'var(--color-black)'} 100%
            )`,
            }}
          >
            <img
              className={styles.previewImage}
              src={file ? URL.createObjectURL(file) : mediaType.url}
              style={{
                width: '100%',
                height: '100%',
                objectFit: imageMode === 'fit' ? 'contain' : 'cover',
              }}
              alt="Draft"
            />
          </div>
        ) : mediaType?.type === 'video' ? (
          <StoryVideoPreview
            src={file ? URL.createObjectURL(file) : mediaType.url}
            mediaFit="contain"
            autoPlay
            controls={false}
          />
        ) : null}
        {hyperLink[0]?.data?.url && (
          <HyperlinkFormContainer>
            <HyperLink
              href={
                hyperLink[0].data.url.startsWith('http')
                  ? hyperLink[0].data.url
                  : `https://${hyperLink[0].data.url}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Truncate lines={1}>
                <span>{hyperLink[0]?.data?.customText || hyperLink[0].data.url}</span>
              </Truncate>
            </HyperLink>
          </HyperlinkFormContainer>
        )}

        <HyperLinkConfig
          pageId="*"
          isOpen={isHyperLinkBottomSheetOpen}
          onClose={handleHyperLinkBottomSheetClose}
          onSubmit={onSubmitHyperLink}
          onRemove={onRemoveHyperLink}
          isHaveHyperLink={hyperLink.length > 0}
        />

        <div className={styles.footer}>
          <ShareStoryButton
            pageId="create_story_page"
            componentId="*"
            onClick={() =>
              onCreateStory(file, imageMode, {}, hyperLink.length > 0 ? hyperLink : [])
            }
            avatar={creatorAvatar}
          />
        </div>
      </div>
    </>
  );
};

export default AmityDraftStoryPage;
