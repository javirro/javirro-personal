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
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Projects
