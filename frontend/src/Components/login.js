import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import img1 from "./images/Logo.png";

export default function Login (props){
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
      // Rest of your code...
    } catch (err) {
      toast.error("error");
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
          show={true}
          onHide={() => props.setmodal(!props.modal)}
          dialogClassName="modal-90w"
          backdrop={true} // Prevents closing by clicking outside
          keyboard={false} // Prevents closing by pressing ESC key
        >
          <Modal.Header closeButton={false}> {/* Remove close button */}
            <NavLink className="nav-link " to="../Home">
              <img
                src={img1}
                className=" card-img-top"
                alt="Logo"
                width="400"
                height="250"
              />
            </NavLink>
          </Modal.Header>
          <Modal.Body>
            <form action="POST" className="login-form" onSubmit={Submit} noValidate>
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
                <br />
                <button className="btn btn-link">
                  <Link to="../forgetPw">
                    <h5>Forgot Password?</h5>
                  </Link>
                </button>
                <br />
                <NavLink to="../Register">
                  <button type="button" className="btn btn-success">
                    Create New Account
                  </button>
                </NavLink>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
