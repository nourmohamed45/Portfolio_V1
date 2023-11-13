import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("currentMode")?? "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        className=" menu icon-menu flex"
        onClick={() => {
          setShowModal(true);
        }}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articals</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode flex"
        onClick={() => {
          // send value to Local Storage
          localStorage.setItem("currentMode", theme === "light" ? "dark" : "light");
          // get value from local storage
          settheme(localStorage.getItem("currentMode"))
        }}
      >
        {theme === "dark" ? <span className="icon-moon-o"></span> : <span className="icon-sun"></span>}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articals</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
