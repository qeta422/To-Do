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
import {
  faMoon,
  faSun,
  faPlus,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [theme, setTheme] = React.useState("white");
  const [icon, setIcon] = React.useState(faMoon);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [notes, setNotes] = React.useState([]);
  const [filter, setFilter] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

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

  const addNote = (newNote) => {
    setNotes([...notes, { text: newNote, completed: false }]);
    closeModal();
  };

  const toggleNoteCompletion = (index) => {
    setNotes(
      notes.map((note, i) =>
        i === index ? { ...note, completed: !note.completed } : note
      )
    );
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredNotes = notes.filter((note) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && note.completed) ||
      (filter === "incomplete" && !note.completed);
    const matchesSearch = note.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={`App ${theme}`}>
      <Header />
      <div className="content">
        <Input>
          <input
            className="input"
            type="text"
            placeholder="Search note..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Input>
        <Filter className="filter">
          <div className="dropdown">
            <button className="dropbtn">
              {filter.toUpperCase()} <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className="dropdown-content">
              <button onClick={() => handleFilterChange("all")}>All</button>
              <button onClick={() => handleFilterChange("completed")}>
                Completed
              </button>
              <button onClick={() => handleFilterChange("incomplete")}>
                Incomplete
              </button>
            </div>
          </div>
        </Filter>
        <Mode className="mode" toggleTheme={toggleTheme}>
          <FontAwesomeIcon icon={icon} />
        </Mode>
      </div>
      <div className="notes-list">
        {filteredNotes.map((note, index) => (
          <div
            key={index}
            className={`note ${note.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={note.completed}
              onChange={() => toggleNoteCompletion(index)}
            />
            <span>{note.text}</span>
          </div>
        ))}
      </div>
      <Add>
        <button className="add show-modal" onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {isModalOpen && <div className="overlay"></div>}
      </Add>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          onAddNote={addNote}
          className="modal"
          theme={theme}
        />
      )}
    </div>
  );
}

export default App;
