import { useParams } from "react-router-dom"
import projects from "../../data/personalProjects.json"
import { ProjectData } from "../../types"

import "./Projects.css"
import { imgs } from "../../images"

const Projects = () => {
  const { name } = useParams<{ name: string }>()
  const projectInfo = projects?.find(project => project.title.toLowerCase().replace(" ", "-") === name?.toLowerCase()) as ProjectData
  const { title, description, longDescription, github, url, isTeamWork, teamText } = projectInfo
  return (
    <div className="project-main">
      <section className="bento-grid">
        <div className="left-grid">
          <div className="container column">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="blank_" rel="noreferrer">
              Visit the project
              <img src={imgs.link} alt="link" />
            </a>
            <a href={github} target="blank_" rel="noreferrer">
              <span>Access Github</span>
              <img src={imgs.darkGithub} alt="github" />
            </a>
          </div>
          <div className="container reduced-space">
            <img src={isTeamWork ? imgs.team : imgs.person} alt="People" />
            <p>{teamText}</p>
          </div>
        </div>
        <div className="right-grid">
          <div className="container">
            <img src={imgs?.screen} alt="front-end" />
            <p>{longDescription.frontend}</p>
          </div>
          <div className="container">
          <img src={imgs?.server} alt="backend" />
            <p>{longDescription.backend}</p>
          </div>
          <div className="container">
          <img src={imgs?.database} alt="database" />
            <p>{longDescription.database}</p>
          </div>
          <div className="container">
          <img src={imgs?.cloud} alt="cloud" />
            <p>{longDescription.deployment}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
