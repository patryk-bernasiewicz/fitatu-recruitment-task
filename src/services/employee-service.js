import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getEmployees: () => {
    return axios.get(`${API_URL}/users`);
  },
  saveEmployee: employee => {
    return axios.put(`${API_URL}/users/${employee.id}`);
  }
};
