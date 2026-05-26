import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "react-bootstrap";
const SkillsPanelComponent = ({data}) =>{
    return(
        <>
        <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faCheck}/> &nbsp;Habilidades</h5>
                </div>
            </Alert>
            <div style={{textAlign:"left"}}>
                <ul>
                    {
                        data.map((item)=>(
                            <li key={item.idHabilidad}>{item.descripcion}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default SkillsPanelComponent