import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container' id='contact-me'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                    iconUrl="./assets/images/email.png"
                    text="Rafaasigoli1@gmail.com"
                />
                <ContactInfoCard
                    iconUrl="./assets/images/github-icon.png"
                    text="https://github.com/RafaelDevProjects"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe