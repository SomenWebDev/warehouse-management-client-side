import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import auth from "./../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (error) {
    toast("Approve Your Google account");
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <Button onClick={() => signInWithGoogle()}>Continue with Google</Button>
      <ToastContainer />
    </div>
  );
};

export default SocialLogin;
