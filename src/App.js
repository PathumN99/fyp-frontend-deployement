import React from 'react';
import Navbar from '../src/components/Navbar';
import Forecasting from './pages/Forecasting';
import Analaysis from './pages/Analaysis';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import Dataview from './pages/Dataview';
import InflationData from './pages/Inflation';
import About from './pages/About';

function App() {

  return (
    <div className='wrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/forecasting' element={<Forecasting />}></Route>
        <Route path='/inflation' element={<InflationData />}></Route>
        <Route path='/add-analysis' element={<Analaysis />}></Route>
        <Route path='/view-analysis' element={<Dataview />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
