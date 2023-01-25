import './App.css';
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom"
import { CreateScoreCard } from './components/CreateScoreCard';
import { Finalize } from './components/Finalize';
import { Home } from "./components/Home";
import { LogIn } from './components/LogIn';
import { Score } from './components/Score';

function App() {
  return (
    <>

        <div style={{ display:"flex" }}>
          <ul style={{ display:"inline-flex"}}>
            <li>
              <Link to="/LogIn">Log In</Link>
            </li>
          </ul>
          <ul style={{ display:"flex"}}>
            <li>
              <Link to="/Home" >Home</Link>
            </li>
            <li>
              <Link to="/CreateScoreCard">Create Card</Link>
            </li>
            <li>
              <Link to="/Score">Score</Link>
            </li>
            <li>
              <Link to="/Finalize">Finalize</Link>
            </li>
          </ul>
        </div>
    
    <Routes>
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/CreateScoreCard" element={<CreateScoreCard />} />
      <Route path="/Score" element={<Score />} />
      <Route path="/Finalize" element={<Finalize />} />
    </Routes>
    </>
  );
}

export default App;