import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Modal, ModalHeader } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

// import img1 from "./images/navLogo.png";

export default function ConfirmPW(props) {
  const [pass, setPass] = useState("");
  const [cpass, setcPass] = useState("");
  const history = useNavigate();
  const userId = localStorage.getItem("userId");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:4000/user/resetpassword/${id}`,
        {
          password: pass,
          confirmpassword: cpass,
          resetToken: id,
        }
      );
      console.log(id);

      const { message, error } = response.data;
      if (message) {
        toast.success(message);
        history(`/Dashboard/${userId}`);
      } else {
        toast.error(error);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="center2">
      <div className="bg5">
        <Modal
          className="pop1"
          contentClassName="pop1"
          size="lg"
          isOpen={true}
          toggle={() => props.setmodal(!props.modal)}
        >
          <ModalHeader>
            <div className="cross">
              <NavLink
                className="nav-link"
                to={`/Dashboard/settings/${userId}`}
              >
                <AiFillCloseCircle />
              </NavLink>
            </div>
            <img
              // src={img1}
              className="card-img-top"
              alt="Logo"
              width="400"
              height="250"
            />
          </ModalHeader>
          <br />
          <h4 className="quicksand18 alignCenter" style={{ color: "grey" }}>
            <b>Please enter your new password.</b>
          </h4>
          <form
            action="POST"
            className="login-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <br />
            <input
              value={pass}
              required
              onChange={(e) => setPass(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="New password"
              className="email"
            />
            <br />
            <input
              value={cpass}
              required
              onChange={(e) => setcPass(e.target.value)}
              type="password"
              id="confirmpassword"
              placeholder="Re-enter new password"
              name="confirmpassword"
              className="email"
            />

            <br />
            <div className="text-center">
              <button type="submit" className="but btn btn-primary">
                <h5>Submit</h5>
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}
