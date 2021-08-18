import React from "react"
import {Switch, Route} from "react-router"
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles.css'

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/sections/Dashboard";
import AppliedJobs from "./components/sections/AppliedJobs";
import Saved from "./components/sections/Saved"

function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Switch>
          <Route path="/" exact><Dashboard/></Route>
          <Route path="/appliedjobs"><AppliedJobs /></Route> 
          <Route path="/saved"><Saved /></Route> 
       </Switch>
    </BrowserRouter>
  );
}

export default App;
