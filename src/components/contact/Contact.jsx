import './Contact.css'
import email from '../../img/email.png'
import linkedin from '../../img/linkedin.png'
import resume from '../../img/resume.png'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false)

    const handleSubmit =(e) => {
        e.preventDefault();
        emailjs.sendForm('service_j1nbo2w', 'template_xj0ucga', formRef.current, 'user_3imhghXh3yOtC2KKSpYyf')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
          setErrorMessage(true)
      });
    }
    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
            <div className='c-left'>
            <h1 className='c-title'>Let's chat!</h1>
            <div className='c-info'>
            <div className='c-info-item'>
                <a href='mailto:darylc.ramirez@gmail.com' title='email' target='_blank' rel="noreferrer">
                <img src={email} alt='' className='c-icon'/>
                darylc.ramirez@gmail.com
                </a>
                </div>
                <div className='c-info-item'>
                <a href='https://www.linkedin.com/in/darylramirez/' title='linkedin' target='_blank' rel="noreferrer">
                <img src={linkedin} alt='' className='c-icon'/>
                </a>
                </div>
                <div className='c-info-item'>
                <a href='https://github.com/darylramirez/' title='github' target='_blank' rel="noreferrer">
                <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='' className='c-icon'/>
                </a>
                </div>
                <div className='c-info-item'>
                <a href='https://darylramirez507609012.wordpress.com/my-resume/' title='resume' target='_blank' rel="noreferrer">
                <img src={resume} alt='' className='c-icon'/>
                My resume
                </a>
                </div>
            </div>
            </div>
            <div className='c-right'>
            <p className="c-desc">
            <b>Get in touch!</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input type='text' placeholder='Name' name='username'></input>
              <input type='text' placeholder='Subject' name='user_subject'></input>
              <input type='text' placeholder='Email' name='user_email'></input>
              <textarea rows='5' placeholder='Message' name='message'/>
              <button>Submit</button>
              <div className='success'>
              {done ? 'I got your message!' : (errorMessage) ? 'Something went wrong!' : null}
              </div>
          </form>
        </div>
        </div>
        </div>
    )
}

export default Contact