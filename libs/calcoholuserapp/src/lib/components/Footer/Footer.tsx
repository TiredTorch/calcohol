import { Box } from "@mui/material";
import { footerStyles } from "./Footer.styles";

const Footer = () => {
	return (
		<Box
			component="div"
			sx={footerStyles.root}
		/>
	);
};

export default Footer;