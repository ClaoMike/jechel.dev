import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { home, moto, aboutMe } from '@slices/pageSlice';
import paths from '@paths/paths';
import { Tabs, Box } from '@chakra-ui/react';
import NavigationBar from '@components/content/user_content/navigation_bar/NavigationBar';
import Pages from '@components/content/user_content/content_pages/Pages';
import { isMobile } from 'react-device-detect';
import MobileDrawer from './navigation_bar/MobileDrawer';

const UserContent = () => {
  const location = useLocation();
  const tabIndex = useSelector((state) => state.page.tabIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (location.pathname) {
      case paths.home.path:
        dispatch(home());
        break;
      case paths.moto.path:
        dispatch(moto());
        break;
      case paths.about_me.path:
        dispatch(aboutMe());
        break;
      default:
        dispatch(home());
        break;
    }
  }, [location.pathname]);

  return (
    <Tabs variant="soft-rounded" colorScheme="green" index={tabIndex}>
      {isMobile ? (
        <MobileDrawer />
      ) : (
        <NavigationBar />
      )}
      <Pages />
    </Tabs>
  );
};

export default UserContent;
