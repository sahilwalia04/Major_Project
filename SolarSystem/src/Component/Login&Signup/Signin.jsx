import React, { useState, useRef, useEffect } from 'react';
import './Signin.css'; // Renamed CSS to match component
import Navbar from '../Home Page/Navbar';
import Navbar2 from '../Home Page/Navbar2';
import Footer from '../Home Page/Footer';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { googleAuth } from './api'; 
import { toast } from 'react-toastify';
import axios from 'axios';

function Register() {
  const [isFocused, setIsFocused] = useState(false);
  const [isWrongEntry, setIsWrongEntry] = useState(false);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
   const [otp , setOtp] = useState(false)
  const [otpvalue , setOtpvalue] = useState("")
  const navigate = useNavigate();
  const emailvalue = useRef();
    // Form state
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setMessage('');
    setIsWrongEntry(false);

    // Basic validation
    if (password !== confirmPassword) {
      setIsWrongEntry(true);
      setMessage('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

     try{
       const response = await  axios.post("https://shivamwallu.site/api/users/signin",{
            username:username,
            email:email,
            password:password
         },
        { withCredentials: true});
        setMessage(response.message);
        // Optionally, redirect to login after successful registration
        localStorage.setItem("email",emailvalue.current.value);
        const {opt} = response.data.data
        console.log(response.data.data);
       console.log(opt);
        setOtpvalue(opt);
         toast.success("OTP send your email successful")
          setOtp(true)
         
          
      
    } catch (error) {
      setIsWrongEntry(true);
      setMessage('Error registering user');
      console.log(error);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle focus events
  const handleFocusIn = () => setIsFocused(true);
  const handleFocusOut = () => setIsFocused(false);

  // Panda eye move effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      const dw = window.innerWidth / 15;
      const dh = window.innerHeight / 15;
      const x = event.pageX / dw;
      const y = event.pageY / dh;

      if (leftEyeRef.current) {
        leftEyeRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (rightEyeRef.current) {
        rightEyeRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Navigate to login page
  const navigateToLogin = () => {
    navigate('/login');
  };
  const inputRefs = useRef([]);
  
    const handleChange = (index, e) => {
      const value = e.target.value;
      if (value.length === 1 && index < 3) {
        inputRefs.current[index + 1].focus();
      }
      if(index == 3 && value.length == 1){
        handleSubmit2(e);
      }
      
    };
 const handleSubmit2 = async (e) => {
      e.preventDefault();
      const otp = inputRefs.current.map((input) => input.value).join('');
      console.log('Form submitted', { otp });
      if(otpvalue == otp){
        toast.success("Signin successful");
        navigate("/login")
      
    }
    else{
      toast.error("Wrong OTP")
    }
  }

  
  
  

  // Google Authencation 


  


   const handleLoginSuccess = async (authResult) => {
    try {
      console.log("Login successful:", authResult);
      if (authResult["code"]) {    
        const response = await googleAuth(authResult.code);
        console.log("User Info:", response.data.user.user); 
        localStorage.setItem("user", JSON.stringify(response.data.user.user))
        navigate("/"); 
      }


    } catch (error) {
      console.error("Login failed:", error);
    }
  };

   const loginWithGoogle = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginSuccess,
    flow: 'auth-code',
  });


  if(otp){
    return (
         <div className="otp-container">
      <div className="otp-box">
        <h1 className="otp-title">OTP Verification</h1>
        <form onSubmit={handleSubmit2}>
          <div className="otp-inputs">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(index, e)}
                required
              />
            ))}
          </div>
          <button type="submit" className="otp-button">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
    );
   }
   
  return (
    <div className='bodysign'>
      <Navbar />
      <Navbar2 />
      <div className='logindiv'>
        <button className='btnlogin' onClick={navigateToLogin}>
          <b>Login</b>
        </button>
      </div>
      <div className="panda">
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball" ref={leftEyeRef}></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball" ref={rightEyeRef}></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"></div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>
      <form
        className={`${isFocused ? 'up' : ''} ${isWrongEntry ? 'wrong-entry' : ''}`}
        onSubmit={handleSubmit}
      >
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1>Panda Register</h1>
        <button className="google-btn" type="button" onClick={loginWithGoogle}>
       <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
      <span>Sign up with Google</span>
       </button>

        <div className="form-group">
          <input
            type="text"
            name="name"
            required
            className="form-control"
            value={username}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
          />
          <label className="form-label" htmlFor="name">Username</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            required
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
            ref={emailvalue}
          />
          <label className="form-label" htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
          />
          <label className="form-label" htmlFor="password">Create Password</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            required
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
          />
          <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
        </div>
        {isWrongEntry && <p className="alert">{message}</p>}
        {message && !isWrongEntry && <p className="success">{alert("Resister Successfull Thanks!" )}</p>}
        <button type="submit" className="btn" disabled={isSubmitting} >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Register;
