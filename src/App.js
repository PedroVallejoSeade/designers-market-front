import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import DesignerProfile from './components/designer-profile/DesignerProfile';
import DesignerBusinessProfile from './components/designer-profile/DesignerBusinessProfile';
import BusinessProfile from './components/business-profile/BusinessProfile';
import DesignerOferta from './components/designer-oferta/DesignerOferta';
import DesignerOfertaDetalle from './components/designer-oferta-detalle/DesignerOfertaDetalle';
import DesignerCalificacion from './components/designer-calificacion/DesignerCalificacion';
import BusinessCreateJob from './components/business-create-job/BusinessCreateJob';
import DesignerArchivos from './components/designer-archivos/DesignerArchivos'
import DesignerAplicar from './components/designer-aplicar/DesignerAplicar';
import DesignerArchivosSubidos from './components/designer-archivos-subidos/DesignerArchivosSubidos';
import DesignerEnviar from './components/designer-enviar/DesignerEnviar';
import DesignerPago from './components/designer-pago/DesignerPago';
import BusinessJobList from './components/business-job-list/BusinessJobList'
import BusinessJobSelection from './components/business-job-selection/BusinessJobSelection'
import BusinessSelect from './components/business-select/BusinessSelect'
import BuinessJobWorking from './components/business-job-working/BuinessJobWorking'
import BuinessJobDone from './components/business-job-done/BuinessJobDone';
import BusinessCalificacion from './components/business-calificacion/BusinessCalificacion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DesignerContrato from './components/designer-contrato/DesignerContrato';
import BusinessContrato from './components/business-contrato/BusinessContrato';
import BusinessEspera from './components/business-espera/BusinessEspera';


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
          <Route path='/business/designer-profile' element={<DesignerBusinessProfile/>}/>
          <Route path='/business/profile' element={<BusinessProfile/>}/>
          <Route path='/business/createOffer' element={<BusinessCreateJob/>}/>
          <Route path='/designer/aplicar' element={<DesignerAplicar/>}/>
          <Route path='/designer/archivos' element={<DesignerArchivos/>}/>
          <Route path='/designer/archivossubidos' element={<DesignerArchivosSubidos/>}/>
          <Route path='/designer/archivosenviar' element={<DesignerEnviar/>}/>
          <Route path='/designer/pago' element={<DesignerPago/>}/>
          <Route path='/business/jobs' element={<BusinessJobList/>}/>
          <Route path='/business/1/job/1/selection' element={<BusinessJobSelection/>}/>
          <Route path='/business/designer-selected' element={<BusinessSelect/>}/>
          <Route path='/business/job-working' element={<BuinessJobWorking/>}/>
          <Route path='/business/job-done' element={<BuinessJobDone/>}/>
          <Route path='/business/calification' element={<BusinessCalificacion/>}/>
          <Route path='/designer/contrato' element={<DesignerContrato/>}/>
          <Route path='/business/contrato' element={<BusinessContrato/>}/>
          <Route path='/business/espera' element={<BusinessEspera/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
