import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

// import { createContext, useState } from "react";
import First from "./Components/First/First";

import Main from "./Components/Main/Main";
import Chart from "./Components/chart/Chart";
import QUestion from "./Components/Question/QUestion";
import Notfound from "./Components/404/Notfound";



function App() {
  // const [blogs, setBlogs] = useState([]);

  return (
    <div>
       <Navbar />
      <Routes>
        
        <Route path='/first' element={<First />} />
        <Route path='/review' element={<Main />} />
        <Route path='/question' element={<QUestion></QUestion>} />
        
        <Route path='/login' element={<Chart></Chart>} />
        <Route path='*' element={<Notfound></Notfound>} />
        
      </Routes>
    </div>
  );
}

export default App;