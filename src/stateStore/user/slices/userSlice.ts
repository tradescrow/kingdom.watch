import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { connectToWallet } from "../reducers/connectToWallet";
import { checkConnection } from "../reducers/checkConnection";

export interface UserState {
	address: string;
	status: string;
	errorMessage: string | null;
}

const initialState: UserState = {
	address: "",
	status: "idle",
	errorMessage: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		clearErrors: (state) => {
			state.errorMessage = null;

			return state;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(connectToWallet.pending, (state) => {
				state.status = "loading";
			})
			.addCase(connectToWallet.fulfilled, (state, { payload }) => {
				state.status = "connected";
				state.address = payload;
				state.errorMessage = null;
			})
			.addCase(connectToWallet.rejected, (state, { payload }) => {
				state.status = "failed";
				state.errorMessage = payload;
			});
		builder
			.addCase(checkConnection.pending, (state) => {
				state.status = "loading";
			})
			.addCase(checkConnection.fulfilled, (state, { payload }) => {
				state.status = "connected";
				state.address = payload;
			})
			.addCase(checkConnection.rejected, (state) => {
				state.status = "not connected";
			});
	},
});

export const { clearErrors } = userSlice.actions;

export const selectAddress = (state: RootState) => state.user.address;
export const selectStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;

export { connectToWallet, checkConnection };
