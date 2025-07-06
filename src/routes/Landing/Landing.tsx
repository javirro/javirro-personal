import PersonalProjects from "../../components/PersonalProjects/PersonalProjects"
import Studies from "../../components/Studies/Studies"
import WorkExperience from "../../components/WorkExperience/WorkExperience"
import "./Landing.css"

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <h1>Full Stack and Web3 Developer</h1>
        <h3>Javier Rodríguez</h3>
        <p>
          I’m a full-stack developer with <b>4+ years of experience.</b> I enjoy bringing ideas to life by building and deploying applications from scratch — solving problems and
          learning along the way.{" "}
        </p>
      </header>
      <WorkExperience />
      <PersonalProjects />
      <Studies />
    </section>
  )
}

export default Landing
