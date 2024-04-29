import React, { useState, useEffect } from 'react';
import APIService from '@/API/APIService'
import axios from 'axios';

const MotoPage = () => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/moto');
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        };
    
        fetchData();
    
        // Cleanup function (optional)
        return () => {
          // Perform cleanup if necessary
        };
      }, []);
    
    return (
        <div>MotoPage</div>
    )
}

export default MotoPage