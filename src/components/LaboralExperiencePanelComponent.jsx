import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";
const LaboralExperiencePanelComponent = ({data}) =>{
    return(
        <>
        <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faBriefcase}/> &nbsp;Experiencia Laboral</h5>
                </div>
            </Alert>
            <div style={{textAlign:"left"}}>
                {
                    
                    data.map((item)=>(
                        <div key={item.idexperiencia}>
                            <h5><strong>{item.puesto}</strong></h5>
                            <p><em>{item.lugarTrabajo}&nbsp;({item.inicio} - {item.fin})</em></p>
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