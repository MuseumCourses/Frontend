import InfoCourse from './components/InfoCourse/InfoCourse';
import Slider from './components/Slider/Slider';
import Relevance from './components/Relevance/Relevance';

import './styles/main.scss';

function App() {
  return (
    <>
      <div className="container">
        <InfoCourse />
        <Slider />
        <Relevance />
      </div>
    </>
  );
}

export default App;
