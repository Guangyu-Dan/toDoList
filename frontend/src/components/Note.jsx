import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p class='displayContent'>{props.content}</p>
      <button style={{ backgroundColor: "#fff" }} onClick={handleClick}>
        <DeleteIcon />
      </button>
      <p class='displaySaveTime'>{props.saveTime}</p>
    </div>
  );
}

export default Note;
