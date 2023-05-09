import { react } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Loginchange from "./pages/Loginchange";
import Master from "./pages/Toppages/Master";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Loginchange" element={<Loginchange/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Master" element={<Master />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
