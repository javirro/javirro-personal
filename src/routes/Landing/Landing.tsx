import PersonalProjects from "../../components/PersonalProjects/PersonalProjects"
import Studies from "../../components/Studies/Studies"
import WorkExperience from "../../components/WorkExperience/WorkExperience"
import "./Landing.css"
const Landing = () => {
  return (
    <section id="landing">
      <header>
        <h1>Full Stack and Web3 Developer</h1>
        <h3>Javier Rodriguez</h3>
        <p>+3 years experience. I love being full stack developer because it allows me build and deploy applications from scratch and solve all the issues found during the process.  </p>
      </header>
      <WorkExperience />
      <PersonalProjects />
      <Studies />
    </section>
  )
}

export default Landing
