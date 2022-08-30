import { Box } from "@mui/material";
import { FC } from "react";
import { dotPanelItemStyles } from "./DotPanelItem.styles";
import { DotPanelItemProps } from "./DotPanelItem.types";

const DotPanelItem: FC<DotPanelItemProps> = ({
	index,
	currentPageIndex,
	onClick
}) => {
	return (
		<Box
			onClick={onClick}
			component="div"
			sx={(index === currentPageIndex) ? dotPanelItemStyles.active : dotPanelItemStyles.inActive}
		>

		</Box>
	);
};

export default DotPanelItem;