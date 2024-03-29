import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: {},
  isLoading: false,
  error: undefined,
};

export const fetchGreeting = createAsyncThunk('greetings/random', async () => {
  const greeting = await axios.get('api/greetings');
  return await greeting.data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    });
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action);
    });
  },
});

export default greetingSlice.reducer;