// MotoPage.js
import React, { useState, useEffect } from 'react';
import ApiService from '@/API/APIService';
import { error as errorAction, success } from '@slices/motoSlice';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorDisplay from '@/app/components/ErrorDisplay';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

  import { Image, HStack, VStack } from '@chakra-ui/react'
  import { Text } from '@chakra-ui/react'

const MotoPage = () => {
    const isLoading = useSelector((state) => state.moto.loading);
    const videos = useSelector((state) => state.moto.videos);
    const error = useSelector((state) => state.moto.error);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ApiService.getMotoVideos();
                dispatch(success(data.videos))
                console.log(data)
            } catch (error) {
                dispatch(errorAction(error))
            }
        };

        fetchData();

        return () => {};
    }, []);

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        const statusCode = error.response ? error.response.status : 'Unknown';
        const message = error.message;

        return <ErrorDisplay code={statusCode} error={message} />;
    }

    return (
        <>
            {videos.map(video => (
                <HStack key={video.position}>
                    <Image  src={video.thumbnail} alt={video.description} />
                    <Text >{video.title}</Text>
                    <VStack>
                        <Text >{video.description}</Text>
                        <Text >{video.location}</Text>
                        <Text >{video.url}</Text>
                    </VStack>
                    
                </HStack>
                
            ))}
            </>
    );
}


export default MotoPage;

{/* <Accordion>

  <AccordionItem>
      <AccordionButton>
        <HStack>
            <Image  src={video.thumbnail} alt={video.description} />
            <Text >{video.title}</Text>
        </HStack>
        <AccordionIcon />
    </AccordionButton>

    <AccordionPanel>
        <VStack>
            <Text >{video.description}</Text>
            <Text >{video.location}</Text>
            <Text >{video.url}</Text>
        </VStack>
    </AccordionPanel>
  </AccordionItem>

</Accordion> */}