import { FC } from "react";
import { Box, FormHelperText, Input as MUIInput } from "@mui/material";
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = ({
	error,
	helperText,
	...rest
}) => {
	return (
		<Box>
			<MUIInput
				disableUnderline
				{...rest}
			/>
			<FormHelperText
				error={error}
			>
				{helperText}
			</FormHelperText>
		</Box>
	);
};

export default Input;