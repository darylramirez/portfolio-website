import Contact from "./components/contact/Contact";
import Intro from "./components/introduction/Intro";
import PortfolioList from "./components/portfolioList/PortfolioList";
import Tech from "./components/Tech/Tech";


function App() {
  return (
    <div>
        <Intro/>
        <PortfolioList/>
        <Tech/>
        <Contact/>
    </div>
  );
}

export default App;
