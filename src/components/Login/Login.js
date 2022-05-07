// import React, { useRef } from "react";
// import { Form } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   useSendPasswordResetEmail,
//   useSignInWithEmailAndPassword,
// } from "react-firebase-hooks/auth";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import auth from "../../firebase.init";
// import Loading from "../Loading/Loading";
// import SocialLogin from "../SocialLogin/SocialLogin";

// const Login = () => {
//   const [signInWithEmailAndPassword, user, loading, error] =
//     useSignInWithEmailAndPassword(auth);
//   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
//   const emailRef = useRef("");
//   const passwordRef = useRef("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   let from = location.state?.from?.pathname || "/";

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     console.log(email, password);
//     signInWithEmailAndPassword(email, password);
//   };

//   const handleReset = async () => {
//     const email = emailRef.current.value;
//     if (email) {
//       await sendPasswordResetEmail(email);
//       toast("sent email");
//     } else {
//       toast("enter your email");
//     }
//   };

//   if (user) {
//     navigate(from, { replace: true });
//   }
//   if (loading || sending) {
//     return <Loading></Loading>;
//   }
//   if (error) {
//     toast("Invalid Email/PassWord");
//   }
//   return (
//     <div style={{ width: "450px" }} className=" container mx-auto">
//       <h1>Please Login</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3 m-auto" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             ref={passwordRef}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//         <p
//           onClick={handleReset}
//           className="text-danger btn btn-link text-decoration-none"
//         >
//           Forget password
//         </p>
//         <p>
//           New in this site?<Link to="/register">Register</Link>
//         </p>
//       </Form>

//       <SocialLogin></SocialLogin>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;
