import React from "react";
import { AppHeader } from "./components/Header/Header";
import { MainContent } from "./page/MainContent";

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
