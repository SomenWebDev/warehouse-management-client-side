import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const handleReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent email");
    } else {
      toast("enter your email");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (error) {
    toast("Invalid Email/PassWord");
  }
  return (
    <div
      style={{ maxWidth: "450px" }}
      className="container mx-auto shadow p-3 mb-5 bg-body rounded mt-5"
    >
      <h1 className="text-center">Welcome</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 m-auto" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>
        <div className="text-end">
          <p
            onClick={handleReset}
            className="text-danger btn btn-link text-decoration-none text-center"
          >
            Forget password
          </p>
        </div>

        <Button type="submit" className="btn btn-lg w-100">
          Login
        </Button>

        <p className="text-center mt-3">
          New in this site?
          <Link to="/register" className=" text-decoration-none">
            Register
          </Link>
        </p>
        <p className="text-center">Or</p>
      </Form>
      <div className="mb-5">
        <SocialLogin></SocialLogin>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
