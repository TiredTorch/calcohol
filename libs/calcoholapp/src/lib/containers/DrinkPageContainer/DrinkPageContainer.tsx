import { FC } from "react";
import Image from "next/image";
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
				<Typography variant="h3">{`Name: ${data.name}`}</Typography>
				<Typography variant="h2">{`Vol: ${data.vol} `}</Typography>
				<Typography variant="h4">{`${data.description}`}</Typography>
			</Box>
			<Box
				component="div"
				sx={drinkPageContainerStyles.imageWrapper}
			>
				<Image
					src={data.image}
					layout="fill"
					objectFit="cover"
					objectPosition="100% 50%"
					placeholder="empty"
				/>
			</Box>

		</Box>
	);
};

export default DrinkPageContainer;