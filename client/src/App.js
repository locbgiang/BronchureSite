import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
