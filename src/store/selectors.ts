import { DataStatus } from '../common/enums';
import { RootState, EmployeesDto } from './../common/types';

const selectEmployees = (state: RootState): EmployeesDto => {
  return state.employees.employees;
};

const selectEmployeesDataStatus = (state: RootState): DataStatus => {
  return state.employees.dataStatus;
};

export { selectEmployees, selectEmployeesDataStatus };
