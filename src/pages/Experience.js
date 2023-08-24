import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Durham Academy, Durham, NC
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2026"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Duke Univeristy, Durham, NC
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Electrical Computer Engineering and Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Back-end Developer - UDL Computing inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Durham, NC
          </h4>
          <p>Provide custom software / web application solutions to businesses 
            needing solutions tailored to the way they do business. 
          <br />

          <br /> 
            Performed in-depth operational due diligence on 10+ client summaries 
            by analyzing contracts, API implementations, POST requests, JSON responses
          <br /> 

          <br /> 
            Incorporated Postmark API for clients using “Send Email” and “Send Batch Emails” APIs with “Bounce Webhook” in C# and curl requests </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Fall Intern - Arch Capital Management inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Executing MPT, CAPM, valuation models for stocks, bonds, futures, options, etc., trading model development and evaluation
          <br /> 

          <br /> 
            Interacting directly with portfolio manager, allowing for insights into the analysis and decision-making at the institutional investment management level
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
