import { Col, Container, Row } from "react-bootstrap";
import LeftPanelComponent from "./LeftPanelComponent";
import RightPanelComponent from "./RightPanelComponent";
import { useEffect, useState } from "react";
import { getDataCurriculum } from "../mocks/asyncData";

const CurriculumPageComponent = () =>{
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        getDataCurriculum()
        //.then((res)=>setData(res))
        //.then((res)=>console.log(res))
        .then((res)=>{setData(res)})
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[])
    return (
        
        <Container id="principal">
            <Row className="justify-content-md-center">
                <Col lg={12}>
                    <Row>
                        {loading ? <p>Cargando...</p>  : <LeftPanelComponent data={data.data} />}
                        {loading ? <p>Cargando...</p>  : <RightPanelComponent data={data.data} />}                        
                    </Row>
                </Col>
            </Row>            
        </Container>
    )
}
export default CurriculumPageComponent