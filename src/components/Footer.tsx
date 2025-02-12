import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Karthikeyan107" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/karthikeyan-saminathan//" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <p>Thanks for Your Time</p>
      </div>
    </footer>
  );
}

export default Footer;