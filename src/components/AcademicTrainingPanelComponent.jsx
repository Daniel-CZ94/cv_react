import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "react-bootstrap";
const AcademicTrainingPanelComponent = ({data}) =>{
    const monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]                
    return(
        <>
        <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faGraduationCap}/> &nbsp;Formacion Academica</h5>
                </div>
            </Alert>
            <div style={{textAlign:"left"}}>
                {
                    data.map((item)=>(
                        <div key={item.idFormacion}>
                            <h5><strong>{item.titulo}</strong></h5>
                            <p><em>{item.plantel} ({monthNames[new Date(item.inicio).getMonth()]}-{new Date(item.inicio).getFullYear()} - {monthNames[new Date(item.fin).getMonth()]}-{new Date(item.fin).getFullYear()})</em></p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default AcademicTrainingPanelComponent