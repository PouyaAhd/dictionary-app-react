import React from "react";
import axios from "axios";
import "../App.css";
import { useState, useEffect } from "react";
import { FaVolumeUp } from "react-icons/fa";

function Dictionary() {
  const [words, setWords] = useState([]);
  const [input, setInput] = useState("");
  const [title, setTitle] = useState([]);
  const [invalidWord, setInvalidWord] = useState(false);

  function handleClick() {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
      .then((res) => {
        console.log(res.data);
        setWords(res.data[0].meanings);
        setTitle(res.data);
        setInvalidWord(false);
      })
      .catch((err) => setInvalidWord(true));
  }
  return (
    <div className="container">
      <div className="search-bar">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type any words..."
        />
        <button className="search-btn" onClick={handleClick}>
          Search
        </button>
      </div>

      {invalidWord ? (
        <>Invalid word</>
      ) : (
        <div className="word-define">
          <div className="word-title">
            <h2>{title.map((item) => item.word)}</h2>
            <div className="volume">
              {/* {words.map((item) =>
              item.phonetics[0].audio ? <FaVolumeUp /> : ""
            )} */}
            </div>
          </div>
          <p className="word-POS">
            <span>{title.map((item) => item.phonetic)}</span>
            {words.map((item, index) => (
              <li className="define-each">
                <li className="word-POS-each">{item.partOfSpeech}</li>
                {item.definitions[0].definition}
              </li>
            ))}{" "}
          </p>
          <p className="meaning">
            {/* {words.map(
            (item, index) => item.meanings[index].definitions[index].definition
          )} */}
          </p>
        </div>
      )}
    </div>
  );
}

export default Dictionary;
