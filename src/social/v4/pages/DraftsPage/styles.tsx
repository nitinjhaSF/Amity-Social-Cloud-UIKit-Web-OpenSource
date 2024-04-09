import styled from 'styled-components';

import { VideoPreview } from '~/core/components/Uploaders/Video/styles';

export const StoryDraftContainer = styled.div`
  position: relative;
  display: flex;
  width: 23.438rem;
  height: 40.875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StoryDraftHeader = styled.div`
  position: absolute;
  top: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;

export const IconButton = styled.button<{ backgroundColor?: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  cursor: pointer;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LinkButtonContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const DraftImageContainer = styled.div<{ colors: { hex: string }[] }>`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    ${(props) => props.colors?.[0]?.hex || '#000'} 0%,
    ${(props) => props.colors?.[props?.colors?.length - 1]?.hex || '#000'} 100%
  );
`;

export const DraftImage = styled.img<{ imageMode: 'fit' | 'fill'; colors: { hex: string }[] }>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => (props?.imageMode === 'fit' ? 'contain' : 'cover')};
`;

export const StoryDraftFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: -50px;
  background-color: #000;
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem;
  overflow: hidden;
`;

export const ShareStoryButton = styled.button`
  display: inline-flex;
  height: 2.5rem;
  padding: 0.375rem 0.5rem 0.25rem 0.25rem;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 1.5rem;
  background-color: #fff;
  border: none;
  color: #292b32;
  font-size: 0.938rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.24px;
  cursor: pointer;
  gap: 0.5rem;
`;

export const StoryVideoPreview = styled(VideoPreview)`
  background-color: #000;
`;
