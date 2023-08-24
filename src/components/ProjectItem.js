import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

function ProjectItem({ image, name, id, isResearch, isAPISummary, apiSummaryLink, isClassRanked, classRankedLink, isSamuelDubois, samuelDuboisLink }) {
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      onClick={() => {
        if (!isResearch && !isAPISummary && !isClassRanked && !isSamuelDubois) navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      {isResearch && (
        <Button 
          variant="contained" 
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            window.open(isResearch, '_blank');
          }}
        >
          Research Paper
        </Button>
      )}
      {isAPISummary && (
        <Button 
          variant="contained" 
          color="secondary"
          onClick={(e) => {
            e.stopPropagation();
            window.open(apiSummaryLink, '_blank');
          }}
        >
          API Summary Document
        </Button>
      )}
      {isClassRanked && (
        <Button 
          variant="contained" 
          color="default"
          onClick={(e) => {
            e.stopPropagation();
            window.open(classRankedLink, '_blank');
          }}
        >
          ClassRanked Deliverable
        </Button>
      )}
      {isSamuelDubois && (
        <Button 
          variant="contained" 
          color="default"
          onClick={(e) => {
            e.stopPropagation();
            window.open(samuelDuboisLink, '_blank');
          }}
        >
          Samuel Dubois Cook Center Deliverable
        </Button>
      )}
    </div>
  );
}

export default ProjectItem;
