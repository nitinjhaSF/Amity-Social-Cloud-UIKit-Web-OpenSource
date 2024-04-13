import React, { ReactNode, RefObject } from 'react';
import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';

var preferred_theme = "default";
var theme = {
	light: {
		primary_color: "#1054DE",
		secondary_color: "#292B32",
		base_color: "#292b32",
		base_shade1_color: "#636878",
		base_shade2_color: "#898e9e",
		base_shade3_color: "#a5a9b5",
		base_shade4_color: "#ebecef",
		alert_color: "#FA4D30",
		background_color: "#FFFFFF"
	},
	dark: {
		primary_color: "#1054DE",
		secondary_color: "#292B32",
		base_color: "#ebecef",
		base_shade1_color: "#a5a9b5",
		base_shade2_color: "#6e7487",
		base_shade3_color: "#40434e",
		base_shade4_color: "#292b32",
		alert_color: "#FA4D30",
		background_color: "#191919"
	}
};
var excludes = [
];
var customizations = {
	"select_target_page/*/*": {
		theme: {
		},
		title: "Share to"
	},
	"select_target_page/*/back_button": {
		theme: {
		},
		back_icon: "back.png"
	},
	"camera_page/*/*": {
		theme: {
		},
		resolution: "720p"
	},
	"camera_page/*/close_button": {
		theme: {
		},
		close_icon: "close.png"
	},
	"create_story_page/*/*": {
		theme: {
		}
	},
	"create_story_page/*/back_button": {
		theme: {
		},
		back_icon: "back.png",
		background_color: ""
	},
	"create_story_page/*/aspect_ratio_button": {
		theme: {
		},
		aspect_ratio_icon: "aspect_ratio.png",
		background_color: ""
	},
	"create_story_page/*/story_hyperlink_button": {
		theme: {
		},
		hyperlink_button_icon: "hyperlink_button.png",
		background_color: ""
	},
	"create_story_page/*/hyper_link": {
		theme: {
		},
		hyper_link_icon: "hyper_link.png",
		background_color: ""
	},
	"create_story_page/*/share_story_button": {
		theme: {
		},
		share_icon: "share_story_button.png",
		background_color: "",
		hide_avatar: false
	},
	"story_page/*/*": {
		theme: {
		}
	},
	"story_page/*/progress_bar": {
		theme: {
		},
		progress_color: "",
		background_color: ""
	},
	"story_page/*/overflow_menu": {
		theme: {
		},
		overflow_menu_icon: "threeDot.png"
	},
	"story_page/*/close_button": {
		theme: {
		},
		close_icon: "close.png"
	},
	"story_page/*/story_impression_button": {
		theme: {
		},
		impression_icon: "impressionIcon.png"
	},
	"story_page/*/story_comment_button": {
		theme: {
		},
		comment_icon: "comment.png",
		background_color: ""
	},
	"story_page/*/story_reaction_button": {
		theme: {
		},
		reaction_icon: "like.png",
		background_color: ""
	},
	"story_page/*/create_new_story_button": {
		theme: {
		},
		create_new_story_icon: "plus.png",
		background_color: "#ffffff"
	},
	"story_page/*/speaker_button": {
		theme: {
		},
		mute_icon: "mute.png",
		unmute_icon: "unmute.png",
		background_color: ""
	},
	"*/edit_comment_component/*": {
		theme: {
		}
	},
	"*/edit_comment_component/cancel_button": {
		theme: {
		},
		cancel_icon: "",
		cancel_button_text: "cancel",
		background_color: ""
	},
	"*/edit_comment_component/save_button": {
		theme: {
		},
		save_icon: "",
		save_button_text: "Save",
		background_color: ""
	},
	"*/hyper_link_config_component/*": {
		theme: {
		}
	},
	"*/hyper_link_config_component/done_button": {
		theme: {
		},
		done_icon: "",
		done_button_text: "Done",
		background_color: ""
	},
	"*/hyper_link_config_component/cancel_button": {
		theme: {
		},
		cancel_icon: "",
		cancel_button_text: "Cancel"
	},
	"*/comment_tray_component/*": {
		theme: {
		}
	},
	"*/story_tab_component/*": {
		theme: {
		}
	},
	"*/story_tab_component/story_ring": {
		theme: {
		},
		progress_color: [
			"#339AF9",
			"#78FA58"
		],
		background_color: ""
	},
	"*/story_tab_component/create_new_story_button": {
		theme: {
		},
		create_new_story_icon: "plus.png",
		background_color: ""
	},
	"*/*/close_button": {
		theme: {
		},
		close_icon: "close.png"
	},
	"live_chat/*/*": {
	},
	"live_chat/chat_header/*": {
	},
	"live_chat/message_list/*": {
	},
	"live_chat/message_composer/*": {
		placeholder_text: "Write a message"
	}
};
var amityUKitConfig = {
	preferred_theme: preferred_theme,
	theme: theme,
	excludes: excludes,
	customizations: customizations
};

type AmityUIKitConfig = typeof amityUKitConfig;
interface AmityUIKitProviderProps {
    apiKey: string;
    apiRegion: string;
    apiEndpoint?: {
        http?: string;
        mqtt?: string;
    };
    authToken?: string;
    userId: string;
    displayName: string;
    postRendererConfig?: any;
    theme?: Record<string, unknown>;
    children?: React.ReactNode;
    socialCommunityCreationButtonVisible?: boolean;
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
        onCloseAction?: () => void;
        onClickHyperLink?: () => void;
    };
    onConnectionStatusChange?: (state: Amity.SessionStates) => void;
    onConnected?: () => void;
    onDisconnected?: () => void;
    configs?: AmityUIKitConfig;
}
declare const AmityUIKitProvider: React.FC<AmityUIKitProviderProps>;

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
    UserEdit = "useredit",
    ViewStory = "viewstory"
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
} | {
    type: PageTypes.ViewStory;
    storyId: string;
    targetId?: string;
    communityId?: string;
};
type ContextValue = {
    page: Page;
    onChangePage: (type: string) => void;
    onClickCategory: (categoryId: string) => void;
    onClickCommunity: (communityId: string) => void;
    onClickUser: (userId: string, pageType?: string) => void;
    onClickStory: (storyId: string) => void;
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

/**
 * Interface representing the session handler for the Amity SDK.
 */
interface SessionHandler {
    /**
     * Handles the access token renewal during the login process.
     * @param renewal - The access token renewal handler.
     */
    sessionWillRenewAccessToken(renewal: Amity.AccessTokenRenewal): void;
}
/**
 * Manages the Amity SDK client and authentication state.
 */
declare class AmityUIKitManager {
    private static instance;
    private client;
    private isConnected;
    private stateChangeHandler;
    private disconnectedHandler;
    private onConnectionStatusChange?;
    private onConnected?;
    private onDisconnected?;
    /**
     * Private constructor to prevent direct instantiation.
     */
    private constructor();
    /**
     * Sets up the AmityUIKitManager instance with the provided configuration.
     * @param config - The configuration object containing the API key and endpoint.
     */
    static setup(config: {
        apiKey: string;
        apiRegion: string;
        apiEndpoint?: {
            http?: string;
            mqtt?: string;
        };
    }): void;
    /**
     * Registers a device with the Amity SDK and handles the login process.
     * @param userId - The user ID to be used for login.
     * @param displayName - The display name of the user.
     * @param sessionHandler - The session handler for access token renewal.
     * @param onConnectionStatusChange - The callback function for connection status changes.
     * @param onConnected - The callback function to be called when connected.
     * @param onDisconnected - The callback function to be called when disconnected.
     */
    static registerDevice(userId: string, displayName: string, sessionHandler: SessionHandler, onConnectionStatusChange?: (state: Amity.SessionStates) => void, onConnected?: () => void, onDisconnected?: () => void, authToken?: string): Promise<void>;
    /**
     * Sets the AmityClient instance to be used by the AmityUIKitManager.
     * This method is useful when sharing the AmityClient instance between different parts of the application.
     * @param client - The AmityClient instance to be used.
     */
    static setClient(client: Amity.Client): void;
    /**
     * Connects and logs in to the Amity SDK with the provided user details and session handler.
     * @param userId - The user ID to be used for login.
     * @param displayName - The display name of the user.
     * @param sessionHandler - The session handler for access token renewal.
     */
    private connectAndLogin;
    /**
     * Disconnects from the Amity SDK and cleans up resources.
     */
    disconnect(): void;
    /**
     * Retrieves the Amity SDK client instance.
     * @returns The Amity SDK client instance or null if not connected.
     */
    static getClient(): Amity.Client | null;
    /**
     * Checks if the client is connected to the Amity SDK.
     * @returns True if the client is connected, false otherwise.
     */
    isClientConnected(): boolean;
}

type AmityStoryMediaType = {
    type: 'image';
    url: string;
} | {
    type: 'video';
    url: string;
};
type AmityDraftStoryPageProps = {
    targetId: string;
    targetType: Amity.StoryTargetType;
    mediaType?: AmityStoryMediaType;
};
declare const AmityDraftStoryPage: ({ targetId, targetType, mediaType }: AmityDraftStoryPageProps) => React.JSX.Element;

type AmityViewStoryPageType = 'communityFeed';
interface AmityViewStoryPageProps {
    type: AmityViewStoryPageType;
}
declare const AmityViewStoryPage: React.FC<AmityViewStoryPageProps>;

interface CommentTrayProps {
    referenceType: Amity.CommentReferenceType;
    referenceId: string;
    community: Amity.Community;
    shouldAllowInteraction: boolean;
    shouldAllowCreation: boolean;
}
declare const CommentTray: ({ referenceType, referenceId, community, shouldAllowInteraction, shouldAllowCreation, }: CommentTrayProps) => React.JSX.Element;

type AmityStoryTabComponentType = 'communityFeed' | 'globalFeed';
type AmityStoryTabComponentProps<T extends AmityStoryTabComponentType> = {
    type: T;
    communityId?: T extends 'communityFeed' ? string : never;
};
declare const StoryTab: <T extends AmityStoryTabComponentType>({ type, communityId, }: AmityStoryTabComponentProps<T>) => React.JSX.Element | null;

interface AmityLiveChatHeaderProps {
    channel: Amity.Channel | null;
}
declare const AmityLiveChatHeader: ({ channel }: AmityLiveChatHeaderProps) => React.JSX.Element;

type AmityMessageActionType = {
    onCopy?: () => void;
    onFlag?: () => void;
    onDelete?: () => void;
    onReply?: () => void;
    onMention?: () => void;
};

interface AmityLiveChatMessageReceiverViewProps {
    message: Amity.Message;
    containerRef: React.RefObject<HTMLDivElement>;
    action: AmityMessageActionType;
}
declare const AmityLiveChatMessageReceiverView: ({ message, containerRef, action, }: AmityLiveChatMessageReceiverViewProps) => React.JSX.Element;

interface AmityLiveChatMessageSenderViewProps {
    message: Amity.Message;
    containerRef: React.RefObject<HTMLDivElement>;
    action: AmityMessageActionType;
}
declare const AmityLiveChatMessageSenderView: ({ message, containerRef, action, }: AmityLiveChatMessageSenderViewProps) => React.JSX.Element;

interface AmityLiveChatMessageListProps {
    channel: Amity.Channel;
    replyMessage: (message: Amity.Message<'text'>) => void;
}
declare const AmityLiveChatMessageList: ({ channel, replyMessage, }: AmityLiveChatMessageListProps) => React.JSX.Element;

type ComposeActionTypes = {
    replyMessage?: Amity.Message;
    mentionMessage?: Amity.Message;
    clearReplyMessage?: () => void;
    clearMention?: () => void;
};
interface AmityLiveChatMessageComposeBarProps {
    channel: Amity.Channel;
    composeAction: ComposeActionTypes;
    suggestionRef?: RefObject<HTMLDivElement>;
}
declare const AmityLiveChatMessageComposeBar: ({ channel, suggestionRef, composeAction: { replyMessage, mentionMessage, clearReplyMessage, clearMention }, }: AmityLiveChatMessageComposeBarProps) => React.JSX.Element;

interface AmityLiveChatPageProps {
    channelId: Amity.Channel['channelId'];
}
declare const AmityLiveChatPage: ({ channelId }: AmityLiveChatPageProps) => React.JSX.Element;

export { _default$1 as AmityAvatar, CommentTray as AmityCommentTrayComponent, AmityDraftStoryPage, CommentText as AmityExpandableText, AmityLiveChatHeader, AmityLiveChatMessageComposeBar, AmityLiveChatMessageList, AmityLiveChatMessageReceiverView, AmityLiveChatMessageSenderView, AmityLiveChatPage, type AmityMessageActionType, PostContainer as AmityPostContainer, _default as AmityPostEngagementBar, StoryTab as AmityStoryTabComponent, AmityUIKitManager, ChatApplication as AmityUiKitChat, _default$2 as AmityUiKitFeed, AmityUIKitProvider as AmityUiKitProvider, Community as AmityUiKitSocial, AmityViewStoryPage, addChatMembers as amityAddChatMembers, removeChatMembers as amityRemoveChatMembers, useNavigation as useAmityNavigation, useSDK as useAmitySDK, useUser as useAmityUser };
