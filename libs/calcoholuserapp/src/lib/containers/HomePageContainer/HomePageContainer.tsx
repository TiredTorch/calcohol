import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import HomePageListItem from "./HomePageListItem/HomePageListItem";
import { homePageContainerStyles } from "./HomePageContainer.styles";
import { homePageContainerTexts } from "./HomePageContainer.texts";

export const HomePageContainer = () => {
	const intl = useIntl();

	const homePageContainerItems = [
		{
			title: "Какулятор",
			link: "/calculator"
		},
		{
			title: "Напитки",
			link: "/drinks"
		},
		{
			title: "Хз",
			link: "/"
		}
	];

	return (
		<Box
			component="div"
			sx={homePageContainerStyles.root}
		>
			<Box
				component="div"
				sx={homePageContainerStyles.buttonsWrapper}
			>
				{homePageContainerItems.map((item, i) => (
					<HomePageListItem
						key={i}
						title={item.title}
						link={item.link}
					/>
				))}
			</Box>
			<Box
				component="div"
				sx={homePageContainerStyles.descriptionWrapper}
			>
				<Typography variant="h3">{intl.formatMessage(homePageContainerTexts.greetingsTexts)}</Typography>
				<Box
					component="img"
					src="/electrochemistry.svg"
				/>
				<Typography variant="h4">{intl.formatMessage(homePageContainerTexts.askingForHelpTexts)}</Typography>
			</Box>
		</Box>
	);
};

export default HomePageContainer;