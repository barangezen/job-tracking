import React from "react";
import { Provider } from "react-redux";
import { AppHeader } from "./components/Header/Header";
import { MainContent } from "./page/MainContent";
import {store} from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <AppHeader />
      <MainContent />
    </Provider>
  );
}

export default App;
