import { Middleware, AnyAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../common/types';

const errorHandler: Middleware = () => (next: AppDispatch) => (action: AnyAction) => {
  if (action.error) {
    const {
      error: { message },
    } = action;
    console.log(message);
  }

  return next(action);
};

export { errorHandler };
