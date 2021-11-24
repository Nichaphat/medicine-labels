import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SiteRender from "./components/SiteRender";
function App() {
  return (
    <div>
      <div>
        <Route path="/login" component={LoginForm} />
        <SiteRender />
      </div>
    </div>
  );
}
export default App;
