import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  console.log("Home component is rendering");

  return (
    <div className="home">
      <div className="about">
        <h2> Amrit Bhutani</h2>
        <div className="prompt">
            <p>A Sophomore at Duke University Interested in Software Development and Finance.</p>
        
            <a href="https://www.linkedin.com/in/amrit-singh-2105541ab/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </a>

            <a href="mailto:amrit.bhutani@duke.edu" target="_blank" rel="noopener noreferrer">
                <EmailIcon />
            </a>

            <a href="https://github.com/AmritBhutani" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
            </a>
    </div>
</div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Technical Skills</h2>
            <span>
              Data Analysis, Data Modeling, Valuation Modeling, AI Systems, API Implementations, 
              Microsoft Excel, Microsoft Office
            </span>
          </li>
          <li className="item">
            <h2>Front-End, Back-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, MaterialUI, Yarn
            <br />
              NodeJS, Java Spring, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, R</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
