import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import ViewPokemon from './pages/ViewPokemon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/:id' element={<ViewPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
