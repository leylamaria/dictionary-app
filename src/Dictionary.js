import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "445od433c4e95b2d074a20e8fb1cta30";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordUpdate(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>Which word would you like to look up?</label>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              placeholder="Search for a word.."
              autoFocus={true}
              className="form-control search-input"
              onChange={handleKeywordUpdate}
            />
          </form>
          <small className="hint">
            i.e. apathetic, conundrum, integrity, empathic{" "}
          </small>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
