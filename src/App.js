import { react } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Loginchange from "./pages/Loginchange";
import Master from "./pages/Toppages/Master";
import Report from "./pages/Toppages/Report";
import UserConfig from "./pages/UserConfig";
import Admin from "./pages/Admin";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Loginchange" element={<Loginchange/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Master" element={<Master />} />
            <Route path="/Report" element={<Report />} />

              {/* Top bar 마지막 */}
            <Route path="/Admin" element={<Admin />} />
            <Route path="/UserConfig" element={<UserConfig />} />




        </Routes>
      </Router>
    </div>
  );
}

export default App;
