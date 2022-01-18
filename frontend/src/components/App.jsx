import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import axios from 'axios';
import Header from "./Header";
function App(props) {

  useEffect( () => {
      fetchNotes();
  }, []);

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
      const data = await fetch('/initialize');
      const notes = await data.json();
      setNotes(notes);
  };

  function addNote(newNote) {
    console.log(newNote)
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

 function handleSubmit(event) {
    axios.post('/changeNote', notes)
  }

  return (
    <div>
    <Header email={props.email} handleLogout={props.handleLogout} handleSubmit = {handleSubmit} />
      <CreateArea onAdd={addNote}  googleID={props.googleID}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            saveTime={noteItem.saveTime}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
