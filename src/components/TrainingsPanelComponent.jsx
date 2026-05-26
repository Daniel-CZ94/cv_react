import { faBookOpen, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "react-bootstrap";
const TrainingsPanelComponent = ({data}) =>{
    return(
        <>
        <Alert variant="primary">
                        <div style={{textAlign: "left"}}>
                            <h5 className="text-info"><FontAwesomeIcon icon={faBookOpen}/> &nbsp;Cursos y capacitaciones</h5>
                        </div>
                    </Alert>
                    <div style={{textAlign:"left"}}>
                        <ul>
                            {
                                data.map((item)=>(
                                    <li key={item.idCapacitacion}>{item.descripcion}</li>
                                ))
                            }
                        </ul>
                    </div>
        </>
    )
}
export default TrainingsPanelComponent