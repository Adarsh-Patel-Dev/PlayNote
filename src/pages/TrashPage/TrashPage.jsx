import React from "react";
import { Asidebar } from "../../components/Asidebar/Asidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { TrashCard } from "../../components/Card/TrashCard/TrashCard";
import { useNoteContext } from "../../Context/noteContext";

function TrashPage() {
  const { noteState } = useNoteContext();
  const { trashNotes } = noteState;
  return (
    <div>
      <Navbar />
      <div className="main-section">
        <Asidebar />
        <div className="main-content flex-col-center">
          <div className="notecard-conatiner flex-row-center">
            {trashNotes.map((note) => (
              <TrashCard key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { TrashPage };
