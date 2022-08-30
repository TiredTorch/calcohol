import { useState } from "react";
import { UserPhysProps } from "@calcohol/shared";
import { SearchDrinkCombinationForm } from "../../components/forms";
import ResultsCalculatorSection from "./ResultsCalculatorSection/ResultsCalculatorSection";
import { getRequiredEtanol } from "../../helpers";

export const CalculatorPageContainer = () => {
	const [isFinishedInput, setIsFinishedInput] = useState(false);

	const handleSubmitForm = (values: UserPhysProps) => {
		console.log(getRequiredEtanol(values));
		setIsFinishedInput((prev) => !prev);
	};

	return (
		<>
			{isFinishedInput ? (
				<ResultsCalculatorSection />
			) : (
				<SearchDrinkCombinationForm
					handleSubmitForm={handleSubmitForm}
				/>
			)}
		</>
	);
};

export default CalculatorPageContainer;