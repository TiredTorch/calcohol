import { FC } from "react";
import { Box } from "@mui/material";
import { drinksPanelItemStyles } from "./DrinksPanelItem.styles";
import { DrinksPanelItemProps } from "./DrinksPanelItem.types";

const DrinksPanelItem: FC<DrinksPanelItemProps> = ({
	drink,
	isActive,
	handleChangeDrink
}) => {

	const handleChangeCurrentDrink = () => handleChangeDrink(drink);

	return (
		<Box
			component="div"
			onClick={handleChangeCurrentDrink}
			sx={[
				isActive ? drinksPanelItemStyles.activeRoot : drinksPanelItemStyles.root,
				{
					background: drink.image ? `url(${drink.image})` : "white",
					backgroundSize: "100% 100%"
				}
			]}
		>

		</Box>
	);
};

export default DrinksPanelItem;