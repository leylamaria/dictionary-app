import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <Phonetic phonetic={props.results.phonetic} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                {" "}
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
