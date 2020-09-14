import React from 'react';
import { toHumanString } from 'human-readable-numbers';
import Truncate from 'react-truncate-markup';
import { customizableComponent } from 'hocs/customization';
import CommunityName from 'components/CommunityName';

import { Avatar, CommunityItem, Description, Count } from './styles';

const Community = ({ community, onClick }) => (
  <CommunityItem onClick={onClick}>
    <Avatar avatar={community.avatar} />
    <CommunityName community={community} />
    <div>
      <Count>{toHumanString(community.postsCount)}</Count> posts
    </div>
    <Truncate lines={3}>
      <Description>{community.description}</Description>
    </Truncate>
  </CommunityItem>
);

export default customizableComponent('Community', Community);
