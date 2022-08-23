import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Switch, Input, Button } from "../../components";
import { calculatorPageContainerStyles } from "./CalculatorPageContainer.styles";

export const CalculatorPageContainer = () => {
	return (
		<Box
			component="div"
			sx={calculatorPageContainerStyles.root}
		>
			<Box
				component="div"
				sx={calculatorPageContainerStyles.calculatorWrapper}
			>
				<Typography variant="h2">Калькулятор</Typography>
				<Box
					sx={{
						margin: "20px 0"
					}}
					component="img"
					src="/calc.svg"
				/>
			</Box>
			<Box
				component="div"
				sx={calculatorPageContainerStyles.resultWrapper}
			>
				<Typography variant="h3">Напитки</Typography>
				<Box>

				</Box>
				<Box
					component="div"
					sx={{
						width: "50%"
					}}
				>
					<Button>Больше напитков</Button>
				</Box>
			</Box>
			<Box
				component="div"
				sx={calculatorPageContainerStyles.inputWrapper}
			>
				<Typography variant="h3">Ваши пупа и лупа</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-evenly",
						margin: "15px 0 0"
					}}
				>
					<Typography variant="h4">Муж.</Typography>
					<Switch />
					<Typography variant="h4">Жен.</Typography>
				</Box>

				<Input label="Вес" />
				<Input label="Рост" />
				<Input label="Возраст" />
				<Button
					sx={{
						margin: "20px 0",
						color: "black"
					}}
				>
					Искать

				</Button>
			</Box>
		</Box>
	);
};

export default CalculatorPageContainer;