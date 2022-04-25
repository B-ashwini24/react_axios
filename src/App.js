
import { Routes, Route } from "react-router-dom";
import React_axiosadd from "./components/React_axiosadd";

import Show from "./components/Show";

import Router from "./components/Router";
import Mounting from "./components/Mounting";
import Updating from "./components/Updating";
import Unmounting from "./components/Unmounting";

export default function App() {
  return (
    <div className="App">
 
     

      <Router/>
<Routes>

<Route path="/mount" element={<Mounting/>} />
      <Route path="/unmount" element={<Unmounting/>} />
        <Route path="/update" element={<Updating/>} />
</Routes>
       {
         /**
          *  <Route path="/googlebooks" element={<GoogleBooks />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/show" element={<Show/>} />
        
          */
       }
       
     
    </div>
  );
}
