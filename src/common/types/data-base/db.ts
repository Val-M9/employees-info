type Contacts = {
  email: string;
  phone: string;
};

export type EmployeeDto = {
  id: string;
  fullName: string;
  birthday: string;
  position: string;
  dateOfHiring: string;
  contacts: Contacts;
};

export type EmployeesDto = { personsInfo: EmployeeDto[]; totalCount: number };
