import { configureStore } from '@reduxjs/toolkit';
import { apiCall } from '../api-call/api-call';
import { employeesReducer } from './reducer';

const extraArgument = {
  apiCall,
};

const store = configureStore({
  reducer: { employees: employeesReducer },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    });
    return defaultMiddleware;
  },
});

export { store, extraArgument };
