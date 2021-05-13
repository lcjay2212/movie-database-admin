import { ChakraProvider } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const RouteContext = createContext(null);

function MyApp({ Component, pageProps }) {

  const [currentRoute, setCurrentRoute] = useState('movies');

  return (
    <ChakraProvider>
      <RouteContext.Provider value={currentRoute}>
        <Navbar setCurrentRoute={setCurrentRoute}/>
        <Component {...pageProps} />
      </RouteContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
