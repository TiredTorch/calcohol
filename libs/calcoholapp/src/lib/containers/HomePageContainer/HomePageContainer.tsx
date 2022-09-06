import { Box, Typography } from "@mui/material";
import { homePageContainerStyles } from "./HomePageContainer.styles";

export const HomePageContainer = () => {
	return (
		<Box
			sx={homePageContainerStyles.root}
		>
			<Typography variant="h3">Welcome to Calcohol app</Typography>
			<Typography variant="h4">To continue, choose 'calculator' in a SideBar</Typography>
		</Box>
	);
};

export default HomePageContainer;