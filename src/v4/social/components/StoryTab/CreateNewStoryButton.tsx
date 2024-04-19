import React from 'react';

import { AddStoryButton } from './styles';
import { useCustomization } from '~/v4/core/providers/CustomizationProvider';

interface CreateNewStoryButtonProps {
  pageId?: 'story_page';
  componentId?: '*';
  onClick?: (e: React.MouseEvent) => void;
}

export const CreateNewStoryButton = ({
  pageId = 'story_page',
  componentId = '*',
  onClick = () => {},
}: CreateNewStoryButtonProps) => {
  const elementId = 'create_new_story_button';
  const { getConfig, isExcluded } = useCustomization();
  const elementConfig = getConfig(`${pageId}/${componentId}/${elementId}`);
  const isElementExcluded = isExcluded(`${pageId}/${componentId}/${elementId}`);

  if (isElementExcluded) return null;

  return (
    <AddStoryButton
      onClick={onClick}
      style={{
        backgroundColor: elementConfig?.background_color,
      }}
    />
  );
};
