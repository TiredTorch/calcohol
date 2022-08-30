import { FC, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Drink } from "@calcohol/shared";
import DotPanel from "./DotPanel/DotPanel";
import DrinksPanel from "./DrinksPanel/DrinksPanel";
import { drinksPageContainerStyles } from "./DrinksPageContainer.styles";
import { DrinksPageContainerProps } from "./DrinksPageContainer.types";

export const DrinksPageContainer: FC<DrinksPageContainerProps> = ({
	data
}) => {
	const [page, setPage] = useState(0);
	const [currentPageData, setCurrentPageData] = useState<Drink[]>([]);

	useEffect(() => {
		setCurrentPageData(data.slice(page * 8, (page + 1) * 8));
	}, [data, page]);

	const handleChangePage = (newPage: number) => setPage(newPage);

	return (
		<Box
			component="div"
			sx={drinksPageContainerStyles.root}
		>
			<Box
				component="div"
				sx={drinksPageContainerStyles.panel}
			>
				<DotPanel
					maxPage={Math.ceil(data.length / 8)}
					currentPage={page}
					handlePage={handleChangePage}
				/>
				<DrinksPanel drinks={currentPageData} />
			</Box>
		</Box>
	);
};

export default DrinksPageContainer;