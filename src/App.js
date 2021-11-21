import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import DesignerProfile from './components/designer-profile/DesignerProfile';
import BusinessProfile from './components/business-profile/BusinessProfile';
import DesignerOferta from './components/designer-oferta/DesignerOferta';
import DesignerOfertaDetalle from './components/designer-oferta-detalle/DesignerOfertaDetalle';
import DesignerCalificacion from './components/designer-calificacion/DesignerCalificacion';
import BusinessCreateJob from './components/business-create-job/BusinessCreateJob';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DesignerAplicar from './components/designer-aplicar/DesignerAplicar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/designer/profile' element={<DesignerProfile/>}/>
           <Route path='/business/profile' element={<BusinessProfile/>}/>
           <Route path ='/designer/oferta' element={<DesignerOferta/>}/>
           <Route path ='/designer/ofertadetalle' element={<DesignerOfertaDetalle/>}/>
           <Route path ='/designer/calificacion' element={<DesignerCalificacion/>}/>
          <Route path='/disigner/profile' element={<DesignerProfile/>}/>
          <Route path='/business/profile' element={<BusinessProfile/>}/>
          <Route path='/business/createOffer' element={<BusinessCreateJob/>}/>
          <Route path='/designer/aplicar' element={<DesignerAplicar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
