import React, { useState } from "react";

function TextForm(props) {
  const handeUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted Uppercase", "success");
  };

  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted LowerCase", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Message Clear", "success");
  };

  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Text", "success");
  };
  const removePuncutation = () => {
    let punct = [
      "!",
      ",",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      ";",
      ":",
      '"',
      ">"
    ];
  };

  const ChangeText = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1 className={`mb-4 text-${props.textColor}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter Text Here"
            value={text}
            onChange={ChangeText}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="my-2 mx-2 btn btn-primary"
          onClick={handeUpClick}
        >
          Convert To Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="my-2 mx-2 btn btn-primary"
          onClick={handleLwClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="my-2 mx-2 btn btn-primary"
          onClick={handleClear}
        >
          Clear Text
        </button>
        {/* <button
          disabled={text.length === 0}
          className="my-2 mx-2 btn btn-primary"
          onClick={removePuncutation}
        >
          Remove Puncutation
        </button> */}
        <button
          disabled={text.length === 0}
          className="my-2 mx-2 btn btn-primary"
          onClick={copyText}
        >
          Copy Text
        </button>
      </div>
      <div className="container">
        <h3 className={`text-${props.textColor}`}>Your text Summary</h3>
        <p className={`text-${props.textColor}`}>
          {text.split(" ").length} Words. {text.length} Character
        </p>
        <p className={`text-${props.textColor}`}>
          {0.008 * (text.split(" ").length - 1)} Mints to read this
        </p>
        <h3 className={`text-${props.textColor}`}>Preview:</h3>
        <p className={`text-${props.textColor}`}>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
