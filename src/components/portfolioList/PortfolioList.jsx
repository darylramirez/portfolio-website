import './PortfolioList.css'
import Project from '../Project/Project'
import { projects } from '../../data'

const PortfolioList = () => {
    return (
        <div className='portfolio-list'>
            <div className='pl-text'>
          <h1 className='pl-title'>Projects</h1>
          <p className='pl-desc'>Here are a few of my most recent projects:</p>
        </div>
        <div className='pl-list'>
            {projects.map((item) => (
                <>
                <Project key ={item.id} name={item.name} link={item.link} image={item.image} description={item.description}/>
                </>
            ))}
          </div>
        </div>
    )
}

export default PortfolioList