import React from "react";
import "../styles/CvHeader.css";
import { AiOutlineMail, AiOutlineCloudDownload } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const CvHeader = () => {

  return (
    <div className="cv__topNav">
      <div className="cv__topNav--heading">
        <h1>
          FEYIJIMI OLUFEMI <br />
          ERINLE
        </h1>
        <p>
          <AiOutlineMail size={20} />
          erinlejhimmy@gmail.com
        </p>
        <p>
          <GrLocation size={20} />
          Remote
        </p>
      </div>

      <div>
      <a href="/Feyijimi Erinle Resume.pdf" download className="cv__download">
          Download CV <AiOutlineCloudDownload size={20}/>
        </a>
      </div>

    </div>
  );
};

export default CvHeader;
