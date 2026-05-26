import { BrowserRouter } from 'react-router-dom';
import CurriculumPageComponent from './components/CurriculumPageComponent';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

function App() {

  return (
    <>
    <BrowserRouter>
      <CurriculumPageComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
