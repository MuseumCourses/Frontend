import InfoCourse from './components/InfoCourse/InfoCourse';
import Slider from './components/Slider/Slider';
import Relevance from './components/Relevance/Relevance';
import ProgramContent from './components/ProgramContent/ProgramContent';
import Cost from './components/Cost/Cost';
import AboutUs from './components/AboutUs/AboutUs';

import './styles/main.scss';

function App() {
  return (
    <>
      <div className="container">
        <AboutUs />
        <Relevance />
        <InfoCourse />
        <Slider />
        <ProgramContent />
        <Cost />
      </div>
    </>
  );
}

export default App;
