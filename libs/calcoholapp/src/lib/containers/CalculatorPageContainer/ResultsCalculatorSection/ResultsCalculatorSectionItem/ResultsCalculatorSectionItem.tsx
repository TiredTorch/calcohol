import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { ResultsCalculatorSectionItemProps } from "./ResultsCalculatorSectionItem.types";
import Image from "next/image";
import { resultsCalculatorSectionItemStyles } from "./ResultsCalculatorSectionItem.styles";

const ResultsCalculatorSectionItem: FC<ResultsCalculatorSectionItemProps> = ({
	name,
	mass,
	image
}) => {
	return (
		<Box
			component="div"
			sx={resultsCalculatorSectionItemStyles.root}
		>
			<Box
				component="img"
				src={image}
				sx={resultsCalculatorSectionItemStyles.image}
			>
			</Box>
			<Typography variant="h3">{name}</Typography>
			<Typography variant="h3">{`${mass} liters.`}</Typography>
		</Box>
	);
};

export default ResultsCalculatorSectionItem;
