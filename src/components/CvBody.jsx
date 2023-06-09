import React from "react";
import "../styles/CvBody.css";
import cvData from "../data/cvData";
import CvProjects from "./CvProjects";
import { AiOutlineLink } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { RxDotFilled } from "react-icons/rx";
import { FaCertificate } from "react-icons/fa";

const CvBody = () => {
  return (
    <div className="cvbody__container">
      <div className="cvbody__description">
        {/* PROFESSIONAL SUMMARY */}
        <div className="cvbody__description--summary">
          <h2>{cvData[0].professional_summary[0].title}</h2>
          <p>{cvData[0].professional_summary[0].description}</p>
        </div>
        <div className="cvbody__description--profiles">
          <h2>{cvData[0].profile[0].title}</h2>
          <p>
            {cvData[0].profile[0].links.map((link) => (
              <a key={link} href={link} target="_blank"
              rel="noreferrer">
                <AiOutlineLink size={20} /> {link}
              </a>
            ))}
          </p>
        </div>

        {/* EDUCATION */}
        <div className="cvbody__description--education">
          <h2>{cvData[0].education[0].title}</h2>

          <p className="cvbody__description--education__school">
            {cvData[0].education[0].description}
          </p>
          <div className="cvbody__description--education__flex">
            <p>
              <strong>Bachelor of Science: Actuarial Science - </strong>
            </p>
            <p>{cvData[0].education[0].year}</p>
          </div>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="cvbody__description--technicalskills">
          <h2>{cvData[0].technical_skills[0].title}</h2>

          <p>
            {cvData[0].technical_skills[0].skills.map((skill) => (
              <span key={skill}>
                <VscTools size={20} /> {skill}
              </span>
            ))}
          </p>
        </div>

        {/* PROJECTS */}
        <div className="cvbody__description--workhistory">
          <CvProjects />
        </div>

        {/* WORK HISTORY */}
        <div className="cvbody__description--workhistory">
          <h2>Work History</h2>
          <div className="cvbody__description--workhistory__company">
            <h3>
              {cvData[0].work_history[0].company_1[0].job_role} |{" "}
              {cvData[0].work_history[0].company_1[0].company_info} -{" "}
              {cvData[0].work_history[0].company_1[0].year}
            </h3>
            <p>
              {cvData[0].work_history[0].company_1[0].job_description.map(
                (desc) => (
                  <span key={desc}>
                    <RxDotFilled size={20} />
                    {desc}
                  </span>
                )
              )}
            </p>
          </div>
          <div className="cvbody__description--workhistory__company">
            <h3>
              {cvData[0].work_history[0].company_2[0].job_role} |{" "}
              {cvData[0].work_history[0].company_2[0].company_info} -{" "}
              {cvData[0].work_history[0].company_2[0].year}
            </h3>
            <p>
              {cvData[0].work_history[0].company_2[0].job_description.map(
                (desc) => (
                  <span key={desc}>
                    <RxDotFilled size={20} />
                    {desc}
                  </span>
                )
              )}
            </p>
          </div>
          <div className="cvbody__description--workhistory__company">
            <h3>
              {cvData[0].work_history[0].company_3[0].job_role} |{" "}
              {cvData[0].work_history[0].company_3[0].company_info} -{" "}
              {cvData[0].work_history[0].company_3[0].year}
            </h3>
            <p>
              {cvData[0].work_history[0].company_3[0].job_description.map(
                (desc) => (
                  <span key={desc}>
                    <RxDotFilled size={20} />
                    {desc}
                  </span>
                )
              )}
            </p>
          </div>
        </div>

        {/* CERTIFICATION */}
        <div className="cvbody__description--certification">
          <h2>Certifications</h2>
          <p>
            <span>
              <FaCertificate size={20} />
              {cvData[0].certification[0].title} -{" "}
              {cvData[0].certification[0].year}{" "}
            </span>
            <span>
              <FaCertificate size={20} />
              {cvData[0].certification[1].title} -{" "}
              {cvData[0].certification[0].year}
            </span>
            <span>
              <FaCertificate size={20} />
              {cvData[0].certification[2].title} -{" "}
              {cvData[0].certification[0].year}
            </span>
          </p>
        </div>

        {/* LANGUAGES */}
        <div className="cvbody__description--languages">
          <h2>Languages</h2>
          <p>
            <span>
              <RxDotFilled size={20} />
              {cvData[0].languages[0].title} - {cvData[0].languages[0].level}{" "}
            </span>
            <span>
              <RxDotFilled size={20} />
              {cvData[0].languages[1].title} - {cvData[0].languages[1].level}
            </span>
            <span>
              <RxDotFilled size={20} />
              {cvData[0].languages[2].title} - {cvData[0].languages[2].level}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CvBody;
