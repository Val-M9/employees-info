import { configureStore } from '@reduxjs/toolkit';
import { apiCall } from '../api-call/api-call';
import { errorHandler } from './middlewares/error-handler';
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
    }).concat(errorHandler);
    return defaultMiddleware;
  },
});

export { store, extraArgument };
