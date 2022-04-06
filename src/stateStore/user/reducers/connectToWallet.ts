import { createAsyncThunk } from "@reduxjs/toolkit";

export const connectToWallet = createAsyncThunk<
	string,
	void,
	{ rejectValue: any }
>("user/connectToWallet", async (_, { rejectWithValue }) => {
	try {
		// @ts-ignore
		const accounts = await ethereum.request({
			method: "eth_requestAccounts",
		});

		return accounts[0];
	} catch (e: any) {
		return rejectWithValue(e.message);
	}
});
