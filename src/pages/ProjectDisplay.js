import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { Button } from "@material-ui/core";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name + " screenshot"} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {project.isResearch && (
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => window.open(project.researchPaperLink, '_blank')}
        >
          Research Paper
        </Button>
      )}
      {project.isAPISummary && (
        <Button 
          variant="contained" 
          color="secondary"
          onClick={() => window.open(project.apiSummaryLink, '_blank')}
        >
          API Summary Document
        </Button>
      )}
      {project.isClassRanked && (
        <Button 
          variant="contained" 
          color="default"
          onClick={() => window.open(project.classRankedLink, '_blank')}
        >
          ClassRanked Deliverable
        </Button>
      )}
      {project.isSamuelDubois && (
        <Button 
          variant="contained" 
          color="default"
          onClick={() => window.open(project.samuelDuboisLink, '_blank')}
        >
          Samuel Dubois Cook Center Deliverable
        </Button>
      )}
    </div>
  );
}

export default ProjectDisplay;
