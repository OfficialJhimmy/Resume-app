import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/CvProjects.css";
import { AiOutlineLink } from "react-icons/ai";

const CvProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data from github repo API
    axios
      .get("https://api.github.com/users/OfficialJhimmy/repos")
      .then((response) => {
        console.log(response.data, "response----");
        // Filtering the repo to display ones with a description
        const filteredRepos = response.data.filter((repo) => repo.description);
        // Sorting the repo in descending order
        const sortedRepos = filteredRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setProjects(sortedRepos);
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: error,
            confirmButtonColor: "red",
          });
          console.log(error, "An Error occured!");
        }
      });
  }, []);

  return (
    <div className="cvbody__projects--container">
      <h2>Projects</h2>

      {projects.map((project) => (
        <div className="cvbody__projects--children">
          <a href={project.html_url} target="_blank" rel="noreferrer">
            {project.name} <AiOutlineLink size={20} />
          </a>
          <p><strong>{project.created_at.split("T")[0]}</strong></p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CvProjects;
