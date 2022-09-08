import { FC } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { Box, Typography } from "@mui/material";
import { Button, Input, Switch, UserPhysProps } from "@calcohol/shared";
import { Slider } from "../../ui";
import { searchDrinkCombinationFormStyles } from "./SearchDrinkCombinationForm.styles";
import { searchDrinkCombinationFormSchema } from "./SearchDrinkCombinationForm.schema";
import { SearchDrinkCombinationFormProps } from "./SearchDrinkCombinationForm.types";

export const SearchDrinkCombinationForm: FC<SearchDrinkCombinationFormProps> = ({
	handleSubmitForm
}) => {
	const schema = searchDrinkCombinationFormSchema();
	const initialValues: UserPhysProps = {
		weight: "",
		proportion: 75,
		gender: false
	};

	const handleProportion = (
		setFieldValue: FormikHelpers<Record<string, unknown>>["setFieldValue"],
		name: string
	) => {
		return (_: Event, value: number | number[]) => setFieldValue(name, value);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmitForm}
			validationSchema={schema}
		>
			{({ handleSubmit, setFieldValue, values, handleChange, touched, errors }) => (
				<Form
					role="form"
					onSubmit={handleSubmit}
					style={{
						height: "100%"
					}}
				>
					<Box
						sx={searchDrinkCombinationFormStyles.root}
						component="div"
					>
						<Typography variant="h3">Insert your data</Typography>
						<Switch
							value={values.gender}
							name="gender"
							leftLable={"Male"}
							rightLable={"Female"}
							onChange={handleChange}
						/>
						<Input
							placeholder="Weight"
							name="weight"
							value={values.weight}
							onChange={handleChange}
							error={touched.weight && Boolean(errors.weight)}
							helperText={touched.weight && errors.weight}
						/>
						<Slider
							name="gender"
							value={values.proportion}
							onChange={handleProportion(setFieldValue, "proportion")}
						/>
						<Button
							type="submit"
							data-testid="submit"
						>
							Search
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default SearchDrinkCombinationForm;