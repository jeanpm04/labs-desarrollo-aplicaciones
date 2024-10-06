import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/dashboard/Profile";
import Settings from "./components/dashboard/Settings";
import Messages from "./components/dashboard/Messages";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Ruta principal de Dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
              {/* Rutas anidadas */}
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="messages" element={<Messages />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
