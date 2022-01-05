import './Tech.css'
import TechCard from '../TechCard/TechCard'
import { techData } from '../../techData'

const Tech = () => {
    return (
        <div className='tech-list'>
            <div className='tech-text'>
          <h1 className='pl-title'>Tech Stack</h1>
        </div>
        <div className='pl-list'>
            {techData.map((item) => (
                <>
                <TechCard key ={item.id} name={item.name} image={item.image}/>
                </>
            ))}
          </div>
        </div>
    )
}

export default Tech