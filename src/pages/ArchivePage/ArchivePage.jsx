import React from "react";
import noteImg from "../../Assets/archive.svg";
import { Asidebar } from "../../components/Asidebar/Asidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { ArchiveCard } from "../../components/Card/ArchiveCard/ArchiveCard";
import { useNoteContext } from "../../Context/noteContext";

function ArchivePage() {
  const { noteState } = useNoteContext();
  const { archiveNotes } = noteState;
  return (
    <div>
      <Navbar />
      <div className="main-section">
        <Asidebar />
        <div className="main-content flex-col-center">
          <div className="notecard-conatiner flex-row-center">
            {archiveNotes.length ? (
              archiveNotes.map((note) => (
                <ArchiveCard key={note._id} note={note} />
              ))
            ) : (
              <div className="empty-notes-container flex-col-center">
                <p className="empty-notes-heading">
                  Your archived notes appear here
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

export { ArchivePage };
