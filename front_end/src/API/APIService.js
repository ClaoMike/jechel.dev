import axios from 'axios';
import URLGenerator from './URLGenerator';
import {Skill} from "Components";
import { fetchSkillsFailure, fetchSkillsSuccess, fetchSkillsRequest } from './actions';
import store from './store';

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

    async fetchSkills() {
        
        store.dispatch(fetchSkillsRequest()); // Dispatch action to set loading state
        
        try {
            const response = await axios.get(URLGenerator.generateDevelopmentEndpointURL_Skills());
            store.dispatch(fetchSkillsSuccess(response.data.map(skill => new Skill(skill.id, skill.name, skill.skills)))); // Dispatch action to set skills data
        } catch (error) {
            store.dispatch(fetchSkillsFailure(error)); // Dispatch action to set error state
            console.error('Error fetching data:', error);
            throw error;
        }
    }

}

export default APIService;