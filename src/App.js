import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import BoholPage from './pages/BoholPage';
// import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <div id="ezoic-pub-ad-placeholder-110"> </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BoholPage />} />
          <Route path="/my-bohol-travel-level" element={<BoholPage />} />
          <Route path="*" element={<BoholPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;