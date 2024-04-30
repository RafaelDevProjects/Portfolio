import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Hey, I'm Rafael</h2>
            <p>
                Creative BackEnd Developer | Fixing Complex Problems with Back End Programming Solutions
            </p> 
            <br />
            <p>🎓Graduated in Software Engineering from FIAP.</p>
            <p>☕Experience in software development, from college to professional projects.</p>
            <p>💻Proficient in <strong>C#</strong>, <strong>JavaScript</strong>, <strong>Python</strong>, and frameworks like <strong>React</strong>.</p>
            <p>🌐Interested in technology, machine learning, and sustainable software development.</p>

            
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/js-icon.png" alt="" />
                </div>
                <img src="./assets/images/octocat.png" alt=""/>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/c-sharp-icon.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/react-icon.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/python-icon.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
