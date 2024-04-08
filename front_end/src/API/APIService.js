import axios from 'axios';
import URLGenerator from './URLGenerator';
import {Skill} from "Components";

class APIService {
    
    constructor() {
        if(APIService.instance) {
            return APIService.instance;
        }

        this.loading = false;
        this.error = null;
        this.skills = [];

        APIService.instance = this;
    }

    static getInstance(store){
        if (!this.instance) {
            this.instance = new APIService(store);
        }
        
        return this.instance;
    }

    async fetchSkills(){
        this.loading = true;
        try {
            const response = await axios.get(URLGenerator.generateDevelopmentEndpointURL_Skills());
            this.skills = response.data.map(skill => new Skill(skill.id, skill.name, skill.skills));
        } catch (error) {
            this.error = error;
            console.error('Error fetching data:', error);
            throw error;
        } finally {
            this.loading = false;
        }
    }

    getLoading() {
        return this.loading;
    }

    getError() {
        return this.error;
    }

    getSkills() {
        return this.skills;
    }

}

export default APIService;