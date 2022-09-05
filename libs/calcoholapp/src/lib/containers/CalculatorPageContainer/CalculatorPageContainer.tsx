import { useState } from "react";
import { UserPhysProps } from "@calcohol/shared";
import { SearchDrinkCombinationForm } from "../../components/forms";
import ResultsCalculatorSection from "./ResultsCalculatorSection/ResultsCalculatorSection";
import { getRequiredEtanol } from "../../helpers";

export const CalculatorPageContainer = () => {
	const [etanolMass, setEtanolMass] = useState({
		softDrinksEtanolPart: 0,
		hardDrinksEtanolPart: 0
	});
	const [isFinishedInput, setIsFinishedInput] = useState(false);

	const handleSubmitForm = (values: UserPhysProps) => {
		const etanolData = getRequiredEtanol(values);
		setEtanolMass({
			softDrinksEtanolPart: etanolData.softDrinksEtanolPart,
			hardDrinksEtanolPart: etanolData.hardDrinksEtanolPart
		});
		setIsFinishedInput((prev) => !prev);
	};

	return (
		<>
			{isFinishedInput && (
				<ResultsCalculatorSection
					softDrinksEtanolPart={etanolMass.softDrinksEtanolPart}
					hardDrinksEtanolPart={etanolMass.hardDrinksEtanolPart}
				/>
			)}
			{!isFinishedInput && (
				<SearchDrinkCombinationForm
					handleSubmitForm={handleSubmitForm}
				/>
			)}
		</>
	);
};

export default CalculatorPageContainer;