import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ArchivePage } from "./pages/ArchivePage/ArchivePage";
import { TrashPage } from "./pages/TrashPage/TrashPage";
import { Auth } from "./components/Auth/Auth";
import { Login } from "./pages/AuthPages/Login";
import { Signup } from "./pages/AuthPages/SignUp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* private routes */}
        <Route
          path="/archive"
          element={
            <Auth>
              <ArchivePage />
            </Auth>
          }
        />
        <Route
          path="/trash"
          element={
            <Auth>
              <TrashPage />
            </Auth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
