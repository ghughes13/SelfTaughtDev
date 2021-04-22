import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import DownArrows from "../components/animations/down-arrows/DownArrows"
import ProjectData from "../data/projectData"
import ProjectCard from "../components/project_card/ProjectCard"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import ParallaxImageHelper from "../components/ParallaxImageHelper/ParallaxImageHelper"

export default function ProjectArchive() {
  return (
    <ParallaxProvider>
      <Layout className="home">
        <SEO title="Project Archive" />
        <div className="hero">
          <h1>
            <span className="mint-green">{"<"}</span>
            SelfTaughtDev
            <span className="mint-green">{"/>"}</span>
          </h1>
          <button className="btn-style-1 min-width-200">How It Works</button>
          <DownArrows />
        </div>
        <div className="section-1 container">
          <div className="row margin-bottom-100">
            <div className="col one-half">
              <Parallax y={[-10, 30]} tagOuter="div">
                <ParallaxImageHelper
                  src={require("../images/home/coding.png")}
                  alt="What's included"
                />
              </Parallax>
            </div>
            <div className="col purple-container one-half">
              <div className="purple-container-inner">
                <h3 className="bold">
                  Learn By <span className="mint-green regular">Doing</span>
                </h3>
                <p className="max-width-450 white-text">
                  Don't get stuck in tutorial hell, watching an endless stream
                  of videos. The best way to learn is by actually building
                  projects.
                </p>
              </div>
            </div>
          </div>
          <DownArrows />
        </div>
        <div className="section-2 container">
          <div className="row justify-center">
            <h2>How It Works</h2>
          </div>
          <div className="row align-center margin-top-50 margin-bottom-100">
            <div className="col text-center one-third">
              <div className="img-container">
                <img
                  src={require("../svgs/home-page/pointing.svg")}
                  alt="pointing"
                />
              </div>
              <h4 className="text-center">
                Choose Your <br />
                Project
              </h4>
              <p className="max-width-400 white-text">
                Head over to the 'Projects' page. Find a project that looks good
                and fits with your current skills
              </p>
            </div>
            <div className="col text-center one-third">
              <div className="img-container">
                <img
                  src={require("../svgs/home-page/download.svg")}
                  alt="downloading"
                />
              </div>
              <h4 className="text-center">
                Download The
                <br />
                Files
              </h4>
              <p className="max-width-400 white-text">
                Each project comes with an Adobe XD (download Adobe XD for free)
                mockup, a readme.md file with requirements, and a video
                description of the project.
              </p>
            </div>
            <div className="col text-center one-third">
              <div className="img-container">
                <img
                  src={require("../svgs/home-page/build.svg")}
                  alt="coding"
                />
              </div>

              <h4 className="text-center">
                Code it
                <br />
                up
              </h4>
              <p className="max-width-400 white-text">
                Open the mock up, pull up your favorite code editor (VS Code)
                and get to work!
              </p>
            </div>
          </div>
          <DownArrows />
        </div>
        <div className="margin-bottom-100">
          <div className="row justify-center">
            <h2>Projects</h2>
          </div>
          <div className="project-previews">
            <ProjectCard
              project={ProjectData[0]}
              key={ProjectData[0].imgUrl}
              addClass={ProjectData[0].isFreeProject}
            />
            <ProjectCard
              project={ProjectData[1]}
              key={ProjectData[1].imgUrl}
              addClass={ProjectData[1].isFreeProject}
            />
            <ProjectCard
              project={ProjectData[2]}
              key={ProjectData[2].imgUrl}
              addClass={ProjectData[2].isFreeProject}
            />
          </div>
          <Link to="/project-archive" className="btn-style-1 min-width-200">
            See More
          </Link>
        </div>
      </Layout>
    </ParallaxProvider>
  )
}
