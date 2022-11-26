import { createAsyncThunk } from '@reduxjs/toolkit';
import { EmployeesDto, AsyncThunkConfig, QueryParams } from './../common/types';
import { EmployeesActions } from './action-types';

const fetchEmployees = createAsyncThunk<EmployeesDto, Readonly<QueryParams>, AsyncThunkConfig>(
  EmployeesActions.FETCH_EMPLOYEES,
  async (requestParams, { extra }) => {
    const { apiCall } = extra;
    const response = await apiCall.getEmployees(requestParams);

    return response;
  },
);

export { fetchEmployees };
