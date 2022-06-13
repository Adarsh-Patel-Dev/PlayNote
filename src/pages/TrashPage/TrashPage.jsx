import React from "react";
import noteImg from "../../Assets/trash.svg";
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
            {trashNotes.length ? (
              trashNotes.map((note) => <TrashCard key={note._id} note={note} />)
            ) : (
              <div className="empty-notes-container flex-col-center">
                <p className="empty-notes-heading">
                  Your Trashed notes appear here
                </p>
                <div className="empty-notes-img">
                  <img src={noteImg} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { TrashPage };
