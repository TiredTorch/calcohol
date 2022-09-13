import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { DrinksPanelDisplayProps } from "./DrinksPanelDisplay.types";
import { drinksPanelDisplayStyles } from "./DrinksPanelDisplay.styles";
import { useRouter } from "next/router";

export const DrinksPanelDisplay: FC<DrinksPanelDisplayProps> = ({
	currentDrink
}) => {
	const router = useRouter();

	const handleCheckDrink = () => {
		if (!currentDrink) return;
		router.push(`/drinks/${currentDrink.uid}`);
	};

	return (
		<Box
			onClick={handleCheckDrink}
			data-cy="drinks_display"
			sx={[drinksPanelDisplayStyles.root, {
				background: currentDrink?.image ? `url(${currentDrink?.image})` : "white",
				backgroundSize: "cover",
				backgroundPosition: "center"
			}]}
			component="div"
		>
			<Box
				sx={drinksPanelDisplayStyles.textWrapper}
				component="div"
			>
				{(currentDrink?.name && currentDrink.vol) ? (
					<>
						<Typography variant="h3">{`Name: ${currentDrink?.name}`}</Typography>
						<Typography variant="h4">{`Vol: ${currentDrink?.vol}`}</Typography>
					</>
				) : (
					<Typography variant="h3">Choose drink</Typography>
				)

				}
			</Box>
		</Box>
	);
};

export default DrinksPanelDisplay;