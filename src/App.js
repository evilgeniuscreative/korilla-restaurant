import React, { useState } from "react";
import "./App.css";
import Recipts from "./components/Receipts";
import receiptData from "./data/receipt-data.js";

function App() {
  return (
    <>
      <main>
        <Recipts initialState={receiptData} />
      </main>
    </>
  );
}

export default App;
