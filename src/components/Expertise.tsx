import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithubAlt, faSafari} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Postman"
];

const labelsSecond = [
    "Cypress",
    "Espresso",
    "Selenium",
    "Git",
    "GitHub",
    "AWS",
    'Jira',
    'TestRail', 
];

const labelsThird = [
    "Agile",
    "Test Planning",
    "Mobile Testing",
    "Web Testing",
    "Debugging",
    "SDLC",
    'STLC'
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React. I have a strong proficiency in the SDLC process and frontend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithubAlt} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I have conducted testing across multiple platforms using various tools and have effectively maintained comprehensive test plans to ensure quality and consistency throughout the process</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faSafari} size="3x"/>
                    <h3>Soft Skills</h3>
                    <p>I have Done testing in multiple paltfroms with different tool .And Maintained Test plans</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;