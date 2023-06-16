import React, { useState } from "react";
import icon from "./../../../../../assets/green-icon.svg";
import plus from "./../../../../../assets/plus.svg";
import { v4 as uuidv4 } from "uuid";
import "./AddNote.css";
function AddNote({ addItem }) {
  const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      id: uuidv4(),
      title,
      date: getCurrentTime(),
      done,
    });

    setTitle("");
    // setDate("");
    // setDone(false);
  };
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const strTime = hours + ":" + minutes + " " + ampm;
    return "Today at " + strTime;
  }
  function handleChange(e) {
    setTitle(e.target.value);
    
  }
  return (
    <div className="add-note-container">
      <div className="icon-input">
        <img src={icon} alt="icon" className="input-icon" />
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className="input-note"
          placeholder="Note"
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        <img src={plus} alt="" />
      </button>
    </div>
  );
}

export default AddNote;
