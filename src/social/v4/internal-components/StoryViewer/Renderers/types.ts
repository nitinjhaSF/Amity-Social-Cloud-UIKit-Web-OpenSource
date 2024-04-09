import { Action, Story } from 'react-insta-stories/dist/interfaces';

export type CustomRenderer = React.FC<{
  story: Amity.Story &
    Story & {
      actions: Array<{
        name: string;
        action: () => void;
        icon: JSX.Element;
      }>;
      onChange: (file: File) => void;
      handleAddIconClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
      addStoryButton: JSX.Element;
      fileInputRef: React.RefObject<HTMLInputElement>;
    };
  action: Action;
  config: {
    width?: number | string;
    height?: number | string;
    loader?: JSX.Element;
    header?: () => JSX.Element;
    storyStyles?: object;
  };
  messageHandler: (
    type: string,
    data: any,
  ) => {
    ack: 'OK' | 'ERROR';
  };
}>;
