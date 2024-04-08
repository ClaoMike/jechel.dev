import axios from 'axios';
import URLGenerator from './URLGenerator';

class APIService {
    
    constructor() {
        if(APIService.instance) {
            return APIService.instance;
        }

        APIService.instance = this;
    }

    static getInstance(store){
        if (!this.instance) {
            this.instance = new APIService(store);
        }
        
        return this.instance;
    }

    async fetchSkills(){
        return this.fetchData(URLGenerator.generateDevelopmentEndpointURL_Skills());
    }

    async fetchData(url) {
        try {
            const response = await axios.get(url);

            return response.data;
          } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
          }
    }

}

export default APIService;