import PersonalProjects from "../../components/PersonalProjects/PersonalProjects"
import WorkExperience from "../../components/WorkExperience/WorkExperience"
import "./Landing.css"
const Landing = () => {
  return (
    <section id="landing">
      <header>
        <h1>Full Stack and blockchain Developer</h1>
        <p>+3 years experience. I love being full stack developer because it permits me build and deploy applications from scratch and solve all the issues found during the process.  </p>
      </header>
      <WorkExperience />
      <PersonalProjects />
    </section>
  )
}

export default Landing
