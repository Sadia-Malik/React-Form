// import { useState } from 'react';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!email) {
//       setEmailError('Email is required');
//     } else {
//       setEmailError('');
//     }
//     if (!password) {
//       setPasswordError('Password is required');
//     } else {
//       setPasswordError('');
//     }
//     // Submit the form if there are no errors
//     if (email && password) {
//       // TODO: Handle form submission
//     }
//   };

//   return (
//     <div class="col-lg-6 col-md-6 col-sm-12 border p-4 mt-3 mb-4">
//       <div class="mb-4">
//         <h5 class="new-coust">Returning Customer</h5>
//         <p class="creat-ac-text">I am a returning customer</p>
//         <form onSubmit={handleSubmit}>
//           <div class="mb-3">
//             <label for="exampleFormControlInput1" class="form-label">Email address</label>
//             <input type="email" class="form-control"  id="exampleFormControlInput1" placeholder="name@example.com"
//               value={email} onChange={(event) => setEmail(event.target.value)} />
//             {emailError && <div class="text-danger">{emailError}</div>}
//           </div>
//           <div class="mb-3">
//             <label for="exampleFormControlInput1" class="form-label">Password</label>
//             <input type="password" class="form-control" id="" placeholder="password"
//               value={password} onChange={(event) => setPassword(event.target.value)} />
//             {passwordError && <div class="text-danger">{passwordError}</div>}
//           </div>
//           <div class="mb-3">
//             <label for="" class="form-label">Forgotten Password</label>
//           </div>
//           <div>
//             <button class="col-auto continue-b" type="submit">LOGIN</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default LoginForm;

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


function Login() {
  const FormSubmitHandler = (event) =>{
   event.preventDefault()
   if(!email){
    seterrorHandler(true)
   }
   if(!password){
    setpserrorHandler(true)
   }
   const formData = fetch('https://portfolio2-4b54a-default-rtdb.firebaseio.com/form.json',
   {method: "POST", headers:{
    "Content-Type": "application/json",
   },
   body: JSON.stringify({
    email , password
  })
  })
  setemail('')
  setpassword('')
  }
  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');
  const [errorHandler , seterrorHandler] = useState(false);
  const [pserrorHandler , setpserrorHandler] = useState(false);

  const emailHandler = (event) =>{
    setemail(event.target.value)
    seterrorHandler(false)
  }
  const emailBlurHandler =() =>{
    if(email.trim() === ''){
      seterrorHandler(false)
    }
  }
 
  const passwordHandler = (event) =>{
    setpassword(event.target.value)
    setpserrorHandler(false)
  }
 const psBlurHandler =() => {
  if(password.trim() === ''){
    setpserrorHandler(false)
  }
 }
  return (
   <>
   
  
   {/* <div className='container'>
        <div className='row'>
         <div class="col-lg-3 col-md-12 col-sm-12 mt-5 p-0">
            <div class="border d-lg-block d-none">
                <h5 class="card-header bg-dark text-white">INFORMATION</h5>
                <div class="card-body">
                  <h5 class=""><Link to= "" class="info-sideb">About Us</Link></h5>
                  <h5 class=""><Link to= ""  class="info-sideb">Delivery Information</Link></h5>
                  <h5 class=""><Link to= ""  class="info-sideb">Privacy policy</Link></h5>
                  <h5 class=""><Link to= ""  class="info-sideb">Terms & Condition</Link></h5>
                  <h5 class=""><Link to= ""  class="info-sideb">Contact  Us</Link></h5>
                  <h5 class=""><Link to= ""class="info-sideb">Site Map</Link></h5>
                </div>
            </div>
        </div>
       <div className='col-lg-9 col-md-12 col-sm-12'>
       <div className="row mt-0 p-0">
                <div class="col-lg-5 col-md-6 col-sm-12 text-end offset-lg-7 offset-md-6 mb-2">
                    <div>
                        <Link  to = "" className="icon-reg-name"> <i class="fa-sharp fa-solid fa-house icon-reg"></i> <i class="fa-solid fa-angles-right icon-reg"></i> Account</Link>
                        <Link  to = "" className="icon-reg-name"><i class="fa-solid fa-angles-right icon-reg"></i>Register</Link>
                    </div>
                </div> 
            </div> 
        <div className='d-lg-flex'>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-3 mb-4">
                    <div class=" border p-4">
                        <h4 className="new-coust">New Customer</h4>
                        <div className="">
                          <h5 className="rigs">Register</h5>
                          <p className="card-text creat-ac-text">By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                          <button className=" col-auto continue-b">CONTINUE</button>
                        </div>
                    </div>
                </div> */}
       
            
       <div className='container d-flex align-items-center justify-content-center mt-5'>
       <form onSubmit={FormSubmitHandler} className = "col-lg-6 col-md-12 col-sm-12 border  p-4 mt-5 mb-4 ms-lg-2">
        <h5 className="new-coust">Returning Customer</h5>
       <p className="creat-ac-text">I am a returning customer</p>
      <div className="mb-3">
        <label className="form-label">
          Email Address
        </label>
        <input  onChange={(event) => emailHandler(event)}
          className='form-control'
          type="email"
          value={email}
          onBlur={emailBlurHandler}
        
         
        />
        {errorHandler && <span className='text-danger'>email  is required </span>}
        {/* {formErrors.name && (
          <div className="invalid-feedback">This field is required</div>
        )} */}
      </div>
      <div className="mb-3">
        <label className="form-label">
          Password
        </label>
        <input onChange={(event) => passwordHandler(event)}
        onBlur={psBlurHandler}
         className='form-control'
          type="password"
          value={password}
         
         
          
        />
      {pserrorHandler &&  <span className='text-danger'>Password is required</span>}
        {/* {formErrors.email && (
          <div className="invalid-feedback">This field is required</div>
        )} */}
         <div class="mt-3 mb-3">
            <label for="" className="form-label">Forgotten Password</label>
        </div>
      </div>
      {/* <button type="submit" className="btn btn-primary">
        Submit
      </button> */}
      <div>
        <button className=" continue-b" type="submit">LOGIN</button>
    </div>
    </form>
       </div>
        {/* </div>
       </div>
        </div>
    </div>
    <div/>
<div/> */}

   </>
  );
}

export default Login;