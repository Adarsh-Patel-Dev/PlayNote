import React from "react";
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
          <Searchbar />
          <div className="notecard-conatiner flex-row-center">
            {archiveNotes.map((note) => (
              <ArchiveCard key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ArchivePage };
