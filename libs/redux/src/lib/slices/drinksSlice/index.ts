import { createSlice } from "@reduxjs/toolkit";

type Drink = {
	name: string;
	vol: number;
	description: string;
	image: string;
};

const initialState: Drink[] = [];

export const drinksSlice = createSlice({
	name: "drinks",
	initialState,
	reducers: {
		setDrinks(
			state, action
		) {
			state = action.payload;
		}
	}
});

export const drinksReducer = drinksSlice.reducer;