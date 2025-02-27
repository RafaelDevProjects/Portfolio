import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Olá, Eu sou o Rafael</h2>
            <p>
                Desenvolvedor Full-stack criativo | Resolvendo Problemas Complexos com Soluções de Programação full-stack
            </p> 
            <br />
            <p>🎓Formação em Engenharia de Software na FIAP.</p>
            <p>☕Experiência em desenvolvimento de software, desde a faculdade até projetos profissionais.</p>
            <p>💻Proficiente em <strong>C# </strong>, <strong>Java </strong>, <strong>C/C++ </strong>,  <strong>Python </strong>, frameworks como <strong>Spring Boot </strong>,  <strong>React </strong> e banco de dados como <strong>MySQL </strong> <strong>PostgreSQL </strong> <strong>Oracle DB </strong> 
            </p>
            <p>🌐Interessado em tecnologia, aprendizado de máquina e desenvolvimento de software sustentável.</p>

            
        </div>

        <div className='hero-img'>
            <div>
                <img src="./assets/images/octocat.png" alt=""/>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/c-sharp-icon.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/java-icon.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/react-icon.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/springBoot-icon.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/images/js-icon.png" alt="" />
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
