import {
	boolean, number, object
} from "yup";

export const searchDrinkCombinationFormSchema = () =>
	object().shape({
		weight: number().typeError("Field must be a number").required().min(40).max(120),
		proportion: number().required(),
		gender: boolean().required()
	});
