
import './App.css'
import Main from './components/pages/Main'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeeAll from './components/router/SeeAll';
import Phones from './components/router/Phones';
import GirlsDress from './components/router/GirlsDress';
import Milks from './components/router/Milks';
import Shoes from './components/router/Shoes';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SeeAll" element={<SeeAll />} />
          <Route path="/Phones" element={<Phones />} />
          <Route path="/GirlsDress" element={<GirlsDress />} />
          <Route path="/Milks" element={<Milks />} />
          <Route path="/Shoes" element={<Shoes/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
