import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../stateStore/store";
import { expansions } from "../../../data/Epochs";

export interface EpochState {
	currentBlocks: Array<number>
}

const initialState: EpochState = {
	currentBlocks: [expansions.length].fill(0)
};

export const epochSlice = createSlice({
	name: "epoch",
	initialState,
	reducers: {
		updateCurrentBlocks: (state, { payload }) => {
			state.currentBlocks = payload;
			return state;
		},
	}
});

export const { updateCurrentBlocks } = epochSlice.actions;

export const selectCurrentBlocks = (state: RootState) => state.epoch.currentBlocks;

export default epochSlice.reducer;
