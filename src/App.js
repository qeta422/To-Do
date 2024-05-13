import React from "react";
import "./App.css";
import "./sass/main.scss";
import Header from "./components/Header";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Mode from "./components/Mode";
import Add from "./components/Add";
import Modal from "./components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [theme, setTheme] = React.useState("white");
  const [icon, setIcon] = React.useState(faMoon);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "white" : "dark"));
    setIcon((prevIcon) => (prevIcon === faMoon ? faSun : faMoon));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`App ${theme}`}>
      <Header />
      <div className="content">
        <Input>
          <input className="input" type="text" placeholder="Search note..." />
        </Input>
        <Filter className="filter">
          <p>
            ALL &nbsp; &nbsp; &nbsp; <FontAwesomeIcon icon={faChevronDown} />
          </p>
        </Filter>
        <Mode className="mode" toggleTheme={toggleTheme}>
          <button toggleTheme={toggleTheme}>
            <FontAwesomeIcon icon={icon} />
          </button>
        </Mode>
      </div>
      <Add>
        <button className="add show-modal" onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {isModalOpen && <div class="overlay"></div>}
      </Add>
      {isModalOpen && (
        <Modal onClose={closeModal} className="modal" theme={theme} />
      )}
    </div>
  );
}

export default App;
