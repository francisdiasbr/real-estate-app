import { configureStore } from '@reduxjs/toolkit';

import searchPropertiesReducer from '../features/searchProperties/searchPropertiesSlice';

export const store = configureStore({
  reducer: {
    searchProperties: searchPropertiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
