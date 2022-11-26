import { extraArgument } from '../../../store/store';
import { AppDispatch } from './app-dispatch';
import { AppState } from './app-state';

export type AsyncThunkConfig = {
  state: AppState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
};
