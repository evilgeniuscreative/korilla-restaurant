import React, { useState } from "react";
import Receipt from "./Receipt";

export default function Receipts(props) {
  const [receipts, setReceipts] = useState(props.initialState);

  const handleClick = (id) => {
    console.log("handledClick", id);
    
    return null;
  };

  return (
    <section>
      <header>
        <h1>Korilla Restaurant</h1>
        <h2>We've got the receipts</h2>
      </header>

      <section className='receipts'>
        {receipts.map((receipt) => {
          if (receipt.paid) {
            return null;
          } else {
            return <Receipt handleClick={handleClick} key={receipt.id} receipt={receipt} />;
          }
        })}
      </section>
    </section>
  );
}
