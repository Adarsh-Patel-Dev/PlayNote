import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { FilterModal } from "./components/Modals/FilterModal/FilterModal";
import { ColorModal } from "./components/Modals/ColorModal/ColorModal";
import { ArchivePage } from "./pages/ArchivePage/ArchivePage";
import { TrashPage } from "./pages/TrashPage/TrashPage";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/filter" element={<FilterModal />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/trash" element={<TrashPage />} />
      </Routes>
    </div>
  );
}

export default App;
