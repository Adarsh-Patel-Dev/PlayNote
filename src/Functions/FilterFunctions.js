
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

function sortByPriority( sortby, notesArray ){
    switch (sortby) {
        case "HIGH_TO_LOW":
            return [...notesArray].sort((a,b) => a.priority - b.priority )
    
        case "LOW_TO_HIGH":
            return [...notesArray].sort((a,b) =>b.priority - a.priority )
      
        default:
            return notesArray;
    }
}

function filterByPriority( {priority}, notesArray){
    return notesArray.filter(note=>note.priority === priority)
}

function filterByLabels( {labels}, notesArray ){
    return notesArray.filter(note=>note.labels.some(label =>labels.includes(label)) )
}


    const applyFilters = (filterState, ...args) => notes => {
        return args.reduce((acc,curr) => {
            return curr(filterState, acc)
        }, notes)
    }

    export const getNotes = (filterState, notes) => applyFilters(
        filterState,
        sortByDate,
        sortByPriority,
        filterByLabels,
        filterByPriority
    )(notes)