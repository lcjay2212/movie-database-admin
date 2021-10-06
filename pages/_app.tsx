import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import React, { createContext, useState } from "react";
import "../styles/globals.css";

export const RouteContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [currentRoute, setCurrentRoute] = useState("movies");

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
