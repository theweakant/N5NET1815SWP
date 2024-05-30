import Dashboard from "../../../components/Dashboard/Dashboard";
import SideBar from "../../../components/SideBar/SideBar";
import "./AdminPage.css";
export default function AdminPage() {
  return (
    <div className="Admin-dashboard">
      <SideBar></SideBar>

      <div className="admin-content">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}
