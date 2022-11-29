import { v4 as uuid } from 'uuid';
import { CreateEmployeeDto } from '../common/types';

const newEmployeeParser = (data: CreateEmployeeDto) => {
  return {
    id: uuid(),
    fullName: `${data.firstName} ${data.lastName}`,
    contacts: { email: `${data.email}`, phone: `${data.phone}` },
    birthday: data.birthday,
    dateOfHiring: data.dateOfHiring,
    position: data.position,
  };
};

export { newEmployeeParser };
