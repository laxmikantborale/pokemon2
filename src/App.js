import React from "react";
// import Home from "./components/Home";

import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const LazyHome = React.lazy(()=> import('./components/Home'))

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LazyHome />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;


// https://glowing-blini-71cf3f.netlify.app
