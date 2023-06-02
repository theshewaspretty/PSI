import { react, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Loginchange from "./pages/Loginchange";
import Master from "./pages/Toppages/Master";
import Report from "./pages/Toppages/Report";
import UserConfig from "./pages/UserConfig";
import Issue from "./pages/Toppages/Issue";
import Mos from "./pages/Toppages/Mos";
import Admin from "./pages/Toppages/Admin";
import Com from "./Com";
import ComCom from "./Sketch/ComCom";
// import Loading from "./components/Loading";



function App() {
  //  API 호출
  // const [loading, setLoading] = useState(true);
  // const mainApi = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch('api url' , {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(),
  //     });

  //     const result = await response.jsaon();
  //     console.log('mainData, result');
  //     setLoading(false);
  //     } catch (error) {
  //       window.alert(error);
  //     }
  // };

  // useEffect(() => {
  //   mainApi();
  // }, []);

  return (
    <div className="App">
      {/* {loading ? <Loading /> : null} */}
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Loginchange" element={<Loginchange/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Master" element={<Master />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Issue" element={<Issue />} />
            <Route path="/Mos" element={<Mos />} />


              {/* Top bar 마지막 */}
            <Route path="/Admin" element={<Admin />} />
            <Route path="/UserConfig" element={<UserConfig />} />

            {/* component 모음집 */}
            <Route path="/com" element={<Com />} />
            <Route path="/comcom" element={<ComCom />} />




        </Routes>
      </Router>
    </div>
  );
}

export default App;
