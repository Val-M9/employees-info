import axios from 'axios';
import { BASE_URL } from '../common/constants';
import { EmployeesDto, QueryParams } from '../common/types';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiCall = {
  async getEmployees({ page = 1, limit = 10 }: QueryParams): Promise<EmployeesDto> {
    const response = await instance.get(`/employees?_page=${page}&_limit=${limit}`);

    return { personsInfo: response.data, totalCount: Number(response.headers['x-total-count']) };
  },
};

export { apiCall };
