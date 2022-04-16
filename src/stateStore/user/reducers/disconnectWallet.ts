import { createAsyncThunk } from "@reduxjs/toolkit";

export const disconnectWallet = createAsyncThunk<
	string,
	void,
	{ rejectValue: any }
>("user/disconnectWallet", async (_, { rejectWithValue }) => {
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
