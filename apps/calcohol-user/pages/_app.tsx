import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { AppIntlProvider, PageLayout, store } from "@calcohol/calcoholuserapp";
import { theme } from "@calcohol/shared";

export const CustomApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<link
					rel="shortcut icon"
					href="/favicon.ico"
				/>
				<title>Calcohol</title>
			</Head>
			<Provider store={store}>
				<AppIntlProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline>
							<PageLayout>
								<Component {...pageProps} />
							</PageLayout>
						</CssBaseline>
					</ThemeProvider>
				</AppIntlProvider>
			</Provider>
		</>
	);
};

export default CustomApp;
