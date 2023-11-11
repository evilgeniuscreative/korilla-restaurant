import React from "react";

export default function Search() {
  const handleKeyDown = (e) => {
    // on each keypress, check items for match via search
    if (e.key === "Enter") {
      console.log("e.key", e.key);
      return null;
    }

    const handleSearch = () => {
      // search for names that match search query in data
      return null;
    };

    return (
      <section id='search'>
        <input type='text' />
        <button>Search</button>
      </section>
    );
  };
}
