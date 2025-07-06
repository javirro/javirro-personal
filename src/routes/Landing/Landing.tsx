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
        <p>+4 years experience. I’m a full-stack developer with 4+ years of experience. I enjoy bringing ideas to life by building and deploying applications from scratch — solving problems and learning along the way.  </p>
      </header>
      <WorkExperience />
      <PersonalProjects />
      <Studies />
    </section>
  )
}

export default Landing
