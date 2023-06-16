import React, { useState } from "react";
import AddNote from "./AddNote/AddNote";
import SavedNote from "./SavedNotes/SavedNote";

function Cards() {
  const [data, setData] = useState([]);
  const addItem = (item) => {
    setData(prevData => [...prevData, item]);
  };

  const removeItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    console.log(data)
  };

  const toggleDone = (id) => {
    setData(prevData => prevData.map(item => item.id === id ? {...item, done: !item.done} : item));
  };

  return (
    <div className="cards-container">
      <AddNote addItem = {addItem}/>
      {data.map((item, index) => {
        return (
          <SavedNote
            key={item.id}
            item={item}
            removeItem={removeItem}
            onToggleDone={toggleDone}
          />
        );
      })}
    </div>
  );
}

export default Cards;
