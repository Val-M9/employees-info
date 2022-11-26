import { createReducer } from '@reduxjs/toolkit';
import { EmployeesDto } from './../common/types';
import { DataStatus } from '../common/enums';
import { fetchEmployees } from './actions';

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
    .addCase(fetchEmployees.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(fetchEmployees.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.employees.personsInfo = [...state.employees.personsInfo, ...payload.personsInfo];
      state.employees.totalCount = payload.totalCount;
      state.currentCount = state.employees.personsInfo.length;
      state.currentPage += state.currentPage;
      if (state.currentCount >= state.employees.totalCount) {
        state.hasMore = false;
      }
    });
});

export { employeesReducer };
