// ApiService.js
import axios from 'axios';

const endpoints = {
    moto: '/moto'
}
const backend_URL = 'http://127.0.0.1:3000'

class ApiService {
    constructor() {
        if (ApiService.instance) {
            return ApiService.instance;
        }

        ApiService.instance = this;
    }

    // Method for fetching Moto videos
    async getMotoVideos() {
        try {
            const response = await axios.get(backend_URL + endpoints.moto);
            return response.data;
        } catch (error) {
            console.error('Error fetching Moto videos:', error);
            throw error;
        }
    }
}

export default new ApiService();
