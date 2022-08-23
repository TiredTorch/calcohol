import { Box } from "@mui/material";
import Logo from "../Logo/Logo";
import { headerStyles } from "./Header.styles";

export const Header = () => {
	return (
		<Box
			component="div"
			sx={headerStyles.root}
		>
			<Logo sx={headerStyles.icon}/>
		</Box>
	);
};

export default Header;