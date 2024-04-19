import React, { createContext, useContext, useState, useEffect } from 'react';

interface CustomizationContextValue {
  config: Config | null;
  parseConfig: (config: Config) => void;
  isExcluded: (path: string) => boolean;
  getConfig: (path: string) => Record<string, any>;
}

type Theme = {
  light: {
    primary_color: string;
    secondary_color: string;
    base_color: string;
    base_shade1_color: string;
    base_shade2_color: string;
    base_shade3_color: string;
    base_shade4_color: string;
    alert_color: string;
    background_color: string;
  };
  dark: {
    primary_color: string;
    secondary_color: string;
    base_color: string;
    base_shade1_color: string;
    base_shade2_color: string;
    base_shade3_color: string;
    base_shade4_color: string;
    alert_color: string;
    background_color: string;
  };
};

export interface Config {
  preferred_theme?: 'light' | 'dark' | 'default';
  theme?: {
    light?: Theme['light'];
    dark?: Theme['dark'];
  };
  excludes?: string[];
  customizations?: {
    'select_target_page/*/*'?: {
      theme?: {
        light?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
      title?: string;
    };
    'select_target_page/*/back_button'?: {
      back_icon?: string;
    };
    'camera_page/*/*'?: {
      resolution?: string;
      theme?: {
        light?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    'camera_page/*/close_button'?: {
      close_icon?: string;
      background_color?: string;
    };
    'create_story_page/*/*'?: {
      theme?: {
        light?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    'create_story_page/*/back_button'?: {
      back_icon?: string;
      background_color?: string;
    };
    'create_story_page/*/aspect_ratio_button'?: {
      aspect_ratio_icon?: string;
      background_color?: string;
    };
    'create_story_page/*/story_hyperlink_button'?: {
      hyperlink_button_icon?: string;
      background_color?: string;
    };
    'create_story_page/*/hyper_link'?: {
      hyper_link_icon?: string;
      background_color?: string;
    };
    'create_story_page/*/share_story_button'?: {
      share_icon?: string;
      background_color?: string;
      hide_avatar?: boolean;
    };
    'story_page/*/*'?: {
      theme?: {
        light?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    'story_page/*/progress_bar'?: {
      progress_color?: string;
      background_color?: string;
    };
    'story_page/*/overflow_menu'?: {
      overflow_menu_icon?: string;
    };
    'story_page/*/close_button'?: {
      close_icon?: string;
    };
    'story_page/*/story_impression_button'?: {
      impression_icon?: string;
    };
    'story_page/*/story_comment_button'?: {
      comment_icon?: string;
      background_color?: string;
    };
    'story_page/*/story_reaction_button'?: {
      reaction_icon?: string;
      background_color?: string;
    };
    'story_page/*/create_new_story_button'?: {
      create_new_story_icon?: string;
      background_color?: string;
    };
    'story_page/*/speaker_button'?: {
      mute_icon?: string;
      unmute_icon?: string;
      background_color?: string;
    };
    '*/edit_comment_component/*'?: {
      theme?: {
        light_theme?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    '*/edit_comment_component/cancel_button'?: {
      cancel_icon?: string;
      cancel_button_text?: string;
      background_color?: string;
    };
    '*/edit_comment_component/save_button'?: {
      save_icon?: string;
      save_button_text?: string;
      background_color?: string;
    };
    '*/hyper_link_config_component/*'?: {
      theme?: {
        light?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    '*/hyper_link_config_component/done_button'?: {
      done_icon?: string;
      done_button_text?: string;
      background_color?: string;
    };
    '*/hyper_link_config_component/cancel_button'?: {
      cancel_icon?: string;
      cancel_button_text?: string;
    };
    '*/comment_tray_component/*'?: {
      component_theme?: {
        light_theme?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    '*/story_tab_component/*'?: {
      component_theme?: {
        light_theme?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    '*/story_tab_component/story_ring'?: {
      progress_color?: string[];
      background_color?: string;
    };
    '*/story_tab_component/create_new_story_button'?: {
      create_new_story_icon?: string;
      background_color?: string;
    };
    '*/*/close_button'?: {
      close_icon?: string;
    };
    'live_chat/*/*'?: {
      theme?: {
        light?: {
          primary_color?: string;
          secondary_color?: string;
        };
        dark?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    'live_chat/chat_header/*'?: {
      theme?: {
        light?: {
          primary_color?: string;
          secondary_color?: string;
        };
        dark?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    'live_chat/message_list/*'?: {
      theme?: {
        light?: {
          primary_color?: string;
          secondary_color?: string;
        };
        dark?: {
          primary_color?: string;
          secondary_color?: string;
        };
      };
    };
    'live_chat/message_composer/*'?: {
      placeholder_text?: 'Write a message';
    };
  };
}

const CustomizationContext = createContext<CustomizationContextValue>({
  config: null,
  parseConfig: () => {},
  isExcluded: () => false,
  getConfig: () => ({}),
});

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error('useCustomization must be used within a CustomizationProvider');
  }
  return context;
};

interface CustomizationProviderProps {
  children: React.ReactNode;
  initialConfig: Config;
}

export const CustomizationProvider: React.FC<CustomizationProviderProps> = ({
  children,
  initialConfig,
}) => {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    if (validateConfig(initialConfig)) {
      parseConfig(initialConfig);
    } else {
      console.error('Invalid configuration provided to CustomizationProvider');
    }
  }, [initialConfig]);

  const validateConfig = (config: Config): boolean => {
    // Check if mandatory fields are present
    if (
      !config?.preferred_theme ||
      !config?.theme ||
      !config?.excludes ||
      !config?.customizations
    ) {
      return false;
    }

    return true;
  };

  const parseConfig = (newConfig: Config) => {
    setConfig(newConfig);
  };

  const isExcluded = (path: string) => {
    if (!config) return false;
    return !!config.excludes?.some((exclude) => {
      const regex = new RegExp(`^${exclude.replace(/\*/g, '.*')}$`);
      return regex.test(path);
    });
  };

  const getConfig = (path: string) => {
    if (!config?.customizations) return {};
    return config?.customizations[path as keyof Config['customizations']] || {};
  };

  const contextValue: CustomizationContextValue = {
    config,
    parseConfig,
    isExcluded,
    getConfig,
  };

  return (
    <CustomizationContext.Provider value={contextValue}>{children}</CustomizationContext.Provider>
  );
};
