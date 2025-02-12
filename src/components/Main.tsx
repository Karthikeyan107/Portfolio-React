import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5635AQFwWmwN4qXO3g/profile-framedphoto-shrink_400_400/B56ZT5HB2pGsAc-/0/1739346157302?e=1739952000&v=beta&t=vIRmez2meUjPW_v2-Qbk3z5QhY6dOG9hrKTJoxwZ4xo" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Karthikeyan107" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/karthikeyan-saminathan" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Karthikeyan Saminathan</h1>
          <p>Software Assoiciate</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Karthikeyan107" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/karthikeyan-saminathan" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;