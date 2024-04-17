import React from "react";
import "./App.css";
import { Router } from "./Router";
import { RegisterPage } from "./pages/register";
import LoginPage from "./pages/login";

function App() {
  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
}

export default App;
