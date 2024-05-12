import React, { useState } from "react";
import "./App.css";
import "./sass/main.scss";
import Header from "./components/Header";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Mode from "./components/Mode";
import Add from "./components/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [theme, setTheme] = useState("dark");
  const [icon, setIcon] = useState(faMoon);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "white" : "dark");
    setIcon(icon === faMoon ? faSun : faMoon);
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <Input>
          {" "}
          <input
            className="input"
            color={theme}
            type="text"
            placeholder="Search note..."
          />
        </Input>
        <Filter className={`filter ${theme}`} color={theme}>
          <p>
            ALL &nbsp; &nbsp; &nbsp; <FontAwesomeIcon icon={faChevronDown} />
          </p>
        </Filter>
        <Mode className={`mode ${theme}`}>
          <button onClick={toggleTheme}>
            <FontAwesomeIcon icon={icon} />
          </button>
        </Mode>
      </div>
      <Add>
        <button className={`add ${theme}`}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </Add>
    </div>
  );
}

export default App;
