import { FC } from "react";
import { ButtonProps, Button as MUIButton } from "@mui/material";

export const Button: FC<ButtonProps> = ({
	children,
	...rest
}) => {
	return (
		<MUIButton
			{...rest}
		>
			{children}
		</MUIButton>
	);
};

export default Button;