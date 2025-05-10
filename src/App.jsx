
import './App.css'
import Main from './components/pages/Main'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeeAll from './components/router/SeeAll';

function App() {

  return (
    <div>
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
