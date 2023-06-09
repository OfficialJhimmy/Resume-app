import React from "react";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <p>
        &#169;2023. All rights reserved | {" "}
        <span>
          Developed by{" "}
          <a
            href="https://jhimmyofficial.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Feyijimi
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
