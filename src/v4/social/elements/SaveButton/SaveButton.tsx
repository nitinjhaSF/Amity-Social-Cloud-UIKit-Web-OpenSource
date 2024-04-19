import React from 'react';
import { PrimaryButton } from '~/core/components/Button';

import { RemoteImageButton } from './styles';
import { isValidHttpUrl } from '~/utils';
import { useTheme } from 'styled-components';
import { useCustomization } from '~/v4/core/providers/CustomizationProvider';

interface SaveButtonProps {
  pageId: '*';
  componentId: 'edit_comment_component';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  'data-qa-anchor'?: string;
}

export const SaveButton = ({
  pageId = '*',
  componentId = 'edit_comment_component',
  onClick,
  style,
}: SaveButtonProps) => {
  const theme = useTheme();
  const elementId = 'save_button';
  const { getConfig, isExcluded } = useCustomization();
  const elementConfig = getConfig(`${pageId}/${componentId}/${elementId}`);
  const isElementExcluded = isExcluded(`${pageId}/${componentId}/${elementId}`);

  if (isElementExcluded) return null;

  const saveIcon = elementConfig?.save_icon;
  const isRemoteImage = saveIcon && isValidHttpUrl(saveIcon);

  return isRemoteImage ? (
    <RemoteImageButton
      data-qa-anchor="edit_comment_component/save_button"
      src={saveIcon}
      onClick={onClick}
      style={{
        ...style,
        backgroundColor: elementConfig?.background_color || theme.v4.colors.secondary.default,
      }}
    />
  ) : (
    <PrimaryButton
      data-qa-anchor="edit_comment_component/save_button"
      onClick={onClick}
      style={{
        ...style,
        backgroundColor: elementConfig?.background_color || theme.v4.colors.secondary.default,
      }}
    >
      {elementConfig?.save_button_text}
    </PrimaryButton>
  );
};
