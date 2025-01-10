import { configureStore } from '@reduxjs/toolkit';

import searchPropertiesReducer from '../features/searchProperties/searchPropertiesSlice';
import propertyReducer from '../features/property/propertySlice';

export const store = configureStore({
  reducer: {
    searchProperties: searchPropertiesReducer,
    property: propertyReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
