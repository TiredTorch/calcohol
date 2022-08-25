import { Box } from "@mui/material";
import logo from "../../../assets/logo.svg";
import { logoStyles } from "./Logo.styles";

const Logo = () => {
	return (
		<Box
			component="img"
			sx={logoStyles.root}
			src={logo}
		/>
	);
};

export default Logo;