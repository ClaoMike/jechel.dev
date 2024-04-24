import React, { useState, useEffect } from 'react';
import Contents from './components/Contents';
import WebsiteLoader from './components/WebsiteLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
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
