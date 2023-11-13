import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [currentBtn, setCurrentBtn] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleFilterBtn = (type) => {
    setCurrentBtn(type);
    const newArray = myProjects.filter((element) => {
      const cat = element.category.filter((item) => {
        return item === type;
      });
      return cat[0] === type;
    });
    setArr(newArray);
  };

  return (
    <main className="flex">
      {/* Left Section */}
      <section className="left-section flex">
        <button
          onClick={() => {
            setCurrentBtn("all");
            const newArray = myProjects;
            setArr(newArray);
          }}
          className={currentBtn === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleFilterBtn("html-css");
          }}
          className={currentBtn === "html-css" ? "active" : null}
        >
          Html & CSS
        </button>
        <button
          onClick={() => {
            handleFilterBtn("js");
          }}
          className={currentBtn === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleFilterBtn("react-mui");
          }}
          className={currentBtn === "react-mui" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleFilterBtn("node-express");
          }}
          className={currentBtn === "node-express" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      {/* Right Section */}
      <section className="right-section flex">
        <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ damping: 8, type: "spring", stiffness: 100 }}
              key={item.id}
              className="card"
            >
              <img width={266} src={item.image} alt="" />
              <div style={{ width: "266px" }} className="box flex">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.description}</p>
                <div className="icons flex">
                  <div className="right-icons flex">
                    <a target="_blank" rel="noreferrer" href={item.preview}>
                      <div className="icon-link"></div>
                    </a>
                    <a target="_blank" rel="noreferrer" href={item.github}>
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href=""
                    className="flex link"
                  >
                    more
                    <div className="icon-arrow-right"></div>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
}
