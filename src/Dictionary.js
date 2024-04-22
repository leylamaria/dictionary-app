import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
  }

  function handleKeywordUpdate(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type your word"
          onChange={handleKeywordUpdate}
        />
      </form>
    </div>
  );
}
