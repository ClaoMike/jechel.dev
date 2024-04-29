// MotoPage.js
import React, { useState, useEffect } from 'react';
import ApiService from '@/API/APIService';
import { error as errorAction, success } from '@slices/motoSlice';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorDisplay from '@/app/components/ErrorDisplay';

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
                // console.log(error)
            }
        };

        fetchData();

        // Cleanup function (optional)
        return () => {
            // Perform cleanup if necessary
        };
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
        <div>
            {/* Display Moto videos */}
            <ul>
                {videos.map(video => (
                    <li key={video.position}>{video.title}</li>
                ))}
            </ul>
        </div>
    );
}


export default MotoPage;
