import React from 'react'
import './ContactForm.css'


const ContactForm = () => {
  const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formDataObject = Object.fromEntries(formData.entries());

      console.log(formDataObject);
  };

  return (
      <div className='contact-form-content'>
          <form onSubmit={handleSubmit}>
              <div className='name-container'>
                  <input type="text" name="firstname" placeholder='First Name'/>
                  <input type="text" name="lastname" placeholder='Last Name' />
              </div>
              
              <input type="text" name="email" placeholder='Email'/>
              <textarea name="message" placeholder='Message' rows={3}></textarea>

              <button type="submit">SEND</button>
          </form>
      </div>
  );
};

export default ContactForm;