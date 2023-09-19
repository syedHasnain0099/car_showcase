"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";


const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };


  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;