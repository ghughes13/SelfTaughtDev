import React from "react"
import DownArrows from "../../Animations/DownArrows"
import Project from "../Project"

import "./styles.scss"

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="col">
          <Project
            title="TRIdigital"
            imgSrc="tridigital-site.png"
            skills={["HTML", "CSS", "SASS", "React", "Gatsby"]}
            demoLink="https://www.tridigitalmarketing.com/"
            codeLink="https://github.com/ghughes13/Tridigital"
          />
          <Project
            title="Photo Gallery"
            imgSrc="photo-gallery-project.png"
            skills={["HTML", "CSS", "JavaScript", "JQuery"]}
            demoLink="https://tu0oo.csb.app/"
            codeLink="https://github.com/ghughes13/photo-gallery"
          />{" "}
          <Project
            title="Employee Directory"
            imgSrc="employee-directory-project.png"
            skills={["HTML", "CSS", "React"]}
            demoLink="https://76f3j.csb.app/"
            codeLink="https://github.com/ghughes13/employee-directory"
          />{" "}
          <Project
            title="Tic-Tak-Toe"
            imgSrc="tic-tac-tow-project.png"
            skills={["HTML", "CSS", "JavaScript"]}
            demoLink="https://m9tx7.csb.app/"
            codeLink="https://github.com/ghughes13/TreeHouse-JSDev-Project-4"
          />
        </div>
        <div className="col">
          <Project
            title="Honey CRM"
            imgSrc="honeycrm-site.png"
            skills={["HTML", "CSS", "SASS", "React", "Gatsby"]}
            demoLink="https://honeycrm.com/"
            codeLink="https://github.com/ghughes13/honey-CRM"
          />
          <Project
            title="Paginating Student List"
            imgSrc="paginated-employee-directory-project.png"
            skills={["JavaScript"]}
            demoLink="https://jv1ix.csb.app/"
            codeLink="https://github.com/ghughes13/Pagination-Page"
          />
          {/* <Project
            title="Letter Guessing game"
            imgSrc="handman-project.png"
            skills={["HTML", "CSS", "JavaScript"]}
            // demoLink="#"
            codeLink="https://github.com/ghughes13/phrase-guessing-game"
          /> */}
        </div>
        <div className="col">
          <Project
            title="Book Organization App"
            imgSrc="google-reads-remake-project.png"
            skills={["React", "Redux"]}
            demoLink="https://362lx.csb.app/"
            codeLink="https://github.com/ghughes13/Book-Tracker-App"
          />
          <Project
            title="MERN Stack ToDo List"
            imgSrc="react-todo-list.png"
            skills={["HTML", "CSS", "React", "Node", "Express,", "MongoDB"]}
            demoLink="https://ghughes-react-todo-list.herokuapp.com/"
            codeLink="https://github.com/ghughes13/react-todo-list"
          />
          <Project
            title="Would You Rather"
            imgSrc="would-you-rather-project.png"
            skills={["React", "Redux"]}
            demoLink="https://dgcb6.csb.app/"
            codeLink="https://github.com/ghughes13/would-you-rather"
          />
          <Project
            title="Weather App"
            imgSrc="weather-app.png"
            skills={["HTML", "CSS", "React"]}
            demoLink="https://ghughes13weatherapp.herokuapp.com/"
            codeLink="https://github.com/ghughes13/react-weather-app"
          />
          <Project
            title="Pokedex"
            imgSrc="pokedex.png"
            skills={["HTML", "CSS", "React"]}
            demoLink="https://9tw1r.csb.app/"
            codeLink="https://github.com/ghughes13/react-pokedex"
          />
          <Project
            title="Random Quote Generator"
            imgSrc="random-quote-project.png"
            skills={["HTML", "CSS", "React"]}
            demoLink="https://2wjz4ozzyj.csb.app/"
            codeLink="https://github.com/ghughes13/FCC-RandomQuoteGen"
          />
        </div>
      </div>
      <DownArrows />
    </div>
  )
}

export default Projects
