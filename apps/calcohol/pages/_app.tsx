import Head from "next/head";
import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MobileWrapperLayout, theme } from "@calcohol/shared";
import { routes } from "../routes";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Calcohol</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <MobileWrapperLayout routes={routes}>
            <Component {...pageProps} />
          </MobileWrapperLayout>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
};

export default CustomApp;
