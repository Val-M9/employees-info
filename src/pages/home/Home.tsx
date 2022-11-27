import { FC } from 'react';
import { Button } from '@mui/material';
import { EmployeesList } from '../../components';
import { HomeWrapper } from './styles';

const Home: FC = () => {
  return (
    <HomeWrapper>
      <EmployeesList />
      <Button variant="contained" color="secondary">
        Add New Person
      </Button>
    </HomeWrapper>
  );
};

export { Home };
