/* eslint-disable react/no-unescaped-entities */
import "./hero.css"


export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./me.jpeg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Software engineer, Frontend engineer</h1>
        <p className="sub-title">I'm Nour Mohamed, a software developer and I have a Bachelor of Science in Computer Science from Suez Canal University, 2023, with a 'Very Good' grade. Dedicated front-end developer skilled in React, with a passion for integrating AI into web applications to enhance user experiences and drive innovation. Committed to staying at the forefront of technology and eager to collaborate on cutting-edge projects.</p>
        <div className="icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation border">
        animation
      </div>
    </section>
  )
}
