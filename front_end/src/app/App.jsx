import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { doneLoading } from '../states_management/slices/websiteLoaderSlice';

import Contents from './components/content/Contents';
import WebsiteLoader from './components/website_loader/WebsiteLoader';

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
      <Contents />
    </>
  );
}

export default App;
