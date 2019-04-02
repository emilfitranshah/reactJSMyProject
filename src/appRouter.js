import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/home/App";
import Profile from "./components/Profile/profile"
const AppRouter = () =>(
  <BrowserRouter>
    <div>
      <Route path="/" exact component={App}/>
      <Route path="/profile" component={Profile}/>
    </div>
  </BrowserRouter>

)

export default AppRouter;
