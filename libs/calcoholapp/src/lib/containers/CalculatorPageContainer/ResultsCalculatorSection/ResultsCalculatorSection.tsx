import { FC, useState } from "react";
import { Box, Typography } from "@mui/material";
import ResultsCalculatorSectionItem from "./ResultsCalculatorSectionItem/ResultsCalculatorSectionItem";
import { resultsCalculatorSectionStyles } from "./ResultsCalculatorSection.styles";
import { ResultsCalculatorSectionProps } from "./ResultsCalculatorSection.types";
import { Button } from "@calcohol/shared";

const ETANOL_PERCENTS_IN_BEER = 6;
const ETANOL_PERCENTS_IN_GIN = 36;

export const ResultsCalculatorSection: FC<ResultsCalculatorSectionProps> = ({
	hardDrinksEtanolPart,
	softDrinksEtanolPart
}) => {
	const [requiredLiters] = useState({
		softDrink: (softDrinksEtanolPart / ETANOL_PERCENTS_IN_BEER / 10).toFixed(2),
		hardDrink: (hardDrinksEtanolPart / ETANOL_PERCENTS_IN_GIN / 10).toFixed(2)
	});

	return (
		<Box
			component="div"
			sx={resultsCalculatorSectionStyles.root}
		>
			<Typography
				variant="h2"
				sx={resultsCalculatorSectionStyles.text}
			>
				You have to drink both drinks per one hour!!! For example
			</Typography>
			<Box
				component="div"
				sx={resultsCalculatorSectionStyles.drinksWrapper}
			>
				{!!softDrinksEtanolPart &&
					<ResultsCalculatorSectionItem
						name={"Beer"}
						mass={requiredLiters.softDrink}
						image={"https://firebasestorage.googleapis.com/v0/b/calcohol-3d5ef.appspot.com/o/beer.jpg?alt=media&token=0e0190cf-8776-47f0-be76-ac9a32566cb1"}
					/>
				}
				{!!hardDrinksEtanolPart &&
					<ResultsCalculatorSectionItem
						name={"Gin"}
						mass={requiredLiters.hardDrink}
						image={"https://firebasestorage.googleapis.com/v0/b/calcohol-3d5ef.appspot.com/o/gin.jpg?alt=media&token=f6cd0a0f-c247-48d3-bc4a-7db8e3886853"}
					/>
				}
			</Box>
			<Button>More Drinks</Button>
		</Box>
	);
};

export default ResultsCalculatorSection;