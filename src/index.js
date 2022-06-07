import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { NotesProvider } from "./Context/noteContext"
import { ArchiveProvider } from "./Context/archiveContext"

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <NotesProvider>
    {/* <ArchiveProvider> */}
      <App />
    {/* </ArchiveProvider> */}
      </NotesProvider>
    </Router>
   </React.StrictMode>,
  
  document.getElementById("root")
);
