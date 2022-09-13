import { FC, useState } from "react";
import { Box } from "@mui/material";
import DrinksPanelItem from "./DrinksPanelItem/DrinksPanelItem";
import { drinksPanelStyles } from "./DrinksPanel.styles";
import { DrinksPanelProps } from "./DrinksPanel.types";
import DrinksPanelDisplay from "./DrinksPanelDisplay/DrinksPanelDisplay";
import { Drink } from "@calcohol/shared";

const DrinksPanel: FC<DrinksPanelProps> = ({
	drinks
}) => {
	const [drink, setDrink] = useState<Drink>();

	const handleChangeDrink = (newDrink: Drink) => setDrink(newDrink);

	return (
		<Box
			component="div"
			sx={drinksPanelStyles.root}
		>
			<Box
				component="div"
				data-cy="drinks_wrapper"
				sx={drinksPanelStyles.iconsWrapper}
			>
				{drinks.map((item, i) => (
					<DrinksPanelItem
						key={i}
						drink={item}
						handleChangeDrink={handleChangeDrink}
						isActive={item.name === drink?.name}
					/>
				))}
			</Box>
			<DrinksPanelDisplay
				currentDrink={drink}
			/>
		</Box>
	);
};

export default DrinksPanel;