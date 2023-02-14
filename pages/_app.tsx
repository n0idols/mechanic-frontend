import Page from "@/components/Page";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
