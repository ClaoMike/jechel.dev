import React, { useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import style from './WebsiteLoaderStyle'; 

import { toggle } from '../../../states_management/slices/underscoreVisibilitySlice';

const WebsiteLoader = () => {
    const isLoading = useSelector((state) => state.websiteLoader.value); // Redux loading state
    const isVisible = useSelector((state) => state.underscoreVisibility.value); // Redux underscore visibility state
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            if (isLoading) {
                // If loading is false, toggle visibility every 500ms
                dispatch(toggle());
            }
        }, 500);

        return () => clearInterval(interval);
    }, [isLoading, dispatch]);
    
    return (
        <>
            {isLoading && (
                <Center h="100vh" bg={style.background}>
                    <svg
                        width={style.svg.width}
                        height={style.svg.height}
                        viewBox={style.svg.viewBox}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <text
                            x={style.svg.greater_sign.x}
                            y={style.svg.greater_sign.y}
                            fontSize={style.svg.greater_sign.fontSize}
                            fill={style.svg.greater_sign.fill}
                        >
                            &gt;
                        </text>
                        <text
                            x={style.svg.underscore_sign.x}
                            y={style.svg.underscore_sign.y}
                            fontSize={style.svg.underscore_sign.fontSize}
                            fill={style.svg.underscore_sign.fill}
                            visibility={isVisible ? 'hidden' : 'visible'}
                        >
                            _
                        </text>
                    </svg>
                </Center>
            )}
        </>
    );
};

export default WebsiteLoader;
