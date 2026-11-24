import "./App.css";

function App() {

  return (
   <div className="container">
      <nav>
        <h2>My Portfolio</h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

     
<section className="hero">
  <p className="hero-greeting">WELCOME TO MY PORTFOLIO</p>

  <h1>
    Hi, I'm <span>Kyle.</span>
  </h1>

  <h2>Aspiring Web Developer</h2>

  
<section id="about">
  <h2>About Me</h2>

  <p>
    I'm an Information Technology student currently
    developing my skills in programming and web development.
    I enjoy exploring new technologies, solving problems,
    and building applications through hands-on projects.
  </p>

  <p>
    My goal is to become a well-rounded developer while
    continuously learning and improving my technical skills.
  </p>
</section>


  <p className="hero-focus">
    Currently learning React, Java, and C#.
  </p>

  <a href="#projects" className="button">
    Explore My Work →
  </a>
</section>


      <section id="projects">
        <h2>My Projects</h2>

        <div className="project">
          <h3>Java Forms Game</h3>
          <p>Made a JavaForms matching game as a project</p>
        </div>

        <div className="project">
          <h3>Project 2</h3>
          <p>More of my projects will be added here soon.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: Kylemarco.cabauatan@cvsu.edu.ph</p>
      </section>

      <footer>
        <p>© 2026 Kyle. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App
