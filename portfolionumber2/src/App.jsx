import "./App.css";

function App() {

  return (
   <div className="container">
      <nav>
        <h2>Kyle.</h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Hi, I'm Kyle.</h1>
        <h2>Aspiring Web Developer</h2>
        <p>
          I'm an IT student interested in web development,
          programming, and design. I'm currently learning
          and building projects to improve my skills.
        </p>
        <a href="#projects" className="button">
          View My Projects
        </a>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm currently studying Information Technology.
          I enjoy learning new technologies and creating
          simple, useful applications.
        </p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>

        <div className="project">
          <h3>Personal Portfolio</h3>
          <p>A simple portfolio website built using React and CSS.</p>
        </div>

        <div className="project">
          <h3>Project 2</h3>
          <p>More of my projects will be added here soon.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: your-email@example.com</p>
      </section>

      <footer>
        <p>© 2026 Kyle. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App
