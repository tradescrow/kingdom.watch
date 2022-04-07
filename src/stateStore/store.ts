import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './user/slices/userSlice';
import epochReducer from './epoch/slices/epochSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    epoch: epochReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
