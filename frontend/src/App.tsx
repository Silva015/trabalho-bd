import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowStudents from "./pages/ShowStudents";
import ClassRatings from "./pages/ClassRatings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-students" element={<ShowStudents />} />
        <Route path="/class/:id" element={<ClassRatings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
