import "./styles.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Switch from "react-router-dom";
import Route from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [textColor, settextColor] = useState("dark");

  // alert state
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light" && textColor === "dark") {
      setMode("dark");
      settextColor("light");
      document.body.style.backgroundColor = "#325187";
      showAlert("Dark mode is enabled", "success");
    } else if (Mode === "dark") {
      setMode("light");
      settextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    } else if (Mode === "dark" || Mode === "light") {
      setMode("danger");
      settextColor("red");
      document.body.style.backgroundColor = "red";
      showAlert("Red mode is enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        Mode={Mode}
        toggleMode={toggleMode}
        textColor={textColor}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Try Textutil Made By Sameer - Words Counter | Lowercase to uppercase | uppercase
          to Lowercase"
          textColor={textColor}
        />
      </div>
      <About />
    </>
  );
}
export default App;
