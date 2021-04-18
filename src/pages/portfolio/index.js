import React from "react"

import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo"
import Hero from "../../components/portfolio/hero/Hero"
import About from "../../components/portfolio/about/About"
import Skills from "../../components/portfolio/skills/Skills"
import Projects from "../../components/portfolio/projects/Projects"
import Contact from "../../components/portfolio/contact/Contact"

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
