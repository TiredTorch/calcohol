import dynamic from "next/dynamic";

const CalculatorPageContainer = dynamic(() =>
    import("@calcohol/calcoholapp").then((module) => module.CalculatorPageContainer));

export const CalculatorPage = () => {
    return (
        <CalculatorPageContainer />
    );
};

export default CalculatorPage;