import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import Hero from "../../components/portfolio/Hero"
import About from "../../components/portfolio/About"
import Skills from "../../components/portfolio/Skills"
import Projects from "../../components/portfolio/Projects"
import Contact from "../../components/portfolio/Contact"

const portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
)

export default portfolio
