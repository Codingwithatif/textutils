import React, { useState } from "react";
import "./textForm.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handlelowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleclearClick = () => {
    const newText = "";
    setText(newText);
    setIsTyping(false);
  };

  const handleonChange = (event) => {
    setText(event.target.value);
    if (!isTyping) {
      setIsTyping(true); // Set typing state to true
    }
  };

  const [text, setText] = useState("enter text here");
  const [isTyping, setIsTyping] = useState(false);

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className={`form-control ${isTyping ? "typing" : ""}`}
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handlelowClick}>
          convert to LowerCase
        </button>

        <button className="btn btn-primary mx-6" onClick={handleclearClick}>
          clear
        </button>
      </div>

      <div className="container">
        <h1>summary</h1>
        <p>
          <p>
            {text.split(" ").filter((word) => word.length > 0).length} words and{" "}
            {text.length} characters
          </p>
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word.length > 0).length}{" "}
          minutes required to read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
