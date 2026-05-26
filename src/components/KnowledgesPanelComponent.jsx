import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "react-bootstrap";
const KnowledgesPanelComponent = ({data}) => {
    return(
        <>
        <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faHandPaper}/> &nbsp;Conocimientos</h5>
                </div>
            </Alert>
            <div style={{textAlign:"left"}}>
                    <ul>
                        {
                            data.map((item)=><li key={item.idConocimiento}>{item.descripcion} (Nivel {item.nivel})</li>)
                        }
                    </ul>
            </div>
        </>
    )
}
export default KnowledgesPanelComponent