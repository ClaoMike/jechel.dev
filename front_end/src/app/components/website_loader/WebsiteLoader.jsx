import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@slices/underscoreVisibilitySlice';

import { Center } from '@chakra-ui/react';
import style from '@components/website_loader/WebsiteLoaderStyle';

const WebsiteLoader = ({ isLoading }) => {
    const isVisible = useSelector((state) => state.underscoreVisibility.value); // Redux underscore visibility state
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            if (isLoading) {
                // If loading is true, toggle visibility every 500ms
                dispatch(toggle());
            }
        }, 500);

        return () => clearInterval(interval);
    }, [isLoading, dispatch]);
    
    return (
        <>
            {isLoading && (
                <Center h="100vh" style={{position: 'absolute', top: style.top, left: style.left, right: style.right, bottom: style.bottom, zIndex: style.zIndex, backgroundColor: style.background }}>
                    <svg width={style.svg.width} height={style.svg.height} viewBox={style.svg.viewBox} xmlns="http://www.w3.org/2000/svg" >
                        <text x={style.svg.greater_sign.x} y={style.svg.greater_sign.y} fontSize={style.svg.greater_sign.fontSize} fill={style.svg.greater_sign.fill} >
                            &gt;
                        </text>
                        <text x={style.svg.underscore_sign.x} y={style.svg.underscore_sign.y} fontSize={style.svg.underscore_sign.fontSize} fill={style.svg.underscore_sign.fill} visibility={isVisible ? 'hidden' : 'visible'} >
                            _
                        </text>
                    </svg>
                </Center>
            )}
        </>
    );
};

export default WebsiteLoader;
