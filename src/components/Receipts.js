import React, { useState } from "react";
import Receipt from "./Receipt";
import Search from "./Search";

export default function Receipts(props) {
  const [receipts, setReceipts] = useState(props.initialState);

  const handleClick = (id) => {
    console.log("handledClick", id);
    const newReceipts = receipts.map((receipt) => {
      if (receipt.id === id) {
        receipt.paid = !receipt.paid;
      }
      return receipt;
    });
    return setReceipts(newReceipts);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "backspace") {
      setReceipts(props.initialState);
      return;
    }

    // on each keypress, check items for match via search
    let keyword = document.querySelector("#search").value;
    let keywordShortened = keyword.slice(0, keyword.length);
    console.log("keyword", keyword.toLowerCase());
    console.log("keyword.length", keyword.length);
    console.log("keywordShortened ", keywordShortened.toLowerCase());

    const receiptSearch = receipts.filter((receipt) => receipt.person.toLowerCase().match(keywordShortened.toLowerCase()));

    setReceipts(receiptSearch);
    return null;
  };

  return (
    <section>
      <header>
        <h1>Korilla Restaurant</h1>
        <h2>We've got the receipts</h2>
      </header>
      <Search receipts={receipts} handleSearchKeyDown={handleSearchKeyDown} />
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
