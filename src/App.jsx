import InfoCourse from './components/InfoCourse/InfoCourse';
import Slider from './components/Slider/Slider';
import Relevance from './components/Relevance/Relevance';
import ProgramContent from './components/ProgramContent/ProgramContent';
import Teachers from './components/Teachers/Teachers';
import Cost from './components/Cost/Cost';
import AboutUs from './components/AboutUs/AboutUs';

import './styles/main.scss';

function App() {
  return (
    <>
      <div className="container">
        <AboutUs />
        <InfoCourse />
        <Slider />
        <Relevance />
        <ProgramContent />
        <Teachers />
        <Cost />
      </div>
    </>
  );
}

export default App;
