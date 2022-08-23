import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Header } from "../../components";
import Footer from "../../components/Footer/Footer";
import { pageLayoutStyles } from "./PageLayout.styles";

export const PageLayout: FC<PropsWithChildren<Record<string, unknown>>> = ({
	children
}) => {
	return (
		<Box
			component="div"
			sx={pageLayoutStyles.root}
		>
			<Header />
			<Box
				component="div"
				sx={pageLayoutStyles.contentWrapper}
			>
				{children}
			</Box>
			<Footer />
		</Box>
	);
};

export default PageLayout;