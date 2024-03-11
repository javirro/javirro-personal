import './PersonalProjectItem.css'

export interface PersonalProject {
  title: string
  description: string
  url: string
  github: string
  stack: string[]
}

const PersonalProjectItem = ({ project }: { project: PersonalProject }) => {
  return (
    <div className="project-container">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="stack-tags">
        {project?.stack.map((tech: string) => (
          <span key={tech} className="tag">
            #{tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PersonalProjectItem
