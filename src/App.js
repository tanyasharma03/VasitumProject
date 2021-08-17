import React from "react"
import {Switch, Route} from "react-router"
import {BrowserRouter} from "react-router-dom"

import './styles.css'

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/sections/Dashboard";
import AppliedJobs from "./components/sections/AppliedJobs";

function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Switch>
          <Route path="/" exact><Dashboard/></Route>
          {/* <Route path="/appliedjobs"><AppliedJobs /></Route> */}
       </Switch>
    </BrowserRouter>
  );
}

export default App;
