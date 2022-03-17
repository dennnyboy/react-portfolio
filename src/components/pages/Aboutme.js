import React from "react";
import logo from '../images/picofme.png'

function AboutMePage() {
  return (
    <section>
      <h1>About Me</h1>
      <img src={logo} className="picture"></img>
      <div className="text">
        <p>
        Hello! My name is Dennis Khaperskov. At this moment I am a college student attending Florida SouthWestern State
      College. My goal is to finish schooling by 2024 with a bachelors in software engineering. My skills include being
      proficient at numerous Adobe products, including Photoshop and After Affects.
        </p>
        <a href="https://drive.google.com/file/d/1lB_oqECK-ouxyp8G5N5Hp1aw3oejK7yD/view?usp=sharing">Click To View My Resume!</a>
      </div>

    </section>
  )
}

export default AboutMePage;
