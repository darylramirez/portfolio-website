import './TechCard.css'

const TechCard = ({name, image}) => {
    return (
        <>
        <div className='t'>
            <div className='p-browser'>
<div className='p-name'>
<h3>{name}</h3>
</div>
</div>
<img src={image} alt='' className='t-img'/>
        </div>
        </>
    )
}

export default TechCard