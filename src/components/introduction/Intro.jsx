import'./Intro.css'

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
    <div className='i-description'>
Thanks for taking a look around my portfolio website! I am a former public school math teacher and current web developer. I love that coding allows me to learn and practice new things every day. I'm currently working on new projects to expand my skillset. When I'm not coding, you can find me cooking and creating new plant-based recipes or practicing yoga.
    </div>
</div>
</div>
<div className='i-right'>right</div>
{/* <img src='' alt='' className='i-img'/> */}
        </div>
    )
}

export default Intro