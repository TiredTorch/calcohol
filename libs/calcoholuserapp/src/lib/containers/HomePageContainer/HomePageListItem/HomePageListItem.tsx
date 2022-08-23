import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Button } from "../../../components";
import { HomePageListItemProps } from "./HomePageListItem.types";
import { homePageListItemStyles } from "./HomePageListItem.styles";

export const HomePageListItem: FC<HomePageListItemProps> = ({
	title,
	link
}) => {
	const router = useRouter();

	const handleRedirect = () => router.push(link);

	return (
		<>
			<Box
				sx={homePageListItemStyles.root}
			>
				<Typography variant="h2">{title}</Typography>
				<Button
					onClick={handleRedirect}
				>
					Туда его!
				</Button>
			</Box>
		</>
	);
};

export default HomePageListItem;