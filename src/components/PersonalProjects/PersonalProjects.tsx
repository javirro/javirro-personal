import personalProjects from "../../data/personalProjects.json"
import "./PersonalProjects.css"

const PersonalProjects = () => {
  return (
    <div id="personal-projects">
      <h2>Personal Projects</h2>
      <section>
        {personalProjects.map((project, i) => (
          <div key={i}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default PersonalProjects
