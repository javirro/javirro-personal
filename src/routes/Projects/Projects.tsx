import { useParams } from "react-router-dom"
import projects from "../../data/personalProjects.json"
import { ProjectData } from "../../types"

import "./Projects.css"

const Projects = () => {
  const { name } = useParams<{ name: string }>()
  const projectInfo = projects?.find(project => project.title.toLowerCase() === name?.toLowerCase()) as ProjectData
  const { title, description, longDescription, stack, github, url } = projectInfo
  return (
    <div className="project-main">
      <section className="bento-grid">
        <div className="left-grid">
          <div className="container">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="blank_" rel="noreferrer">
              Visit the project
            </a>
            <a href={url} target="blank_" rel="noreferrer">
              Access Github
            </a>
          </div>
        </div>
        <div className="right-grid">
          <div className="container">
            <p>{longDescription.frontend}</p>
          </div>
          <div className="container">
            <p>{longDescription.backend}</p>
          </div>
          <div className="container">
            <p>{longDescription.database}</p>
          </div>
          <div className="container">
            <p>{longDescription.deployment}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
