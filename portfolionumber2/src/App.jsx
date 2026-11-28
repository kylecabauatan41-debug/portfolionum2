import { useState } from "react";
import "./App.css";
import { FaDiscord, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function App() {
 
  const [page, setPage] = useState("home");

  return (
    <div className="app">

      <div className="background"></div>
     
      <nav>
        <button className="logo" onClick={() => setPage("home")}>
          Kyle's Portfolio
        </button>

        <div className="navlinks">
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("projects")}>Projects</button>
          <button onClick={() => setPage("skills")}>Skills</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
      </nav>

      <section className="panel" key={page}>

      {page === "home" && (
       <div>
       <p className = "greeting slide delay1">WELCOME TO MY PORTFOLIO</p>
      
      <h1 className = "slide delay2"> Hi, I'm <span className="gradienttext">Kyle.</span> </h1>
      
      <p className="slide delay3"> I'm an Information Technology student developing my skills in
              programming and web development.
            </p>

          <p className="slide delay4">Currently learning React, Java, and C#.</p>

      <button className="button slide delay6" onClick={() => setPage("projects")}>
              Explore My Work →
         </button>
         </div>
      )}

    {page === "about" && (
      <div className = "abtrow">

      <div>
        <h1 className="slide delay1"> <span className="gradienttext">About Me</span> </h1>

       <p className="slide delay2">
              I'm an Information Technology student currently developing my
              skills in programming and web development. I enjoy exploring new
              technologies, solving problems, and building applications through
              hands-on projects.
       </p>

      <p className="slide delay3">
              I've also got plenty of interest outside technology and codes
       </p>

       <p className="slide delay4">
              My goal is to become a well-rounded developer while continuously
              learning and improving my technical skills.
       </p>
      </div>

      <img className="pfp slide delay2" src="/me.jpg" alt="me"></img>

      </div>
    )}

    {page === "projects" && (
     <div>
      <h1 className = "slide delay1">Projects I've <span className ="gradienttext">Worked on</span></h1>
      <h3 className = "slide delay2"><span className ="gradienttext">and currently working on</span></h3>

      <div className="project slide delay3">
        <h3>Java Matching Cards Game</h3>
        <p>A matching card game made with Java Forms for a school project.</p>
            </div>
      
      <div className="project slide delay4">
        <h3>C# Simon Says</h3>
        <p>Simon says game themed with Among us.</p>
            </div>

      <div className="project slide delay5">
        <h3>Portfolio Website</h3>
        <p>A personalized portfolio website deployed and commited on GitHub.</p>
      </div>
     </div>
    )}

    {page === "skills" && (
      <div>
        <h1 className="slide delay1"> <span className="gradienttext"> Skills </span> </h1>
            <span className="chip slide delay2">React</span>
            <span className="chip slide delay3">JavaScript</span>
            <span className="chip slide delay4">HTML</span>
            <span className="chip slide delay5">CSS</span>
            <span className="chip slide delay6">Java</span>
            <span className="chip slide delay6">C#</span>
     </div>
    )}

    {page === "contact" && (
     <div className="contact">
         <h1 className="slide delay1"><span className="gradienttext">Follow me!</span></h1>

     <div className="socials slide delay2">
           <a href="https://discord.com/users/jihyee_1" target="_blank" rel="noreferrer">
           <FaDiscord />
           </a>
          <a href="https://www.facebook.com/kyle.cabauatan.2024" target="_blank" rel="noreferrer">
           <FaFacebookF />
           </a>
           <a href="https://www.instagram.com/amorrri_/" target="_blank" rel="noreferrer">
           <FaInstagram />
          </a>
           <a href="https://x.com/KusoCre" target="_blank" rel="noreferrer">
          <FaXTwitter />
          </a>
           <a href="https://www.tiktok.com/@ommnom1" target="_blank" rel="noreferrer">
          <FaTiktok />
      </a>

    </div>
    <p className="handle slide delay3">Gmail : Kylecabauatan41@gmail.com</p>
  </div>
)}
     </section>
   </div> 
  );
}

export default App;