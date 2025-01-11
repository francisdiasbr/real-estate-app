import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BaseService from '../../api/service';
import { 
  SearchResponse, 
  SearchState,
  SearchParams 
} from './types';

// Initial State
const initialState: SearchState = {
  results: [],
  status: 'idle',
  error: null,
  summary: ''
};

// Thunk
export const searchProperties = createAsyncThunk(
  'search/properties',
  async (searchParams: SearchParams) => {
    try {
      const data: SearchResponse = await BaseService.post<SearchResponse>(
        '/search',
        searchParams
      );
      return data;
    } catch (error) {
      throw new Error('Falha ao buscar propriedades');
    }
  }
);

// Slice
const searchPropertiesSlice = createSlice({
  name: 'searchProperties',
  initialState,
  reducers: {
    clearResults: (state) => {
      state.results = [];
      state.status = 'idle';
      state.error = null;
      state.summary = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProperties.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(searchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload.results;
        state.summary = action.payload.summary;
      })
      .addCase(searchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Erro desconhecido';
      });
  },
});

// Actions
export const { clearResults } = searchPropertiesSlice.actions;

// Selectors
export const selectAllProperties = (state: { searchProperties: SearchState }) => 
  state.searchProperties.results;
export const selectSearchStatus = (state: { searchProperties: SearchState }) => 
  state.searchProperties.status;
export const selectSearchError = (state: { searchProperties: SearchState }) => 
  state.searchProperties.error;
export const selectSearchSummary = (state: { searchProperties: SearchState }) => 
  state.searchProperties.summary;

// Reducer
export default searchPropertiesSlice.reducer;
