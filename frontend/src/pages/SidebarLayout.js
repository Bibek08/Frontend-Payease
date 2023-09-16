import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topnav from "../components/Topnav/Topnav";
import Logout from "./Logout";
import Dashboard from "./Dashboard/Dashboard";
import Students from "./Students/Students";
import Accountant from "./Accountant/Accountant";
import FeeStructure from "./FeeStructure/FeeStructure";
import Notification from "./Notifications/Notification";
import Payments from "./payment/Payments";
import Profile from "./My profile/Profile";
import CreateStudent from "./createStudent/CreateStudent";
import CreateAccountant from "./Accountant/CreateAccountant";
import NotificationDetail from "./Notifications/NotificationDetail";

function SidebarLayout() {
  return (
    <Sidebar>
      <Topnav />
      <Routes>
        <Route path="/" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/accountant" element={<Accountant />} />
        <Route path="/feeStructure" element={<FeeStructure />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/NotificationDetail" element={<NotificationDetail />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/CreateStudent" element={<CreateStudent />} />
        <Route path="/CreateAccountant" element={<CreateAccountant />} />
      </Routes>
    </Sidebar>
  );
}

export default SidebarLayout;
