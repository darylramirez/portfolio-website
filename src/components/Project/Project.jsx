import './Project.css'

const Project = ({name, description, link, image}) => {
    return (
        <>
        <div className='p'>
            <div className='p-browser'>
<div className='p-circle'></div>
<div className='p-circle'></div>
<div className='p-circle'></div>
<div className='p-name'>
<h3>{name}</h3>
</div>
</div>
<a href={link} target='_blank' rel="noreferrer">
<img src={image} alt='' className='p-img'/>
</a>
        </div>
        </>
    )
}

export default Project