import React from "react";
import { Asidebar } from "../../components/Asidebar/Asidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import { NoteCard } from "../../components/Card/NoteCard/NoteCard";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { useNoteContext } from "../../Context/noteContext";

function HomePage() {
  const { noteState } = useNoteContext();
  const { addToNotes } = noteState;

  return (
    <div>
      <Navbar />
      <div className="main-section">
        <Asidebar />
        <div className="main-content flex-col-center">
          <Searchbar />
          <div className="notecard-conatiner flex-row-center">
            {addToNotes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomePage };
