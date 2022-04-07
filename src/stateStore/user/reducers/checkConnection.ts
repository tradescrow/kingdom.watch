import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkConnection = createAsyncThunk<
  string,
  void,
  { rejectValue: any }
>('user/checkAddressConnection', async (_, { rejectWithValue }) => {
  try {
    // @ts-ignore
    const accounts = await ethereum.request({
      method: 'eth_accounts',
    });
    if (accounts.length !== 0) {
      return accounts[0];
    } else {
      return rejectWithValue('not connected');
    }
  } catch (e: any) {
    return rejectWithValue(e.message);
  }
});
