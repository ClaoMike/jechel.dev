// MotoPage.js
import React, { useState, useEffect } from 'react';
import ApiService from '@/API/APIService'; // Import the ApiService
const MotoPage = () => {
    const [motoVideos, setMotoVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ApiService.getMotoVideos(); // Call the ApiService method
                setMotoVideos(data); // Assuming data is an array
                setLoading(false);
                console.log(data)
            } catch (error) {
                setError(error);
                setLoading(false);
                console.log(error)
            }
        };

        fetchData();

        // Cleanup function (optional)
        return () => {
            // Perform cleanup if necessary
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {/* Display Moto videos */}
            <ul>
                {motoVideos.videos.map(video => (
                    <li key={video.position}>{video.title}</li>
                ))}
            </ul>
        </div>
    );
}


export default MotoPage;
