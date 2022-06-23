// ========TODO - to be implemented in future============


import { createContext, useContext, useReducer } from "react";
import { useNoteContext } from "./noteContext";

const FilterContext = createContext();
const useFilterContext = () => useContext(FilterContext);
// const { addToNotes }= useNoteContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "LABEL_HOME":
      return { ...state, label: { ...state.label, home: !state.label.home } };
    case "LABEL_SCHOOL":
      return {
        ...state,
        label: { ...state.label, school: !state.label.school },
      };
    case "LABEL_OFFICE":
      return {
        ...state,
        label: { ...state.label, office: !state.label.office },
      };

    case "PRIORITY_LOW":
      return {
        ...state,
        priority: { ...state.priority, low: !state.priority.low },
      };
    case "PRIORITY_MEDIUM":
      return {
        ...state,
        priority: { ...state.priority, medium: !state.priority.medium },
      };
    case "PRIORITY_HIGH":
      return {
        ...state,
        priority: { ...state.priority, high: !state.priority.high },
      };

    case "SORT_BY_LATEST":
      return { ...state, sortByLatest: action.payload };

    case "SORT_BY_OLDEST":
      return { ...state, sortByOldest: action.payload };

    case "RESET_FILTER":
      return {
        ...state,
        label: {
          home: false,
          school: false,
          office: false,
        },
        priority: {
          low: false,
          medium: false,
          high: false,
        },
        sortByLatest: false,
        sortByOldest: false,
      };

    case "FILTER_MODAL":
      return { ...state, filterModal: payload };

    default:
      return state;
  }
};



const FilterProvider = ({ children }) => {
const { noteState:{addToNotes} }= useNoteContext();

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    filterModal: false,
    label: {
      home: false,
      school: false,
      office: false,
    },
    priority: 3,
    sortByLatest: false,
    sortByOldest: false,
  });

 

  function sortByDate( sortByLatest, notesArray){
    // switch (sortby) {
    //     case "LATEST":
    //         return [...notesArray].sort((a,b) => new Date(b.date) - new Date(a.date))
        
    //     case "OLDEST":
    //         return [...notesArray].sort((a,b) => new Date(a.date) - new Date(b.date))
            
    //     default:
    //         return notesArray;
    // }

    if(sortByLatest){
      return [...notesArray].sort((a,b) => new Date(b.noteCreatedDate) - new Date(a.noteCreatedDate))
    } else{
      return [...notesArray].sort((a,b) => new Date(a.noteCreatedDate) - new Date(b.noteCreatedDate))
    }
}

console.log(sortByDate(filterState.sortByLatest,addToNotes )
)

// function sortByPriority( sortby, notesArray ){
//     switch (sortby) {
//         case "HIGH_TO_LOW":
//             return [...notesArray].sort((a,b) => a.priority - b.priority )
    
//         case "LOW_TO_HIGH":
//             return [...notesArray].sort((a,b) =>b.priority - a.priority )
      
//         default:
//             return notesArray;
//     }
// }

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

     const getNotes = (filterState, addToNotes) => applyFilters(
        filterState,
        sortByDate,
        // sortByPriority,
        // filterByLabels,
        // filterByPriority
    )(addToNotes)
  
    console.log("filter",getNotes(filterState, addToNotes))

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilterContext, FilterProvider };
