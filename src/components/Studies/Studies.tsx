import { imgs } from "../../images"
import "./Studies.css"
const Studies = () => {
  return (
    <section id="studies">
      <h2>Studies</h2>
      <ul>
        <li>
          <img src={imgs.calendar} alt="calendar" />
          <div>
            <strong>Master in Project Management </strong>
            <span> UNIR (International University of La Rioja) (2022)</span>
          </div>
        </li>
        <li>
          <img src={imgs.master} alt="master" />
          <div>
            <strong>Master in Telecommunication Engineering </strong>
            <span>University of Oviedo (2018-2022)</span>
          </div>
        </li>
        <li>
          <img src={imgs.security} alt="lock" />
          <div>
            <strong>Postgraduate degree in Expert in Perimeter and Network Security </strong>
            <span>University of Oviedo (2019)</span>
          </div>
        </li>
        <li>
          <img src={imgs.degree} alt="degree" />
          <div>
            <strong>Bachelor’s Degree in Engineering of Telecommunication </strong>
            <span>University of Oviedo (2014-2018)</span>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Studies
