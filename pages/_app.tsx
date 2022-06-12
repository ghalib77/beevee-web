import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <Component key={asPath} {...pageProps} />;
    </AnimatePresence>
  );
}

export default MyApp;
