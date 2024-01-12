import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskManager from "./pages/TaskManager";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task-manager" element={<TaskManager />} />
      </Routes>
    </BrowserRouter>
  );
}
