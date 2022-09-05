import { UserPhysProps } from "@calcohol/shared";

export const getRequiredEtanol = (
	values: UserPhysProps, requiredPromile = 1.3
) => {
	const bodyWaterMass = parseInt(values.weight) * (values.gender ? 60 : 65) / 100;
	const etanolFullMass = ((bodyWaterMass * requiredPromile) / 90 * 100) / 0.79;
	const hardDrinksEtanolPart = etanolFullMass * values.proportion / 100;
	const softDrinksEtanolPart = etanolFullMass - hardDrinksEtanolPart;
	return { etanolFullMass, softDrinksEtanolPart, hardDrinksEtanolPart };
};