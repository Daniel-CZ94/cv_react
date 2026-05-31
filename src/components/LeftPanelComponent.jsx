import React, {use} from "react";
import { Col, Container, Image } from "react-bootstrap";

const LeftPanelComponent = ({data}) =>{
return(
    <>
    {/*console.log(data.correos[0])*/ }
    <Col md={3} className="bg-primary text-white">
            <div style={{textAlign: "center"}}>
                <h3>{data.datosPersonales.nombre}&nbsp;{data.datosPersonales.apellidoPaterno}&nbsp;{data.datosPersonales.apellidoMaterno}</h3>
                <h5>{data.datosPersonales.perfil}</h5>
            </div>
            <div style={{textAlign: "center"}}>
                <Image src={data.datosPersonales.foto} roundedCircle />
            </div>
            <div style={{textAlign: "center"}}>
                <p className="text-center">
                    {data.datosPersonales.descripcionPersonal}
                </p>
            </div>
            <hr style={{backgroundColor:"white"}}/>
            <div>
                <h5>Datos personales</h5>
                <p>Edad: {data.datosPersonales.edad} años</p>
                <p>Lugar de residencia: {data.datosPersonales.lugarResidencia}, {data.datosPersonales.estadoResidencia}</p>
                {data.datosPersonales.dispBackOffice ? <p>Disponiblidad para trabajar en oficina</p> : ""}
                {data.datosPersonales.dispViajar ? <p>Disponiblidad para viajar</p> : ""}
                {data.datosPersonales.dispMudarse ? <p>Disponiblidad para cambiar de residencia</p> : ""}
            </div>
            <hr style={{backgroundColor:"white"}}/>
            <div>
                <h5>Contacto</h5>
                {data.telefonos.length > 0 ? <p>Cel: {data.telefonos[0]} </p> : <p></p>}
                {data.correos.length > 0 ? <p>Email: {data.correos[0]} </p> : <p></p>}
            </div>
            <hr style={{backgroundColor:"white"}}/>
    </Col>
    </>   
)
}
export default LeftPanelComponent