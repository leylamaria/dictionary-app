import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "445od433c4e95b2d074a20e8fb1cta30";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordUpdate(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word.."
            onChange={handleKeywordUpdate}
          />
        </form>
        <small className="hint">
          i.e. apathetic, conundrum, integrity, love{" "}
        </small>
      </section>
      <Results results={results} />
    </div>
  );
}
