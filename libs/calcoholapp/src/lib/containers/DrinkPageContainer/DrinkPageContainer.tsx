import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { DrinkPageContainerProps } from "./DrinkPageContainer.types";
import { drinkPageContainerStyles } from "./DrinkPageContainer.styles";

export const DrinkPageContainer: FC<DrinkPageContainerProps> = ({
	data
}) => {
	return (
		<Box
			component="div"
			sx={drinkPageContainerStyles.root}
		>
			<Box
				component="div"
				sx={drinkPageContainerStyles.textWrapper}
			>
				<Typography
					variant="h3"
					data-cy="welcome"
				>
					{`Name: ${data.name}`}
				</Typography>
				<Typography variant="h2">{`Vol: ${data.vol} `}</Typography>
				<Typography variant="h4">{`${data.description}`}</Typography>
			</Box>
			<Box
				component="img"
				src={data.image}
				sx={drinkPageContainerStyles.imageWrapper}
			>
			</Box>

		</Box>
	);
};

export default DrinkPageContainer;
