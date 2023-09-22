// import logo from './logo.svg';
import { useState } from "react";
import React from "react";
import "./App.css";
import LandingPage from "./Components/landing";
import Login from "./Components/login";
import About from "./Components/About";
import Settings from "./Components/settings";
import ForgetPW from "./Components/forgetPW";
import ConfirmPW from "./Components/ConfirmPW";
import NotFound from "./Components/NotFound";
import Protected from "./PrivateRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

import { Toaster } from "react-hot-toast";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const token = localStorage.getItem("accessToken");

  // const [result, setResult] = useState(null);
  const [modal, setmodal] = useState(false);
  const [modal1, setmodal1] = useState(false);
  // const [data, setData] = useState(null);

  return (
    <>
      <div>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<LandingPage modal={modal} setmodal={setmodal} />}
            />

            <Route
              path="/Login"
              element={<Login modal={modal} setmodal={setmodal} />}
            />

            <Route
              path="/forgetPw"
              element={<ForgetPW modal={modal} setmodal={setmodal} />}
            />

            <Route
              path="/resetpassword/:id"
              element={<ConfirmPW modal={modal} setmodal={setmodal} />}
            />

            <Route path="/About" element={<About />} />

            <Route
              path="/Dashboard/settings/:id"
              element={
                <Protected>
                  <Settings modal1={modal1} setmodal1={setmodal1} />
                </Protected>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
