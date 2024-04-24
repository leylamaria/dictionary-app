import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          <strong>Definition:</strong> {props.meaning.definition}{" "}
        </p>
        <small>
          <em>
            {" "}
            <strong>Example:</strong> {props.meaning.example}
          </em>
        </small>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
