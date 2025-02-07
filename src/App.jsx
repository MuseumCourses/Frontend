import InfoCourse from './components/InfoCourse/InfoCourse';
import Slider from './components/Slider/Slider';
import Relevance from './components/Relevance/Relevance';
import ProgramContent from './components/ProgramContent/ProgramContent';
import Cost from './components/Cost/Cost';
import AboutUs from './components/AboutUs/AboutUs';
import RequestForm from './components/RequestForm/RequestForm';
import AboutUsProgram from './components/AboutUs/AboutUsProgram';
import Header from './components/Header/Header';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';

import './styles/main.scss';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <AboutUs />
        <section className="content">
          <AboutUsProgram />
          <Relevance />
          <InfoCourse />
          <Slider />
        </section>
        <ProgramContent />
        <Cost />
        <RequestForm />
      </div>
      <UnderConstruction />
    </>
  );
}

export default App;
