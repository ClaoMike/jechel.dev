import React, { useState, useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import style from './WebsiteLoaderStyle';   

const WebsiteLoader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const isLoading = useSelector((state) => state.websiteLoader.value); // redux loading state

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, []);
    
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
