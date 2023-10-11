import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/interfaces/users.interface';
import { getUsers } from '@/services/users.service';

interface InitialState {
  users: User[];
  status: 'PENDING' | 'SUCCESS' | 'ERROR';
}

const initialState: InitialState = {
  users: [],
  status: 'PENDING',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', getUsers);
/*
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (limit, order) => {
  const users = await getUsers(limit, order);
  return users;
});
*/

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetching users: Pending
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = 'PENDING';
    });
    // Fetching users: Success
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = 'SUCCESS';
    });
    // Fetching users: Error
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = 'ERROR';
    });
  },
});

export default usersSlice.reducer;
