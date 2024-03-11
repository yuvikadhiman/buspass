// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import Loader from '../components/Loader';

// // Styled components

// const FormContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-width: 24rem;
//   width: 28rem;
//   margin: auto;
// `;

// const Heading = styled.h1`
//   text-align: center;
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// `;

// const FormWrapper = styled.div`
//   display: block;
//   margin: 0 auto;
//   width: 80%;
//   padding: 1.5rem;
//   border-radius: 0.5rem;
//   background-color: white;
// `;

// // const Label = styled.label`
// //   padding: 0.5rem;
// //   color: #f3f4f6;
// // `;

// const Input = styled.input`
//   width: 80%;
//   height: 2.5rem;
//   border: 1px solid var(--border-primary);
//   border-radius: 10px;
//   background-color: var(--input);
//   margin-bottom: 1rem;
//   padding-left: 5%;
//   padding-right: 15%;
//   margin-top: 15px;
//   padding-top: 5px;
//   padding-bottom: 5px;
// `;

// const StyledLink = styled(Link)`
//   color: black;
//   text-decoration: none;
//   font-size: 0.875rem;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   height: 2.9rem;
//   background-color: var(--primary);
//   color: black;
//   border-radius: 10px;
//   border: 0;
  
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   margin-top: 15px;
//   margin-bottom: 25px;
//   &:hover {
//     border: 2px rgb(250, 210, 36);
//     background-color: white;
//   }
// `;

// const Register = () => {
//   const [inputs, setInputs] = useState({
//     fullName: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const loading = false;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // await register(inputs);
//   };

//   return (
//     <FormContainer>
//       <FormWrapper>
//         <Heading>Register</Heading>
//         <form onSubmit={handleSubmit}>
//           <div>
//             {/* <Label htmlFor="fullName">Full Name</Label> */}
//             <Input
//               id="fullName"
//               type="text"
//               placeholder="Enter your full name"
//               value={inputs.fullName}
//               onChange={(e) =>
//                 setInputs({ ...inputs, fullName: e.target.value })
//               }
//             />
//           </div>
//           <div>
//             {/* <Label htmlFor="username">Username</Label> */}
//             <Input
//               id="username"
//               type="text"
//               placeholder="Enter a username"
//               value={inputs.username}
//               onChange={(e) =>
//                 setInputs({ ...inputs, username: e.target.value })
//               }
//             />
//           </div>
//           <div>
//             {/* <Label htmlFor="password">
//                 <span className="text-base label-text">Password</span>
//               </Label> */}
//             <Input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={inputs.password}
//               onChange={(e) =>
//                 setInputs({ ...inputs, password: e.target.value })
//               }
//             />
//           </div>
//           <div>
//             {/* <Label htmlFor="confirmPassword">
//                 <span className="text-base label-text">Confirm Password</span>
//               </Label> */}
//             <Input
//               id="confirmPassword"
//               type="password"
//               placeholder="Confirm password"
//               value={inputs.confirmPassword}
//               onChange={(e) =>
//                 setInputs({ ...inputs, confirmPassword: e.target.value })
//               }
//             />
//           </div>

//           <Button type="submit" disabled={loading}>
//             {loading ? <Loader /> : 'Register'}
//           </Button>
//           <StyledLink to="/login">Already have an account ? Login</StyledLink>
//         </form>
//       </FormWrapper>
//     </FormContainer>
//   );
// };

// export default Register;
