import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import SingleNote from "./SingleNote";
import CreateArea from "./CreateArea";
import HighlightIcon from "@material-ui/icons/Highlight";
import DeleteIcon from "@material-ui/icons/Delete";
import Header from "../Header"
import './styles.css'

function Notes() {
    const [notes, setNotes] = useState([
        { "title": "Cement", "content": "Send cement to 5th floor." },
        { "title": "BackPack", "content": "Pack your bag for according to tomorrow's time-table" }
    ]);

    function addNote(newNote) {
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

    return (
        <div
        // style={{ backgroundColor: "aqua" }}
        >
            <div style={{ marginBottom: "50%" }}>
                <Header />
                <header className="noteheader" style={{ marginTop: "50px" }}>
                    <h1>
                        <HighlightIcon />
                        Note Buddy
                    </h1>
                </header>
                <CreateArea onAdd={addNote} />
                <div style={{ backgroundColor: "white", marginBottom: "40px" }}>

                    {notes.map((noteItem, index) => {
                        return (
                            <SingleNote
                                key={index}
                                id={index}
                                title={noteItem.title}
                                content={noteItem.content}
                                onDelete={deleteNote}
                            />
                        );
                    })}</div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default Notes;