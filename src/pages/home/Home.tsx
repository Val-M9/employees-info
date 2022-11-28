import { FC, useState } from 'react';
import { Button } from '@mui/material';
import { EmployeesList, CreateEmployee } from '../../components';
import { HomeWrapper } from './styles';

const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HomeWrapper>
      <EmployeesList />
      <Button variant="contained" color="secondary" onClick={handleToggleModal}>
        Add New Person
      </Button>
      <CreateEmployee isOpen={isOpen} onToggleModal={handleToggleModal} />
    </HomeWrapper>
  );
};

export { Home };
