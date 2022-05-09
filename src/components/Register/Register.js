import { sendEmailVerification } from "firebase/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, error, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let navigate = useNavigate();
  let location = useLocation();
  const emailRef = useRef();
  const passwordRef = useRef();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
  };

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <p>loading....</p>;
  }
  if (error) {
    toast(error.message);
  }
  return (
    <div
      style={{ maxWidth: "450px" }}
      className="mx-auto mt-5 shadow p-3 mb-5 bg-body rounded"
    >
      <h1 className="text-center">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
      <p className="text-center mt-2">
        Already Registered?
        <Link to="/login" className="text-decoration-none">
          Login
        </Link>
      </p>
      <p className="text-center">Or</p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
