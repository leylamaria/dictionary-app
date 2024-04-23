import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition} </p>
        <small>
          <em>{props.meaning.example}</em>
        </small>
      </div>
    );
  } else {
    return null;
  }
}
