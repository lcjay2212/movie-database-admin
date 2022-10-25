import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import router from "next/dist/client/router";
import React, { createContext, useEffect, useState } from "react";
import NProgress from "nprogress";
import "../styles/globals.css";

export const RouteContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [currentRoute, setCurrentRoute] = useState("movies");

  useEffect(() => {
    const nprogressStart = (): void => NProgress.start();
    const nprogressDone = (): void => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", nprogressStart);
    router.events.on("routeChangeComplete", nprogressDone);
    router.events.on("routeChangeError", nprogressDone);

    return (): void => {
      router.events.off("routeChangeStart", nprogressStart);
      router.events.off("routeChangeComplete", nprogressDone);
      router.events.off("routeChangeError", nprogressDone);
    };
  }, [router.events]);

  return (
    <ChakraProvider>
      <RouteContext.Provider value={currentRoute}>
        <Navbar setCurrentRoute={setCurrentRoute} />
        <Component {...pageProps} />
      </RouteContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
