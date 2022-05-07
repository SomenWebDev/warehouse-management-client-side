// import { sendEmailVerification } from "firebase/auth";
// import React, { useRef } from "react";
// import { Button, Form } from "react-bootstrap";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import auth from "../../firebase.init";
// import "react-toastify/dist/ReactToastify.css";
// import SocialLogin from "../SocialLogin/SocialLogin";

// const Register = () => {
//   const [createUserWithEmailAndPassword, user, error, loading] =
//     useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
//   let navigate = useNavigate();
//   let location = useLocation();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   let from = location.state?.from?.pathname || "/";

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     console.log(email, password);
//     await createUserWithEmailAndPassword(email, password);
//     await sendEmailVerification();
//   };

//   if (user) {
//     navigate(from, { replace: true });
//   }
//   if (loading) {
//     return <p>loading....</p>;
//   }
//   if (error) {
//     toast("You are already registered with this email");
//   }
//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             ref={emailRef}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             ref={passwordRef}
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Register
//         </Button>
//       </Form>
//       <p>
//         Already Registered?<Link to="/login">Login</Link>
//       </p>
//       <SocialLogin></SocialLogin>
//     </div>
//   );
// };

// export default Register;
