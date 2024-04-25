import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { switchToLight, switchToDark } from '@slices/themeSlice'

export const useThemeDetection = () => {
    const dispatch = useDispatch();
    
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
  
        // Initial check for the theme
        if (darkModeMediaQuery.matches) {
            dispatch(switchToDark());
        } else if (lightModeMediaQuery.matches) {
            dispatch(switchToLight());
        }
  
        return () => {
            darkModeMediaQuery.removeEventListener('change', darkListener);
            lightModeMediaQuery.removeEventListener('change', lightListener);
        };
    }, [dispatch]);
};

// export default useThemeDetection;