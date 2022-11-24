import axios from 'axios';
import { BASE_URL } from '../common/constants';
import { EmployeesDto } from '../common/types';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiCall = {
  async getAllEmployees(): Promise<EmployeesDto> {
    const response = await instance.get('/employees');
    return response.data;
  },
};

export { apiCall };
