import React from "react";
import ContextProvider from "./Context";
import InfoPanel from "./components/InfoPanel";
import Main from "./components/Main";
import HelpButton from "./components/HelpButton";
import { BrowserRouter } from "react-router-dom";

const App = () => {

  return (
      <BrowserRouter>
      <ContextProvider>
        <div className="App">
          <Main />
          <InfoPanel />
          <HelpButton />
        </div>
        </ContextProvider>

      </BrowserRouter>
  );
};

export default App;
