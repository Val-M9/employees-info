import { EmployeeDto } from './../common/types/data-base/db';
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

const addEmployee = createAsyncThunk<EmployeeDto, EmployeeDto, AsyncThunkConfig>(
  EmployeesActions.ADD_EMPLOYEE,
  async (payload, { extra }) => {
    const { apiCall } = extra;
    const response = await apiCall.createEmployee(payload);

    return response;
  },
);

export { fetchEmployees, addEmployee };
