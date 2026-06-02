import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {use} from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftPanelComponent = ({data}) =>{
return(
    <>
    <Col md={3} className="bg-primary text-white">
            <br />
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
                {/*<p>Edad: {(new Date().getFullYear() - new Date(data.datosPersonales.fechaNacimiento).getFullYear())} años</p>*/}
                <p>Edad: {data.datosPersonales.edad} años</p>
                <p>Lugar de residencia: {data.datosPersonales.lugarResidencia}, {data.datosPersonales.estadoResidencia}</p>
                {data.datosPersonales.dispBackOffice ? <p>Disponiblidad para trabajar en oficina</p> : <p>&nbsp;</p>}
                {data.datosPersonales.dispViajar ? <p>Disponiblidad para viajar</p> : <p>&nbsp;</p>}
                {data.datosPersonales.dispMudarse ? <p>Disponiblidad para cambiar de residencia</p> : <p>&nbsp;</p>}
            </div>
            <hr style={{backgroundColor:"white"}}/>
            <div>
                <h5>Contacto</h5>
                {data.telefonos.length > 0 ? <p>Cel: {data.telefonos[0]} </p> : <p>&nbsp;</p>}
                {data.correos.length > 0 ? <p>Email: {data.correos[0]} </p> : <p>&nbsp;</p>}
            </div>
            <hr style={{backgroundColor:"white"}}/>
            <div>
                <a className="text-white" href="/mocks/CV_Daniel_Zamacona_2026.pdf" download="CV_Daniel_Zamacona.pdf">
                    <FontAwesomeIcon icon={faDownload}/> Descargar archivo en PDF
                </a>
            </div>
            <br />
    </Col>
    </>   
)
}
export default LeftPanelComponent