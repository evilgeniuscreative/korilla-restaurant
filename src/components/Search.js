import React from "react";

export default function Search(props) {
  let matching = [];

  const handleFocus = (e) => {
    document.querySelector("#search").placeholder = "";
  };

  return (
    <section className='searchSection'>
      <label className='searchLabel' htmlFor='search'>
        Search Receipts
      </label>
      <input type='text' id='search' onFocus={handleFocus} onChange={props.handleSearchKeyDown} placeholder='Search for a receipt by name' />
    </section>
  );
}
