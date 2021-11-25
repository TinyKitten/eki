import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../apollo-client";
import GlobalStyle from "../constants/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
