import { FC } from "react";
import { TextField as MUIInput, TextFieldProps } from "@mui/material";

export const Input: FC<TextFieldProps> = ({
	...rest
}) => {
	return (
		<MUIInput
			variant="standard"
			InputProps={{
				disableUnderline: true
			}}
			{...rest}
		/>
	);
};

export default Input;