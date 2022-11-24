import { createReducer } from '@reduxjs/toolkit';
import { EmployeesDto } from './../common/types';
import { DataStatus } from '../common/enums';
import { fetchEmployees } from './actions';

type InitialState = {
  dataStatus: DataStatus;
  employees: EmployeesDto;
};

const initialState: InitialState = {
  dataStatus: DataStatus.IDLE,
  employees: [],
};

const employeesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchEmployees.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(fetchEmployees.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.employees = [...state.employees, ...payload];
    });
});

export { employeesReducer };
