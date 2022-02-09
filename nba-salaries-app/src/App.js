
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage'
import PlayersPage from './pages/PlayersPage'
import ContractsPage from './pages/ContractsPage';
import PositionsPage from './pages/PositionsPage';
import SalariesPage from './pages/SalariesPage';
import TeamsPage from './pages/TeamsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NBA Salaries</h1>
      </header>
      <div className="App-midsection">
        <div className="Side-navbar">
          <nav>
            <ul>
              <li><Link to="/">HomePage</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/players">Players</Link></li>
              <li><Link to="/positions">Positions</Link></li>
              <li><Link to="/contracts">Contracts</Link></li>
              <li><Link to="/salaries">Salaries</Link></li>
            </ul>
          </nav>
        </div>
        <div className="Page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/positions" element={<PositionsPage />} />
            <Route path="/contracts" element={<ContractsPage />} />
            <Route path="/Salaries" element={<SalariesPage />} />
          </Routes>
        </div>
      </div>
      <footer className='App-footer'>
        <h2>this is our footer</h2>
        <h3>yodae and christian</h3>
      </footer>   
    </div>
    
  );
}

export default App;
