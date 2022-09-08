import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import { Input } from "./Input";

afterEach(() => {
	jest.resetAllMocks();
});

const errorHelperClassName = "Mui-error";
const mockedHelperText = faker.datatype.string(10);

it("should render input without error", () => {
	const { baseElement } = render(
		<Input
			error={false}
			helperText={mockedHelperText}
		/>
	);

	expect(baseElement).toBeInTheDocument();
	expect(baseElement).toMatchSnapshot();
});

it("should render input with error", () => {
	const { baseElement } = render(
		<Input
			error
			helperText={mockedHelperText}
		/>
	);

	expect(baseElement).toBeInTheDocument();
	expect(baseElement).toMatchSnapshot();
	expect(baseElement.getElementsByClassName(errorHelperClassName)[0]).toBeInTheDocument();
});