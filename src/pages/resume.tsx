import React from "react"
import { Link } from "gatsby"
import {
  ResumeWrapper,
  AboutSection,
  PortfolioSection,
} from "../style/resume-style"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <ResumeWrapper>
      <AboutSection>
        <h2>About Section</h2>
      </AboutSection>
      <PortfolioSection>
        <h2>Portfolio Section</h2>
      </PortfolioSection>
    </ResumeWrapper>
  </Layout>
)

export default Resume
