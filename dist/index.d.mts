import React, { ReactNode } from 'react';
import { PostContentType } from '@amityco/ts-sdk';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';

type CustomComponentName = 'Avatar' | 'CategoryHeader' | 'CategorySelector' | 'Chat' | 'ChatDetails' | 'ChatHeader' | 'ChatItem' | 'Comment' | 'CommentComposerBar' | 'CommentLikeButton' | 'CommunityCreatedModel' | 'CommunityCreationModal' | 'CommunityForm' | 'CommunityItem' | 'CommunityMembers' | 'CommunityName' | 'CommunityPermissions' | 'EmptyFeed' | 'EngagementBar' | 'Feed' | 'FeedHeaderTabs' | 'File' | 'Image' | 'ImageGallery' | 'Images' | 'Layout' | 'MediaGallery' | 'MenuTab' | 'Message' | 'MessageComposerBar' | 'MessageList' | 'Post' | 'PostLikeButton' | 'PostTargetSelector' | 'ProfileSettings' | 'ProfileSettingsTabs' | 'RecentChat' | 'SideNavBar' | 'SocialSearch' | 'Tabs' | 'UICategoryCard' | 'UICommunityCard' | 'UICommunityHeader' | 'UICommunityInfo' | 'UIEngagementBar' | 'UIPostHeader' | 'UITextContent' | 'UITrendingItem' | 'UIUserInfo' | 'UserChip' | 'UserHeader' | 'UserSelector';
type CustomComponentType = Partial<Record<CustomComponentName, <TProps>(props: TProps) => React.ReactElement<TProps>>>;

type PostRendererProps = {
    childrenPosts?: Amity.Post[];
    className?: string;
    currentUserId?: string;
    handleDeletePost?: (postId: string) => void;
    handleReportPost?: () => void;
    handleUnreportPost?: () => void;
    handleApprovePost?: () => void;
    handleDeclinePost?: () => void;
    handleClosePoll?: () => void;
    poll?: Amity.Poll | null;
    isPollClosed?: boolean;
    hidePostTarget?: boolean;
    isFlaggedByMe?: boolean;
    readonly?: boolean;
    post?: Amity.Post;
    user?: Amity.User | null;
    userRoles?: string[];
    loading?: boolean;
    avatarFileUrl?: string;
};
type PostRendererConfigType = Record<ValueOf<typeof PostContentType> | string, (props: PostRendererProps) => ReactNode>;

interface UiKitProviderProps {
    apiKey: string;
    apiRegion: string;
    apiEndpoint?: {
        http?: string;
        mqtt?: string;
    };
    userId: string;
    displayName: string;
    customComponents?: CustomComponentType;
    postRendererConfig?: PostRendererConfigType;
    theme?: Record<string, unknown>;
    children?: React.ReactNode;
    actionHandlers?: {
        onChangePage?: (data: {
            type: string;
            [x: string]: string | boolean;
        }) => void;
        onClickCategory?: (categoryId: string) => void;
        onClickCommunity?: (communityId: string) => void;
        onClickUser?: (userId: string) => void;
        onCommunityCreated?: (communityId: string) => void;
        onEditCommunity?: (communityId: string, options?: {
            tab?: string;
        }) => void;
        onEditUser?: (userId: string) => void;
        onMessageUser?: (userId: string) => void;
    };
    pageBehavior?: {
        closeAction?: () => void;
        hyperLinkAction?: () => void;
    };
    socialCommunityCreationButtonVisible?: boolean;
    onConnectionStatusChange?: (state: Amity.SessionStates) => void;
    onConnected?: () => void;
    onDisconnected?: () => void;
    getAuthToken?: () => Promise<string>;
}
declare const UiKitProvider: ({ apiKey, apiRegion, apiEndpoint, userId, displayName, customComponents, postRendererConfig, theme, children, socialCommunityCreationButtonVisible, actionHandlers, pageBehavior, onConnectionStatusChange, onDisconnected, getAuthToken, }: UiKitProviderProps) => React.JSX.Element;

interface FeedProps {
    className?: string;
    feedType?: 'reviewing' | 'published';
    targetType?: string;
    targetId?: string | null;
    showPostCreator?: boolean;
    onPostCreated?: () => void;
    goToExplore?: () => void;
    readonly?: boolean;
    isHiddenProfile?: boolean;
}
declare const _default$2: React.MemoExoticComponent<(props: FeedProps) => React.JSX.Element>;

declare const Community: () => React.JSX.Element;

type PartialChannel = Pick<Amity.Channel, 'channelId' | 'type'>;
declare const ChatApplication: ({ membershipFilter, defaultChannelId, onMemberSelect, onChannelSelect, onAddNewChannel, onEditChatMember, }: {
    membershipFilter?: "all" | "member" | "notMember" | undefined;
    defaultChannelId: string | null;
    onMemberSelect?: ((member: Amity.Membership<'channel'>) => void) | undefined;
    onChannelSelect?: ((channel: PartialChannel) => void) | undefined;
    onAddNewChannel?: (() => void) | undefined;
    onEditChatMember?: (({ channel, members, }: {
        channel: Amity.Channel;
        members: Amity.Membership<'channel'>[];
    }) => void) | undefined;
}) => React.JSX.Element;

declare const addChatMembers: (channelId: string, userIds: string[]) => Promise<boolean>;

declare const removeChatMembers: (channelId: string, userIds: string[]) => Promise<boolean>;

declare const useUser: (userId?: string | null) => Amity.User | null;

declare const enum PageTypes {
    Explore = "explore",
    Category = "category",
    NewsFeed = "newsfeed",
    UserFeed = "userfeed",
    CommunityFeed = "communityfeed",
    CommunityEdit = "communityedit",
    UserEdit = "useredit"
}

type Page = {
    type: PageTypes.Explore | PageTypes.NewsFeed;
    communityId?: string;
} | {
    type: PageTypes.CommunityFeed;
    communityId: string;
    isNewCommunity: boolean;
} | {
    type: PageTypes.CommunityEdit;
    communityId: string;
    tab: string;
} | {
    type: PageTypes.Category;
    categoryId: string;
    communityId?: string;
} | {
    type: PageTypes.UserFeed | PageTypes.UserEdit;
    userId: string;
    communityId?: string;
};
type ContextValue = {
    page: Page;
    onChangePage: (type: string) => void;
    onClickCategory: (categoryId: string) => void;
    onClickCommunity: (communityId: string) => void;
    onClickUser: (userId: string, pageType?: string) => void;
    onCommunityCreated: (communityId: string) => void;
    onEditCommunity: (communityId: string, tab?: string) => void;
    onEditUser: (userId: string) => void;
    onMessageUser: (userId: string) => void;
    onBack: () => void;
    setNavigationBlocker?: (params: {
        title: ReactNode;
        content: ReactNode;
        okText: ReactNode;
    } | null | undefined) => void;
};
declare const useNavigation: () => ContextValue;

declare const SIZE_ALIAS: {
    BIG: string;
    REGULAR: string;
    SMALL: string;
    TINY: string;
};

interface AvatarProps {
    className?: string;
    avatar?: string | null;
    showOverlay?: boolean;
    size?: ValueOf<typeof SIZE_ALIAS> | null;
    onClick?: () => void;
    loading?: boolean;
    backgroundImage?: string | null;
}
declare const _default$1: (props: AvatarProps) => React.JSX.Element;

declare const PostContainer: styled_components.IStyledComponent<"web", styled_components_dist_types.FastOmit<{
    className?: string | undefined;
    children?: ReactNode;
}, never>> & Omit<({ className, ...props }: {
    className?: string | undefined;
    children?: ReactNode;
}) => React.JSX.Element, keyof React.Component<any, {}, any>>;

type Mentioned = {
    userId: string;
    length: number;
    index: number;
    type: string;
};

interface EngagementBarProps {
    postId: string;
    readonly?: boolean;
}

declare const _default: React.MemoExoticComponent<(props: EngagementBarProps) => React.JSX.Element>;

interface CommentTextProps {
    text?: string;
    className?: string;
    mentionees?: Mentioned[];
    maxLines?: number;
}
declare const CommentText: ({ text, className, mentionees, maxLines, }: CommentTextProps) => React.JSX.Element | null;

declare const useSDK: () => {
    client?: Amity.Client | null | undefined;
    currentUserId?: string | null | undefined;
    userRoles: string[];
};

type DraftStoryProps = {
    pageId: 'create_story_page';
    file: File;
    creatorAvatar: string;
    onCreateStory: (file: File, imageMode: 'fit' | 'fill', metadata?: Amity.Metadata, items?: Amity.StoryItem[]) => void;
    onDiscardStory: () => void;
};
declare const DraftsPage: ({ pageId, file, onDiscardStory, onCreateStory }: DraftStoryProps) => React.JSX.Element | null;

interface ViewStoriesPageProps {
    pageId: 'story_page';
    targetId: string;
    onClose: () => void;
}
declare const ViewStoriesPage: ({ pageId, targetId }: ViewStoriesPageProps) => React.JSX.Element;

interface CommentTrayProps {
    pageId: '*';
    storyId: string;
    commentId?: string;
    referenceType?: string;
    referenceId?: string;
    replyTo?: string;
    isReplying: boolean;
    limit?: number;
    isOpen: boolean;
    isJoined: boolean;
    allowCommentInStory?: boolean;
    onClose: () => void;
    onClickReply: (replyTo?: string, referenceType?: Amity.Comment['referenceType'], referenceId?: Amity.Comment['referenceId'], commentId?: Amity.Comment['commentId']) => void;
    onCancelReply: () => void;
}
declare const CommentTray: ({ pageId, storyId, commentId, referenceType, referenceId, limit, replyTo, isJoined, isOpen, isReplying, allowCommentInStory, onClose, onClickReply, onCancelReply, }: CommentTrayProps) => React.JSX.Element | null;

interface StoryTabProps {
    haveStoryPermission: boolean;
    avatar: string | null;
    pageId?: string;
    componentId?: string;
    elementId?: string;
    icon?: React.ReactNode;
    storyRing?: boolean;
    isSeen?: boolean;
    uploadingStory?: boolean;
    isErrored?: boolean;
    title?: string;
    onAddStory?: () => void;
    onClick?: () => void;
    onChange?: (file: File | null) => void;
}
declare const StoryTab: ({ pageId, elementId, title, haveStoryPermission, storyRing, isSeen, uploadingStory, isErrored, avatar, onClick, onChange, }: StoryTabProps) => React.JSX.Element;

export { _default$1 as AmityAvatar, CommentTray as AmityCommentTrayComponent, DraftsPage as AmityCreateStoryPage, CommentText as AmityExpandableText, PostContainer as AmityPostContainer, _default as AmityPostEngagementBar, StoryTab as AmityStoryTabComponent, ChatApplication as AmityUiKitChat, _default$2 as AmityUiKitFeed, UiKitProvider as AmityUiKitProvider, Community as AmityUiKitSocial, ViewStoriesPage as AmityViewStoryPage, addChatMembers as amityAddChatMembers, removeChatMembers as amityRemoveChatMembers, useNavigation as useAmityNavigation, useSDK as useAmitySDK, useUser as useAmityUser };
