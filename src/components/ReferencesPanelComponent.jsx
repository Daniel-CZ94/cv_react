import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";
const ReferencesPanelComponent = ({data}) => {
    const personalRefs = data.filter(x=>x.tipo === "Personal")
    const laboralRefs = data.filter(x=>x.tipo === "Laboral")
    return(
        <>
        <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faUserTie}/> &nbsp;Referencias Laborales</h5>
                </div>
            </Alert>
            <div style={{textAlign:"left"}}>
                <ul>
                    {
                        laboralRefs.map((item)=>(
                            <li key={item.idReferencia}>{item.nombre} Tel. {item.telefono}</li>
                        ))
                    }
                </ul>
            </div>
            <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faUser}/> &nbsp;Referencias Personales</h5>
                </div>
            </Alert>
            <div style={{textAlign:"left"}}>
                <ul>
                    {
                        personalRefs.map((item)=>(
                            <li key={item.idReferencia}>{item.nombre} Tel. {item.telefono}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default ReferencesPanelComponent