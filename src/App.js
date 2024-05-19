import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar title="TextUtils1" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="enter the text to analyze" />
      </div>
      <About />
    </>
  );
}

export default App;
