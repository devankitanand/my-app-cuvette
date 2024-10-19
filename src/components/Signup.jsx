import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const Signup = () => {

  const[verify,setVerify] = useState(false);
  
   // Define state for each form field
   const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    companyName: '',
    companyEmail: '',
    employeeSize: '',
  });

  // States for verification
  const [verifyemailform, setVerifyEmailForm] = useState({
    emailotp: '',
    phoneotp: '',
  });

  // handle verifyication validation
  const handleverify = (e) => {
    const { name, value } = e.target;
    setVerifyEmailForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle input change and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setVerify(true);

  };

  return (
    <>
    {/* header */}
    {/* <Header/> */}

    {/* signup body */}

    <div className='signupwarp'>

      <div className='content'>

      Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      
      </div>
      
      <div className='signupbox'>
      <div className='signupheading'>
        Signup
      </div>

      <div className='signupdesc'>
      Lorem Ipsum is simply dummy text
      </div>

{/* checking verification status */}
{verify?(
  <>
  {/* verify otp */}
<div>
  <form>
  <div className='inputwarper'>
          <span><MdOutlineMail /></span>
          <input
          className='inputfield otp'
            type="number"
            name="emailotp"
            placeholder='Email Otp'
            value={verifyemailform.emailotp}
            onChange={handleverify}
            required
          />
          <span><FaCheckCircle/></span>
        </div>
        <button id='verifyemail' className='submit verifybtn' type="submit">Verify</button>

       
  </form>
</div>
  </>
):(<>
{/* form for signup */}
<div>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className='inputwarper'>
          <span><FiUser /></span>
          <input
            className='inputfield'
            type="text"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Mobile */}
        <div className='inputwarper'>
          <span><BsTelephone /></span>
          <input
          className='inputfield'
            type="text"
            name="mobile"
            placeholder='Phone number'
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company Name */}
        <div className='inputwarper'>
          <span><FiUser /></span>
          <input
          className='inputfield'
            type="text"
            name="companyName"
            placeholder='Company Name'
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company Email */}
        <div className='inputwarper'>
          <span><MdOutlineMail /></span>
          <input
          className='inputfield'
            type="email"
            name="companyEmail"
            placeholder='Company Email'
            value={formData.companyEmail}
            onChange={handleChange}
            required
          />
        </div>

        {/* Employee Size */}
        <div className='inputwarper'>
          <span><IoIosPeople /></span>
          <input
          className='inputfield'
            type="number"
            name="employeeSize"
            placeholder='Employee Size'
            value={formData.employeeSize}
            onChange={handleChange}
            required
          />
        </div>
{/* form ends */}

        <div className='center'>
          <span>
          By clicking on proceed you wil accept our
          </span>
        </div>
        <div className='center2'>
        Terms & Conditions
        </div>
        {/* Proceed Button */}
        <button className='submit' type="submit">Proceed</button>
      </form>
    </div>
</>)}
    


      </div>
    </div>


    </>
  )
}

export default Signup