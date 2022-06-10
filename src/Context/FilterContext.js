// ========TODO - to be implemented in future============


import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();
const useFilterContext = () => useContext(FilterContext);

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
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    filterModal: false,
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
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilterContext, FilterProvider };
