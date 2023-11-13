import React, { useEffect, useState } from "react";
import Receipt from "./Receipt";
import Search from "./Search";

export default function Receipts(props) {
  const [receipts, setReceipts] = useState(props.initialState);
  const [lastLength, setLastLength] = useState(0);

  // handleClick is passed to Receipt components as a prop, "lifted"
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

  // on each keypress, check items for match via search
  const handleSearchKeyDown = () => {
    let keyword = document.querySelector("#search").value;
    let keywordShortened = keyword.slice(0, keyword.length);

    // empty search field resets receipts to original state
    if (keyword.length === 0 || keyword.length === null) {
      setReceipts(props.initialState);
      return;
    }

    // if search length is less than last length, reset receipts to original state then searches again for correct results
    if (keyword.length < lastLength) {
      setReceipts(props.initialState);
      keyword = document.querySelector("#search").value;
      keywordShortened = keyword.slice(0, keyword.length);
      const research = receipts.filter((receipt) => receipt.person.toLowerCase().match(keywordShortened.toLowerCase()));
      setReceipts(research);

      // if typing is longer than last length, search for correct results
    } else {
      const receiptSearch = receipts.filter((receipt) => receipt.person.toLowerCase().match(keywordShortened.toLowerCase()));
      setReceipts(receiptSearch);
    }

    // set last length to current length
    setLastLength(keyword.length);
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
