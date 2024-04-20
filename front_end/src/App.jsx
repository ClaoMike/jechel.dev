import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { switchToLight, switchToDark } from './themeSlice'
import { useEffect } from 'react';

function App() {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch();
  console.log(theme);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    const darkListener = (e) => {
      if (e.matches) {
        dispatch(switchToDark());
      }
    };

    const lightListener = (e) => {
      if (e.matches) {
        dispatch(switchToLight());
      }
    };

    darkModeMediaQuery.addEventListener('change', darkListener);
    lightModeMediaQuery.addEventListener('change', lightListener);

    return () => {
      darkModeMediaQuery.removeEventListener('change', darkListener);
      lightModeMediaQuery.removeEventListener('change', lightListener);
    };
  }, [dispatch]);

  return (
    <>
      <p>{theme}</p>
    </>
  )
}

export default App
