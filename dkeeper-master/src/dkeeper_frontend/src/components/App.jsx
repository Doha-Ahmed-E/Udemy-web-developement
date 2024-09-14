import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {dkeeper_backend} from "../../../declarations/dkeeper_backend";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addItem(inputText) {
    setNotes((prevNotes) => {
      dkeeper_backend.createNote(inputText.title,inputText.content);
      return [inputText, ...prevNotes];
    });
  }

  async function fetchDate() {
    const notesArray = await dkeeper_backend.readNotes();
    setNotes(notesArray);    
  }

  useEffect(()=>{
    fetchDate();
  },[]);

  function deleteItem(id) {
    setNotes((prevNotes) => {
      dkeeper_backend.deleteNote(id);
      return prevNotes.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addClick={addItem} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delClick={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

