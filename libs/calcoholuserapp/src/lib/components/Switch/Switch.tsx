import { FC } from "react";
import { Switch as MUISwitch, SwitchProps } from "@mui/material";
import { switchStyles } from "./Switch.styles";

export const Switch: FC<SwitchProps> = ({
	...rest
}) => {
	return (
		<MUISwitch
			sx={switchStyles.root}
			{...rest}
		/>
	);
};

export default Switch;