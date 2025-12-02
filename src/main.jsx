import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "../src/routes/HomePage/HomePage";
import CreatePage from "../src/routes/CreatePage/CreatePage";
import PostPage from "../src/routes/PostPage/PostPage";
import AuthPage from "../src/routes/AuthPage/AuthPage";
import ProfilePage from "../src/routes/ProfilePage/ProfilePage";
import SearchPage from "../src/routes/SearchPage/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./routes/Layout/MainLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
