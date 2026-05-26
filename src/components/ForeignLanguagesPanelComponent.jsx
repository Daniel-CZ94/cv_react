import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "react-bootstrap";
const ForeignLanguagesPanelComponent = ({data}) =>{
    return(
        <>
        <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faLanguage}/> &nbsp;Lenguas Extranjeras</h5>
                </div>
            </Alert>
            <div style={{textAlign:"left"}}>
                {
                    data.map((item)=>(
                        <div key={item.idManejoIdioma}>
                            <ul>
                                <li>{item.idioma}</li>
                                <ul>
                                    <li>Pronunciacion: {item.pronunciacion}%</li>
                                    <li>Lectura: {item.lectura}%</li>
                                    <li>Escritura: {item.escritura}%</li>
                                </ul>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default ForeignLanguagesPanelComponent