import React, { useState } from 'react';
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const SendMeMessage = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   subject: '',
   message: '',
 });

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   setFormData({ name: '', email: '', subject: '', message: '' });
 };

 return (
   <div>
     <div className="row" style={{ paddingLeft: '50px' }}>
       <div className="col-md-7">
         <div
           className="form-group"
           style={{
             background: 'rgba(255, 255, 255, 0.1)',
             backdropFilter: 'blur(10px)',
             borderRadius: '10px',
             padding: '10px',
             border: '1px solid rgba(255, 255, 255, 0.2)',
           }}
         >
           <div className="row">
             <div className="col-md-5">
               <div className="form-group">
                 <input
                   type="text"
                   className="form-control"
                   id="name"
                   name="name"
                   value={formData.name}
                   placeholder="Name"
                   onChange={handleChange}
                   style={{ marginTop: '10px' }}
                 />
               </div>
             </div>
             <div className="col-md-7">
               <div className="form-group">
                 <input
                   type="email"
                   className="form-control"
                   id="email"
                   name="email"
                   placeholder="Email"
                   value={formData.email}
                   onChange={handleChange}
                   style={{ marginTop: '10px' }}
                 />
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-md-12">
               <div className="form-group">
                 <input
                   type="text"
                   className="form-control"
                   id="subject"
                   name="subject"
                   placeholder="Subject"
                   value={formData.subject}
                   onChange={handleChange}
                   style={{ marginTop: '20px' }}
                 />
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-md-12">
               <div className="form-group">
                 <textarea
                   className="form-control"
                   id="message"
                   placeholder="Message"
                   name="message"
                   rows="3"
                   value={formData.message}
                   onChange={handleChange}
                   style={{ marginTop: "20px" }}
                 ></textarea>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-md-12 text-center">
               <button
                 type="submit"
                 className="btn btn-primary"
                 onClick={handleSubmit}
                 style={{ marginTop: '20px' }}
               >
                 Send Mail
               </button>
             </div>
           </div>
         </div>
       </div>
       <div className="col-md-5" style={{ color: 'white', textAlign: "left"}}>
        <br></br>
         <div className="row">
           <h3 style={{fontWeight: "bold"}}> Get In Touch</h3>
           <p>
           Let's connect! I'm always happy to chat. <br></br> 
           Feel free to drop me an email or message me on social media.
           </p>
         </div>
         <div className="row">
           <h3 style={{fontWeight: "bold"}}>Contact Details</h3>
           <br></br>
           <br></br>
          <div className="d-flex align-items-center">
             <AiOutlineEnvironment size={24} className="mr-2" />
             <span>Delhi, India</span>
           </div>
           <div className="d-flex align-items-center">
             <AiOutlinePhone size={24} className="mr-2" />
             <span>8307607758</span>
             <br></br>
             <br></br>
           </div>
           <div className="d-flex align-items-center">
             <AiOutlineMail size={24} className="mr-2" />
             <span>namanviber@gmail.com</span>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default SendMeMessage;