import { FC } from "react";
import { Box } from "@mui/material";
import DotPanelItem from "./DotPanelItem/DotPanelItem";
import { dotPanelStyles } from "./DotPanel.styles";
import { DotPanelProps } from "./DotPanel.types";

const DotPanel: FC<DotPanelProps> = ({
	currentPage,
	handlePage,
	maxPage
}) => {
	const handleClick = (page: number) => () => handlePage(page);

	return (
		<Box
			component="div"
			sx={dotPanelStyles.root}
		>
			{Array.from({ length: maxPage }).map((_, i) => (
				<DotPanelItem
					key={i}
					index={i}
					currentPageIndex={currentPage}
					onClick={handleClick(i)}
				/>
			))}
		</Box>
	);
};

export default DotPanel;