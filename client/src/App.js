import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import CreateFunRun from './components/CreateFunRun';
import EditFunRun from './components/EditFunRun';
import OneFunRun from './components/OneFunRun';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Fun Run</h1>
      <Routes>
        
        <Route path='/' element={<DisplayAll />} />
        <Route path='/new' element={<CreateFunRun />} />
        <Route path='/funRuns/:id' element={<OneFunRun />} />
        <Route path='/edit/:id' element={<EditFunRun />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
