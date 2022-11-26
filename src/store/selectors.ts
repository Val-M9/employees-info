import { DataStatus } from '../common/enums';
import { RootState, EmployeesDto } from './../common/types';

const selectEmployees = (state: RootState): EmployeesDto => {
  return state.employees.employees;
};

const selectEmployeesDataStatus = (state: RootState): DataStatus => {
  return state.employees.dataStatus;
};

const selectHasMoreEmployees = (state: RootState): boolean => {
  return state.employees.hasMore;
};

const selectCurrentPage = (state: RootState): number => {
  return state.employees.currentPage;
};

export { selectEmployees, selectEmployeesDataStatus, selectHasMoreEmployees, selectCurrentPage };
