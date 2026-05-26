import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {use,useState} from "react";
import { Alert, Col } from "react-bootstrap";
import LaboralExperiencePanelComponent from "./LaboralExperiencePanelComponent";
import AcademicTrainingPanelComponent from "./AcademicTrainingPanelComponent";
import ForeignLanguagesPanelComponent from "./ForeignLanguagesPanelComponent";
import KnowledgesPanelComponent from "./KnowledgesPanelComponent";
import SkillsPanelComponent from "./SkillsPanelComponent";
import TrainingsPanelComponent from "./TrainingsPanelComponent";
import ReferencesPanelComponent from "./ReferencesPanelComponent";
const RightPanelComponent = ({data}) => {
    return(
        <Col md={9}>
            <br></br>
            <LaboralExperiencePanelComponent data={data.experiencia}/>
            <AcademicTrainingPanelComponent data={data.formacionAcademica}/>
            <ForeignLanguagesPanelComponent data={data.idiomas} />
            <KnowledgesPanelComponent data={data.conocimientos} />
            <SkillsPanelComponent data={data.habilidades}/>
            <TrainingsPanelComponent data={data.capacitaciones}/>
            <ReferencesPanelComponent data={data.referencias}/>
        </Col>
    )
}
export default RightPanelComponent