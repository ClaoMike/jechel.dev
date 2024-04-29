import axios from 'axios';

class ApiService {
  constructor() {
    if (ApiService.instance) {
      return ApiService.instance;
    }

    ApiService.instance = this;
  }

  // Example method for making a GET request
  getData() {
    return axios.get('http://127.0.0.1:3000/moto');
  }

  // Example method for making a POST request
  postData(data) {
    return axios.post('http://your-rails-backend.com/api/data', data);
  }
}

export default new ApiService();
