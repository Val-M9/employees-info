import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchEmployees } from '../../store/actions';
import { selectEmployees } from '../../store/selectors';

const Home = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  console.log(employees);
  return <div>Home</div>;
};

export { Home };
