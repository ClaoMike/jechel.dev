import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { error as errorAction, success } from '@slices/motoSlice';
import ApiService from '@/API/APIService';

import { Accordion } from '@chakra-ui/react'

import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorDisplay from '@/app/components/ErrorDisplay';
import YouTubeVideo from './YouTubeVideo';

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
        <Accordion allowToggle defaultIndex={0}>
            {videos.map(video => (
                <YouTubeVideo key={video.position} video={video} />
            ))}

        </Accordion>
    );
}


export default MotoPage;

