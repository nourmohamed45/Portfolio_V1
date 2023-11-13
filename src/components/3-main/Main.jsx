import "./main.css";

export default function Main() {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">All Projects</button>
        <button>Html & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>
      <section className="right-section flex">
        {["aa", "bb", "cc", "dd"].map((item) => {
          return (
            <article key={item} className="card">
              <img width={266} src="./1.jpg" alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Landing Page 2</h1>
                <p className="sub-title">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, amet quidem ex est fuga nulla? Aut voluptatibus
                  optio repellendus.
                </p>
                <div className="icons flex">
                  <div className="right-icons flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a href="" className="flex link">
                    more
                    <div className="icon-arrow-right"></div>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
