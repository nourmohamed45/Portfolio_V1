/* eslint-disable react/no-unescaped-entities */
import "./hero.css";
import developerAnimation from "../../animation/developer.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1)"}}
          transition={{damping: 8, type: "spring", stiffness: 100}}
          src="./me.jpeg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        className="title">
          Software engineer, Frontend engineer
        </motion.h1>
        <p className="sub-title">
          I'm Nour Mohamed, a software developer and I have a Bachelor of
          Science in Computer Science from Suez Canal University, 2023, with a
          'Very Good' grade. Dedicated front-end developer skilled in React,
          with a passion for integrating AI into web applications to enhance
          user experiences and drive innovation. Committed to staying at the
          forefront of technology and eager to collaborate on cutting-edge
          projects.
        </p>
        <div className="icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          className="hero-animation"
          style={{ width: "500px" }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
