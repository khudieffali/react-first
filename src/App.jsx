import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import MyRoutes from "./config/MyRoutes";

function App() {
  return (
    <div className="App">
        <Header/>
        <MyRoutes/>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
