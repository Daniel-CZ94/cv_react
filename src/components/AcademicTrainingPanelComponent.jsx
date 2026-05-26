import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "react-bootstrap";
const AcademicTrainingPanelComponent = ({data}) =>{
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
                            <p><em>{item.plantel} ({item.inicio}-{item.fin})</em></p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default AcademicTrainingPanelComponent