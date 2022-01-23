import Reaact, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="app">
      
      {/*calling the header class in main*/}
      <Header />

      <div className="app__body">
        <SideBar />
        {/*SideBar*/}
        {/*Feed*/}
        {/*Widgets*/}
      </div>
      
    </div>
  );
}

export default App;
