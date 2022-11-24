import { createAsyncThunk } from '@reduxjs/toolkit';
import { EmployeesDto, AsyncThunkConfig } from './../common/types';
import { EmployeesActions } from './action-types';

const fetchEmployees = createAsyncThunk<EmployeesDto, undefined, AsyncThunkConfig>(
  EmployeesActions.FETCH_EMPLOYEES,
  async (_, { extra }) => {
    const { apiCall } = extra;
    const response = await apiCall.getAllEmployees();

    return response;
  },
);

export { fetchEmployees };
