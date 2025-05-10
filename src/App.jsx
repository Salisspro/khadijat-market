
import './App.css'
import Main from './components/pages/Main'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeeAll from './components/router/SeeAll';

function App() {

  return (
    <div className='
      bg-gradient-to-t from-slate-800 to-slate-600 text-slate-300
    '>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/SeeAll" element={<SeeAll/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
