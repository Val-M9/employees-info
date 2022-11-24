export type EmployeeDto = {
  id: string;
  fullName: string;
  birthday: string;
  position: string;
  occupySince: string;
  previousPositions: string[];
};

export type EmployeesDto = EmployeeDto[];
