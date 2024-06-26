import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from '@/API/APIService';
import { error as errorAction, success } from '@slices/latestSlice';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorDisplay from '@/app/components/ErrorDisplay';

const LatestPage = () => {
    const isLoading = useSelector((state) => state.latest.loading);
    const error = useSelector((state) => state.latest.error);
    const content = useSelector((state) => state.latest.content);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ApiService.getLatestContent();
                dispatch(success(data.video));
                console.log(data);
            } catch (error) {
                dispatch(errorAction(error));
            }
        };

        fetchData();

        return () => {};
    }, [dispatch]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        const statusCode = error.response ? error.response.status : 'Unknown';
        const message = error.message;

        return <ErrorDisplay code={statusCode} error={message} />;
    }

    return (
        <>
            <div>Title: {content.title}</div>
            <div>Position: {content.position}</div>
            <div>URL: {content.url}</div>
            <div>Thumbnail: {content.thumbnail}</div>
            <div>Description: {content.description}</div>
            <div>Location: {content.location}</div>
        </>
       
    )
}

export default LatestPage