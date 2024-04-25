import React, { useEffect } from 'react';
import Contents from './components/Contents';
import WebsiteLoader from './components/website_loader/WebsiteLoader';

import { useSelector, useDispatch } from 'react-redux';
import { doneLoading } from '../states_management/slices/websiteLoadingSlice';

function App() {
  const isLoading = useSelector((state) => state.websiteLoader.value); // redux theme state
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(doneLoading());
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <WebsiteLoader isLoading={isLoading} />
      <Contents style={{ position: 'relative', zIndex: 1 }} />
    </>
  );
}

export default App;
