import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from '@/API/APIService';
import { error as errorAction, success } from '@slices/latestSlice';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorDisplay from '@/app/components/ErrorDisplay';
import YouTubeThumbnail from '../moto/yt/YouTubeThumbnail';
import IconTextView from '../moto/IconTextView';
import YouTubeIcon from '@/icons/YouTubeIcon';
import YouTubeRedirectLink from '../moto/yt/YouTubeRedirectLink';
import MovieIcon from '@/icons/MovieIcon';
import YouTubeDescription from '../moto/yt/YouTubeDescription';
import YouTubeLocation from '../moto/yt/YouTubeLocation';

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
            <YouTubeThumbnail thumbnail={content.thumbnail} description={content.description}/>
            <IconTextView icon={<MovieIcon/>} text={content.title} />
            <YouTubeDescription description={content.description} />
            <YouTubeLocation location={content.location}/>
            <YouTubeRedirectLink url={content.url}/>
        </>
       
    )
}

export default LatestPage