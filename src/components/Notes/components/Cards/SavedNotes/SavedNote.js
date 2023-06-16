import React from "react";
import "./SavedNote.css";
import doneImg from "./../../../../../assets/green-icon.svg";
import notDoneImg from "./../../../../../assets/circle.svg";
import recycle from "./../../../../../assets/recycle.svg";
function SavedNote({ item, removeItem,onToggleDone }) {
  return (
    <div className="saved-note">
      <div className="saved-note-info">
        <p className="saved-note-name">{item.title}</p>
        <p className="saved-note-date">{item.date}</p>
      </div>
      <div className="saved-note-images">
        <img
          src={item.done ? doneImg : notDoneImg}
          alt="Done status"
          onClick={() => onToggleDone(item.id)}
        />
        <img
          src={recycle}
          alt=""
          onClick={() => removeItem(item.id)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default SavedNote;
