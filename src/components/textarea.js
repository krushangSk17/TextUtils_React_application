import React, { useState } from "react";

export default function Textarea(props) {
  const [text, settext] = useState("enter text here");

  const HandleUpClick = () => {
    settext(text.toUpperCase());
    props.show("text has been uppercased", "success");
  };

  const HandleLowClick = () => {
    settext(text.toLowerCase());
    props.show("text has been lowercased", "success");
  };

  const HandleClear = () => {
    settext("");
    props.show("text has been cleared", "success");
  };

  const HandleOnChange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <div
        className={`mb-3 container text-${
          props.mode === "dark" ? "white" : "dark"
        }`}
      >
        <h1>{props.heading}</h1>
        <textarea
          className={`form-control text-${
            props.mode === "dark" ? "white" : "dark"
          } bg-${props.mode === "light" ? "white" : "black"}`}
          value={text}
          onChange={HandleOnChange}
          id="mybox"
          rows="8"
        ></textarea>

        <button className="btn btn-primary my-2 mx-1" onClick={HandleUpClick}>
          To UpperCase
        </button>

        <button className="btn btn-primary my-2 mx-1" onClick={HandleLowClick}>
          To LowerCase
        </button>

        <button className="btn btn-primary my-2 mx-1" onClick={HandleClear}>
          Clear (X)
        </button>

        <h2>Text Analysis</h2>
        <p>
          {text.trim().split(" ")[0] === "" ? 0 : text.trim().split(" ").length}{" "}
          words and {text.length} letters
        </p>

        <h2>Speaking time</h2>
        <p>{(text.trim().split(" ").length * 0.008).toFixed(2)} minutes</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
