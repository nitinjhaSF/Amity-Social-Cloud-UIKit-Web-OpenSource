import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { EkoPostTargetType } from 'eko-sdk';

import { useCommunitiesMock } from 'mock';

import FeedLayout from 'components/FeedLayout';
import FeedSideMenu, { SELECTION_TYPES } from 'components/FeedSideMenu';

import ExploreHome from 'components/ExploreHome';
import CategoryPage from 'components/ExploreHome/CategoryPage';
import CommunityCreationModal from 'components/CommunityCreationModal';
import Feed from 'components/Feed';
import CommunityFeed from '.';

export default {
  title: 'Community',
};

const Pages = () => {
  const location = useLocation();
  const history = useHistory();
  const { params = {} } =
    useRouteMatch('/community/:communityId') || useRouteMatch('/category/:categoryId') || {};
  const { communityId, categoryId } = params;

  const goToUserFeed = () => history.push(`/`);
  const goToNewsFeed = () => history.push(`/news`);
  const goToExplore = () => history.push(`/explore`);
  const onCategoryClick = id => {
    history.push(`/category/${id}`);
  };

  const goToCommunity = id => {
    history.push(`/community/${id}`);
  };

  const pathToSelectionType = {
    news: SELECTION_TYPES.NEWS_FEED,
    explore: SELECTION_TYPES.EXPLORE,
    category: SELECTION_TYPES.EXPLORE,
  };

  const selected = {
    type: pathToSelectionType[location.pathname.split('/')[1]],
    communityId,
  };

  const navigateTo = userOrCommunity => {
    if (userOrCommunity.userId) goToUserFeed(userOrCommunity.userId);
    if (userOrCommunity.communityId) goToCommunity(userOrCommunity.communityId);
  };

  const onEditCommunityClick = id => {
    history.push(`/community/${id}/edit`);
  };

  const [communityCreation, setCommunityCreation] = useState(false);
  const openCommunityCreationModal = () => setCommunityCreation(true);
  const closeCommunityCreationModal = () => setCommunityCreation(false);

  const { addCommunity } = useCommunitiesMock();

  return (
    <FeedLayout
      sideMenu={
        <FeedSideMenu
          selected={selected}
          onCreateCommunityClick={openCommunityCreationModal}
          onCommunityClick={goToCommunity}
          onNewsFeedClick={goToNewsFeed}
          onExploreClick={goToExplore}
        />
      }
    >
      <Switch>
        <Route path="/" exact>
          <Feed targetType={EkoPostTargetType.MyFeed} showPostCompose />
        </Route>
        <Route path="/news" exact>
          <Feed targetType={EkoPostTargetType.GlobalFeed} showPostCompose />
        </Route>
        <Route path="/explore" exact>
          <ExploreHome
            onSearchResultCommunityClick={navigateTo}
            onRecomendedCommunityClick={navigateTo}
            onTrendingCommunityClick={navigateTo}
            onCreateCommunityClick={openCommunityCreationModal}
            onCategoryClick={onCategoryClick}
          />
        </Route>
        <Route path="/category/:categoryId">
          <CategoryPage
            categoryId={categoryId}
            onCommunityClick={navigateTo}
            onHeaderBackButtonClick={goToExplore}
          />
        </Route>
        <Route path="/community/:communityId/edit">
          TODO: Edit community(reuse CommunityForm with edit param)
        </Route>
        <Route path="/community/:communityId">
          <CommunityFeed
            onEditCommunityClick={onEditCommunityClick}
            key={communityId}
            communityId={communityId}
            onPostAuthorClick={navigateTo}
            onMemberClick={navigateTo}
          />
        </Route>
      </Switch>
      <CommunityCreationModal
        isOpen={communityCreation}
        onSubmit={addCommunity}
        onClose={closeCommunityCreationModal}
      />
    </FeedLayout>
  );
};

export const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};
