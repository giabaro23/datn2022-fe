import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/edit-profile/EditProfile";
import Password from "./pages/password/Password";
import JobList from "./pages/job-list/JobList";
import CandidateList from "./pages/candidate-list/CandidateList";
import EmployerDetail from "./pages/employer-detail/EmployerDetail";
import JobDetail from "./pages/job-detail/JobDetail";
import CandidateDetail from "./pages/candidate-detail/CandidateDetail";
import Resume from "./pages/resume/Resume";
import UserList from "./pages/admin-user-list/UserList";
import AddJob from "./pages/add-job/AddJob";
import CompanyJob from "./pages/company-job/CompanyJob";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/profile/resume/:id" element={<Resume />} />
        <Route path="/profile/password/:id" element={<Password />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/user-list" element={<UserList />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/your-job" element={<CompanyJob />} />
        <Route path="/candidatelist" element={<CandidateList />} />
        <Route path="/employer/:id" element={<EmployerDetail />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/candidate/:id" element={<CandidateDetail />} />
        
      </Routes>
    </div>
  );
}

export default App;
