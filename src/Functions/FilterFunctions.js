
const { addToNotes } = useNoteContext();

function sortByDate( sortby, notesArray){
    switch (sortby) {
        case "LATEST":
            return [...notesArray].sort((a,b) => new Date(b.date) - new Date(a.date))
        
        case "OLDEST":
            return [...notesArray].sort((a,b) => new Date(a.date) - new Date(b.date))
            
        default:
            return notesArray;
    }
}

function filterByPriority( {priority}, notesArray){
    return notesArray.filter(note=>note.priority === priority)
}

function filterByLabel( {labels}, notesArray ){
    return notesArray.filter(note=>note.labels.some(label =>labels.includes(label)) )
}

function filteredNotes(

)