import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import RegistrationDetail from "./pages/RegistrationDetail";
import JobDetail from "./pages/JobDetail";
import AgentCreation from "./pages/AgentCreation";
import EmployerCreation from "./pages/EmployerCreation";
import JobseekerCreation from "./pages/JobseekerCreation";
import BankCash from "./pages/BankCash";
import PayoutRequests from "./pages/PayoutRequests";
import AgentPlan from "./pages/AgentPlan";
import CommonPlan from "./pages/CommonPlan";
import EmployerPlan from "./pages/EmployerPlan";
import WithdrawalRequests from "./pages/WithdrawalRequests";
import Incentives from "./pages/Incentives";
import Analytics from "./pages/Analytics";
import Support from "./pages/Support";
import ManageJobs from "./pages/ManageJobs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
           <Route path="registration/:id" element={<RegistrationDetail />} />
            <Route path="job/:id" element={<JobDetail />} />
            <Route path="/agent" element={<AgentCreation />} />
            <Route path="/employer" element={<EmployerCreation />} />
            <Route path="/jobseeker" element={<JobseekerCreation />} />
            <Route path="/bank-cash" element={<BankCash />} />
            <Route path="/payout" element={<PayoutRequests />} />
            <Route path="/agent-plan" element={<AgentPlan />} />
            <Route path="/common-plan" element={<CommonPlan />} />
            <Route path="/employer-plan" element={<EmployerPlan />} />
            <Route path="/withdrawals" element={<WithdrawalRequests />} />
            <Route path="/incentives" element={<Incentives />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/support" element={<Support />} />
            <Route path="/manage-jobs" element={<ManageJobs />} />
            <Route path="/dashboard" element={<Dashboard />} />

         </Route>
      </Routes>
    </Router>
  );
}

export default App;
