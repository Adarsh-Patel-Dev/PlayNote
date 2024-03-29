import React from "react";
import noteImg from "../../Assets/add_notes.svg";
import { Asidebar } from "../../components/Asidebar/Asidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import { NoteCard } from "../../components/Card/NoteCard/NoteCard";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { useNoteContext } from "../../Context/noteContext";
import { useFilterContext } from "../../Context/FilterContext";

function HomePage() {
  const { noteState } = useNoteContext();
  const { addToNotes, searchValue, pinnedNotes } = noteState;

  const { filterState } = useFilterContext();
  const { filterModal, label, priority, sortByDate, sortByPriority } =
    filterState;
  const { low, medium, urgent } = priority;
  const { home, school, office } = label;
  const { noteCreatedDate } = useNoteContext();

  function filterByLabelsFun(array) {
    const temp = [...array];
    if (home && school && office) {
      return temp;
    }
    if (home && school) {
      return temp.filter((item) => item.label !== "office");
    }
    if (home && office) {
      return temp.filter((item) => item.label !== "school");
    }
    if (school && office) {
      return temp.filter((item) => item.label !== "home");
    }
    if (school) {
      return temp.filter((item) => item.label == "school");
    }
    if (office) {
      return temp.filter((item) => item.label == "office");
    }
    if (home) {
      return temp.filter((item) => item.label == "home");
    }

    return temp;
  }

  const filterByLabels = filterByLabelsFun(addToNotes);

  function filterByPriorityFun(array) {
    const temp = [...array];
    if (low && medium && urgent) {
      return temp;
    }
    if (low && medium) {
      return temp.filter((item) => item.priority !== "urgent");
    }
    if (low && urgent) {
      return temp.filter((item) => item.priority !== "medium");
    }
    if (medium && urgent) {
      return temp.filter((item) => item.priority !== "low");
    }
    if (medium) {
      return temp.filter((item) => item.priority == "medium");
    }
    if (urgent) {
      return temp.filter((item) => item.priority == "urgent");
    }
    if (low) {
      return temp.filter((item) => item.priority == "low");
    }

    return temp;
  }

  const filterByPriority = filterByPriorityFun(filterByLabels);

  function sortByDateFun(array, sortByDate) {
    let temp = [...array];
    if (sortByDate) {
      return temp.sort(
        (a, b) => new Date(b.noteCreatedDate) - new Date(a.noteCreatedDate)
      );
    }
    if (!sortByDate) {
      return temp.sort(
        (a, b) => new Date(a.noteCreatedDate) - new Date(b.noteCreatedDate)
      );
    }
    return temp;
  }

  const sortedByDate = sortByDateFun( filterByPriority, sortByDate );

  function sortByPriorityFun(array, sortByPriority) {
    let temp = [...array];
    if (sortByPriority) {
      temp.sort((a, b) =>
        a.priority.toUpperCase() > b.priority.toUpperCase() ? 1 : -1
      );
    }
    if (!sortByPriority) {
      temp.sort((a, b) =>
        a.priority.toUpperCase() < b.priority.toUpperCase() ? 1 : -1
      );
    }
    return temp;
  }

  const sortedByPriority = sortByPriorityFun(sortedByDate, sortByPriority);

  const searchResultNotes = sortedByPriority.filter(
    (note) =>
      note.title.includes(searchValue) ||
      note.textareaValue.includes(searchValue) ||
      note.priority.includes(searchValue) ||
      note.label.includes(searchValue)
  );

  return (
    <div>
      <Navbar />
      <div className="main-section">
        <Asidebar />
        <div className="main-content flex-col-center">
          <Searchbar />
            { pinnedNotes.length > 0 &&(<p>Pinned</p>)
              }
          <div className="notecard-conatiner flex-row-center">

          {/* ------- todo------- */}
          
          {/* <div style={{display:"flex", gap:"1rem"}}>
          {
          
            pinnedNotes.length > 0 && pinnedNotes.map((note)=>
              <NoteCard key={note._id} note={note}/>
             )

            }</div> */}
           
            {searchResultNotes.length ? (
              searchValue.length > 0 ? (
                searchResultNotes.map((note) => (
                  <NoteCard key={note._id} note={note} />
                ))
              ) : (
                searchResultNotes.map((note) => (
                  <NoteCard key={note._id} note={note} />
                ))
              )
            ) : (
              <div className="empty-notes-container flex-col-center">
                <p className="empty-notes-heading">
                  Your Notes will appear here.
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

export { HomePage };
