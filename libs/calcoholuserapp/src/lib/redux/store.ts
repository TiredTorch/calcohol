import { drinksReducer, drinksSlice } from "@calcohol/redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = {
	[drinksSlice.name]: drinksReducer
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
	reducer: combinedReducer
});