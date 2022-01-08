import'./Intro.css'
import Me from '../../img/me.png'

const Intro = () => {
    return (
        <div className='i'>
<div className='i-left'>
<div className='i-left-wrapper'>
    <h2 className='i-intro'>Hello, my name is</h2>
    <h1 className='i-name'>Daryl Ramirez</h1>
    <div className='i-title'>
    <div className='i-title-wrapper'>
    <div className='i-title-item'>
        Web Developer
        </div>
        <div className='i-title-item'>
        Fullstack Software Engineer
        </div>
        <div className='i-title-item'>
        Lifelong Learner
        </div>
        </div>
    </div>
    <p className='i-description'>
Thanks for taking a look around my portfolio website! I am a former public school math teacher and current web developer. I love that coding allows me to learn and practice new things every day. I'm currently working on new projects to expand my skillset. When I'm not coding, you can find me cooking and creating new plant-based recipes or practicing yoga.
    </p>
</div>
       <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
            </div>
<div className='i-right'>
<div className="i-bg"></div>
<img src={Me} alt='A bitmoji of me.' className='i-img'/>
</div>
        </div>
    )
}

export default Intro