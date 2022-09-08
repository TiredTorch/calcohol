import "@testing-library/jest-dom";
import { render, queryByText } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import { Switch } from "./Switch";

afterEach(() => {
	jest.resetAllMocks();
});

const mockedLeftLable = faker.datatype.string(10);
const mockedRightLable = faker.datatype.string(10);

it("should render switch", () => {
	const { baseElement } = render(
		<Switch
			leftLable={mockedLeftLable}
			rightLable={mockedRightLable}
		/>
	);

	expect(baseElement).toBeInTheDocument();
	expect(queryByText(baseElement, mockedLeftLable)).toBeInTheDocument();
	expect(queryByText(baseElement, mockedRightLable)).toBeInTheDocument();
	expect(baseElement).toMatchSnapshot();
});