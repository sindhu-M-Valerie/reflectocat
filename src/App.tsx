import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReflectoCat from "./pages/ReflectoCat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReflectoCat />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
