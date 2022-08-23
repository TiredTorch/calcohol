import { FC } from "react";
import { Button as MUIButton, ButtonProps } from "@mui/material";
import { buttonStyles } from "./Button.styles";

export const Button: FC<ButtonProps> = ({
	children,
	sx,
	...rest
}) => {
	return (
		<MUIButton
			{...rest}
			sx={[buttonStyles.root, sx]}
		>
			{children}
		</MUIButton>
	);
};

export default Button;