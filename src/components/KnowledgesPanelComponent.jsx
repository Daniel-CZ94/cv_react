import { text } from "@fortawesome/fontawesome-svg-core";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Col, Container, Row } from "react-bootstrap";
const KnowledgesPanelComponent = ({data}) => {
    if(data.length > 0 && data.length <= 15){
        return(
        <>
            <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faHandPaper}/> &nbsp;Conocimientos</h5>
                </div>
            </Alert>
            <div style={{textAlign:"left"}}>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                {
                                    data.map((item)=><li key={item.idConocimiento}>{item.descripcion} (Nivel {item.nivel})</li>)
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
                    
            </div>
        </>
    )
    }else if(data.length > 15 && data.length <= 30){
        const array10 = data.slice(0,15);
        const array20 = data.slice(15,30);
        return(
        <>
            <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faHandPaper}/> &nbsp;Conocimientos</h5>
                </div>
            </Alert>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                            {
                                array10.map((item)=><li key={item.idConocimiento}>{item.descripcion} (Nivel {item.nivel})</li>)
                            }
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                            {
                                array20.map((item)=><li key={item.idConocimiento}>{item.descripcion} (Nivel {item.nivel})</li>)
                            }
                            </ul>
                        </Col>
                    </Row>
                </Container>
        </>
    )
    }else if(data.length > 30){
        const array10 = data.slice(0,20);
        const array20 = data.slice(20,60);
        return(
        <>
            <Alert variant="primary">
                <div style={{textAlign: "left"}}>
                    <h5 className="text-info"><FontAwesomeIcon icon={faHandPaper}/> &nbsp;Conocimientos</h5>
                </div>
            </Alert>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                            {
                                array10.map((item)=><li key={item.idConocimiento}>{item.descripcion} (Nivel {item.nivel})</li>)
                            }
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                            {
                                array20.map((item)=><li key={item.idConocimiento}>{item.descripcion} (Nivel {item.nivel})</li>)
                            }
                            </ul>
                        </Col>
                    </Row>
                </Container>
        </>
    )
    }
}
export default KnowledgesPanelComponent