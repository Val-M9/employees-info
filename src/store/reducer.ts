import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { EmployeesDto } from './../common/types';
import { DataStatus } from '../common/enums';
import { addEmployee, fetchEmployees } from './actions';

type InitialState = {
  dataStatus: DataStatus;
  employees: EmployeesDto;
  currentCount: number;
  currentPage: number;
  hasMore: boolean;
};

const initialState: InitialState = {
  dataStatus: DataStatus.IDLE,
  employees: { personsInfo: [], totalCount: 0 },
  currentCount: 0,
  currentPage: 1,
  hasMore: true,
};

const employeesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchEmployees.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.employees.personsInfo = [...state.employees.personsInfo, ...payload.personsInfo];
      state.employees.totalCount = payload.totalCount;
      state.currentCount = state.employees.personsInfo.length;
      if (state.currentCount >= state.employees.totalCount) {
        state.hasMore = false;
      }
      if (state.hasMore === true) {
        state.currentPage = state.currentPage + 1;
      }
    })
    .addCase(addEmployee.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
    })
    .addMatcher(isAnyOf(fetchEmployees.pending, fetchEmployees.pending), (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
});

export { employeesReducer };
