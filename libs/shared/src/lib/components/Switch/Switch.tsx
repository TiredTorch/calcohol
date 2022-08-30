import { FC } from "react";
import { Box, Switch as MUISwitch, Typography } from "@mui/material";
import { SwitchProps } from "./Switch.types";
import { switchStyles } from "./Switch.styles";

export const Switch: FC<SwitchProps> = ({
	leftLable,
	rightLable,
	...rest
}) => {
	return (
		<Box
			component="div"
			sx={switchStyles.root}
		>
			<Typography
				variant="h2"
				sx={switchStyles.text}
			>
				{leftLable}

			</Typography>
			<MUISwitch
				{...rest}
			/>
			<Typography
				variant="h2"
				sx={switchStyles.text}
			>
				{rightLable}

			</Typography>
		</Box>
	);
};

export default Switch;