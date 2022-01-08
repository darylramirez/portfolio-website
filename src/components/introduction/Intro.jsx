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
{/* <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="lightseagreen"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg> */}
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