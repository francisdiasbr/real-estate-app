import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import BaseService from '../../api/service';
import { Property, PropertyState } from './types';

const initialState: PropertyState = {
  currentProperty: null,
  status: 'idle',
  error: null
};

export const fetchProperty = createAsyncThunk(
  'property/fetchProperty',
  async (propertyId: string) => {
    try {
      const response = await BaseService.get<Property>(`/property/${propertyId}`);
      return response;
    } catch (error) {
      throw new Error('Falha ao carregar os detalhes do imóvel');
    }
  }
);

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    clearProperty: (state) => {
      state.currentProperty = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperty.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProperty.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentProperty = action.payload;
      })
      .addCase(fetchProperty.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Erro desconhecido';
      });
  },
});

// Actions
export const { clearProperty } = propertySlice.actions;

// Selectors
export const selectCurrentProperty = (state: { property: PropertyState }) => 
  state.property.currentProperty;
export const selectPropertyStatus = (state: { property: PropertyState }) => 
  state.property.status;
export const selectPropertyError = (state: { property: PropertyState }) => 
  state.property.error;

export default propertySlice.reducer; 