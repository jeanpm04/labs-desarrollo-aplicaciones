import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="settings">Settings</Link></li>
          <li><Link to="messages">Messages</Link></li>
        </ul>
      </nav>

      {/* Aquí se renderizan las rutas anidadas */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
