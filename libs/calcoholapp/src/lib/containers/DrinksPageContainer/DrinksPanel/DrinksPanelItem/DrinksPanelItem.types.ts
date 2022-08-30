import { Drink } from "@calcohol/shared";

export type DrinksPanelItemProps = {
	drink: Drink;
	handleChangeDrink: (drink: Drink) => void;
	isActive: boolean;
};