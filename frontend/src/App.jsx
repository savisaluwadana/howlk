import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import Starters from "./Components/Starters/Starters";

import { createContext, useState } from "react";
import AddContent from "./Components/AddContent/AddContent";
import Unknown from "./Components/Misc/Unknown";
import Courses from "./Components/Courses/Courses";
import AddCourses from "./Components/Courses/AddCourses.jsx/AddCourses";
export const UserContext = createContext();
function App() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({});

  const BASE = "http://localhost:8000"

  const theStates = {
    loading,
    setLoading,
    status,
    setStatus,
    user,
    setUser,
    BASE
  };

  return (
    <>
      <UserContext.Provider value={theStates}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/starters" element={<Starters />}></Route>
            <Route path="/addContent" element={<AddContent/>}></Route>
            <Route path="/courses" element={<Courses/>}></Route>
            <Route path="/addcourses" element={<AddCourses/>}></Route>
            <Route path="*" element={<Unknown/>}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
