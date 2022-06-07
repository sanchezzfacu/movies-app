import React from 'react'
import '../css/footer.css'
import linkedin from '../img/linkedin-logo.png'
import github from '../img/github-logo.png'

function Footer() {
    return (
        <div className='footer-container'>
            <h1>Developed by Facundo Sanchez</h1>
            <div className='chop-footer'>                
                    <a href="https://www.linkedin.com/in/sanchezzfacu/">
                        <img src={github} alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/sanchezzfacu/">
                        <img src={linkedin} alt=""/>
                    </a>
            </div>
        </div>
    )
}

export default Footer