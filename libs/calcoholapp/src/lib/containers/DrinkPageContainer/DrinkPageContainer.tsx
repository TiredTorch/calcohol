import { FC, useState } from "react";
import Image from "next/image";
import { Box, CircularProgress, Typography } from "@mui/material";
import { DrinkPageContainerProps } from "./DrinkPageContainer.types";
import { drinkPageContainerStyles } from "./DrinkPageContainer.styles";

export const DrinkPageContainer: FC<DrinkPageContainerProps> = ({
	data
}) => {
	const [isImageLoading, setIsImageLoading] = useState(true);

	return (
		<Box
			component="div"
			sx={drinkPageContainerStyles.root}
		>
			<Typography>{data.name}</Typography>
			<Typography>{`${data.vol} vol.`}</Typography>
			<Typography>{data.description}</Typography>
			<Box
				component="div"
				sx={drinkPageContainerStyles.imageWrapper}
			>
				{isImageLoading ? (
					<CircularProgress />
				) : (
					<Image
						src={data.image}
						layout="fill"
						objectFit="cover"
						objectPosition="100% 50%"
						onLoad={() => setIsImageLoading(false)}
						placeholder="empty"
					/>
				)}
			</Box>

		</Box>
	);
};

export default DrinkPageContainer;