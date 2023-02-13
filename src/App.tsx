import React from "react";
import './App.css';

import QuoteComponent from "./components/QuoteComponent";
import AddonsComponent from "./components/AddonsComponent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>HOME INSURANCE</p>
        </header>
        <QuoteComponent></QuoteComponent>
        <AddonsComponent></AddonsComponent>
      </div>
    </div>
  );
}
export default App;
