import React, { useState } from "react";
// import { PropTypes } from "prop-types";
import { toast } from "react-hot-toast";
import { Container } from "@mui/material";
import { Modal, ModalHeader } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink , Link} from "react-router-dom";

import img1 from "./images/Logo.png";

export default function Login(props){
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  async function Submit(e) {
    e.preventDefault();
    try {
      console.log(email);
      console.log("gjk");
      const values = {
        email,
        password: pass,
      };
      console.log(values);
      const res = await axios.post("http://localhost:4000/user/login", values);
      if (res.error) {
        toast.error(res.error);
      } else {
        // props.onFormSwitch(res.data.accessToken);

        localStorage.setItem("userId", res.data.user_id);
        localStorage.setItem("accessToken", res.data.accessToken);
        toast.success("Logged in successfully");
        const userId = localStorage.getItem("userId");
        
        history(`/Home/${userId}`);
        window.location.reload();
        
      }
    } catch (err) {
      toast.error("error")
      console.log(err);
    }
  }
  
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="center2 page-content">
      <div className=" bg5 ">
        <Modal
          className="pop1"
          contentClassName="pop1"
          size="lg"
          isOpen={true}
          toggle={() => props.setmodal(!props.modal)}
        >
          <ModalHeader>
            {" "}
            <div className="cross">
              <NavLink className="nav-link " to="../">
                <AiFillCloseCircle />
              </NavLink>{" "}
            </div>{" "}
            <img
              src={img1}
              className=" card-img-top"
              alt="Logo"
              width="400"
              height="250"
            />
          </ModalHeader>{" "}
          <br />{" "}
          <form
            action="POST"
            className="login-form"
            onSubmit={Submit}
            novalidate
          >
            <label htmlFor="email" className="form-label"></label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-mail"
              id="email"
              name="email"
              className="email "
              value={email}
              required
            />
            <br />
            <label htmlFor="password" className="form-label"></label>
            <input
              value={pass}
              required
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              name="password "
              className="email "
            />
            <br />
            <div className="text-center">
              <button type="submit" className=" but btn btn-primary  ">
                Login
              </button>
              <br />{" "}
              <button className="btn btn-link">
                <Link to="../forgetPw"><h5>Forgot Password?</h5></Link>
              </button>
              <br />
              <NavLink to="../Register">
                <button type="button" class="btn btn-success">
                  Create New Account
                </button>
              </NavLink>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};