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
    authToken?: string;
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
    socialCommunityCreationButtonVisible?: boolean;
    onConnectionStatusChange?: (state: Amity.SessionStates) => void;
    onConnected?: () => void;
    onDisconnected?: () => void;
}
declare const UiKitProvider: ({ apiKey, authToken, apiRegion, apiEndpoint, userId, displayName, customComponents, postRendererConfig, theme, children, socialCommunityCreationButtonVisible, actionHandlers, onConnectionStatusChange, onDisconnected, }: UiKitProviderProps) => React.JSX.Element;

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

export { _default$1 as AmityAvatar, CommentText as AmityExpandableText, PostContainer as AmityPostContainer, _default as AmityPostEngagementBar, ChatApplication as AmityUiKitChat, _default$2 as AmityUiKitFeed, UiKitProvider as AmityUiKitProvider, Community as AmityUiKitSocial, addChatMembers as amityAddChatMembers, removeChatMembers as amityRemoveChatMembers, useNavigation as useAmityNavigation, useSDK as useAmitySDK, useUser as useAmityUser };
