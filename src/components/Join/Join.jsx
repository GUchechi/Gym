import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';


const Join = () => {
    const form = useRef()
    
        
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3234uo2', 'template_xh64nkc', form.current, '399w-kjmFhw-oiUI3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
   <div className="join" id="join">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form action="" ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email' />
                <button className="btn btn-j">Contact us</button>
            </form>
        </div>
   </div>
  )
}

export default Join
