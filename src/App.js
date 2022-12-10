import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import JobList from "./pages/job-list/JobList";
import CandidateList from "./pages/candidate-list/CandidateList";
import EmployerDetail from "./pages/employer-detail/EmployerDetail";
import JobDetail from "./pages/job-detail/JobDetail";
import CandidateDetail from "./pages/candidate-detail/CandidateDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/candidatelist" element={<CandidateList />} />
        <Route path="/employer/:id" element={<EmployerDetail />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/candidate/:id" element={<CandidateDetail />} />
        
      </Routes>
    </div>
  );
}

export default App;
