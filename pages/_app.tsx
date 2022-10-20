import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";
import { lightTheme } from "../themes/light-theme";
import { UiProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (...args: [key: string]) =>
          fetch(...args).then((res) => res.json()),
      }}
    >
      <UiProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
    </SWRConfig>
  );
}

export default MyApp;
