import React, { useState } from 'react';
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
       
         <div class="mt-3 mb-3">
            <label for="" className="form-label">Forgotten Password</label>
        </div>
      </div>
     
      <div>
        <button className=" continue-b" type="submit">LOGIN</button>
    </div>
    </form>
       </div>
      

   </>
  );
}

export default Login;
