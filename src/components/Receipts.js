import React, { useState } from "react";
import Receipt from "./Receipt";
//import receiptData from "../data/receipt-data.js";

export default function Receipts(props) {
  const [receipts, setReceipts] = useState(props.initialState);

  return (
  
    <section>
        <header>
          <h1>Korilla Restaurant</h1>
               <h2>We've got the receipts</h2> 
        </header>

      <section className='receipts'>
        {receipts.map((receipt) => {
          return <Receipt key={receipt.id} person={receipt.person} order={receipt.order} />;
        })}
      </section>
    </section>
  );
}
