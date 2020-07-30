import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Skills from "../components/skills/Skills"
import Projects from "../components/projects/Projects"
import Contact from "../components/contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
