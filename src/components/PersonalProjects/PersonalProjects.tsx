import personalProjects from "../../data/personalProjects.json"
import PersonalProjectItem, { PersonalProject } from "./PersonalProjectItem"
import "./PersonalProjects.css"

const PersonalProjects = () => {
  return (
    <div id="personal-projects">
      <h2>Personal Projects</h2>
      <section>
        {personalProjects.map((project: PersonalProject, i) => (
          <PersonalProjectItem key={i} project={project} />
        ))}
      </section>
    </div>
  )
}

export default PersonalProjects
