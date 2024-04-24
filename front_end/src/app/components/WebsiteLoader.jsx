import React, { useState, useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

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
                <Center h="100vh" bg="red">
                    <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <text
                            x="10"
                            y="50"
                            fontSize="40"
                            fontFamily="Arial"
                            fill="black"
                        >
                            &gt;
                        </text>
                        <text
                            x="30"
                            y="50"
                            fontSize="40"
                            fontFamily="Arial"
                            fill="black"
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
