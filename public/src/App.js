import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskManager from "./pages/TaskManager";
import QRCodeGenerator from "./pages/QRCodeGenerator";
import BookDirectory from "./pages/BookDirectory";
import DiscordBot from "./pages/DiscordBot";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/qrcode-generator" element={<QRCodeGenerator />} />
        <Route path="/book-directory" element={<BookDirectory />} />
        <Route path="/discord-bot" element={<DiscordBot />} />
      </Routes>
    </BrowserRouter>
  );
}
