import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";
const LaboralExperiencePanelComponent = ({data}) =>{
    const monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]                
    return(
        <>
        <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faBriefcase}/> &nbsp;Experiencia Laboral</h5>
                </div>
            </Alert>
            <div style={{textAlign:"left"}}>
                
                {
                   data.filter(item => item.empleoActual).map((item)=>(
                        <div key={item.idexperiencia}>
                            <h5><strong>{item.puesto}</strong></h5>
                            <p><em>{item.lugarTrabajo}&nbsp;(Empleo actual desde {monthNames[new Date(item.inicio).getMonth()]}-{new Date(item.inicio).getFullYear()})</em></p>
                            <ul>
                                {
                                    item.actividadesLaborales.map((act)=>(<li key={act.idActividad}>{act.descripcion}</li>))
                                }
                            </ul>
                        </div>

                    ))
                    
                }
                {
                    data.filter(item => !item.empleoActual).sort((a,b) => new Date(b.inicio) - new Date(a.inicio)).map((item)=>(
                        <div key={item.idexperiencia}>
                            <h5><strong>{item.puesto}</strong></h5>
                            <p><em>{item.lugarTrabajo}&nbsp;({monthNames[new Date(item.inicio).getMonth()]}-{new Date(item.inicio).getFullYear()} - {monthNames[new Date(item.fin).getMonth()]}-{new Date(item.fin).getFullYear()})</em></p>
                            <ul>
                                {
                                    item.actividadesLaborales.map((act)=>(<li key={act.idActividad}>{act.descripcion}</li>))
                                }
                            </ul>
                        </div>

                    ))
                }
            </div>
        </>
    )
}
export default LaboralExperiencePanelComponent