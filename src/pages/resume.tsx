import React from "react"
<<<<<<< HEAD
import { PageProps, Link, graphql } from "gatsby"
import { Wrapper, Section, Header } from '../style/resume-style'


=======
import { Link } from "gatsby"
import {
  ResumeWrapper,
  AboutSection,
  PortfolioSection,
} from "../style/resume-style"
>>>>>>> resume

import Layout from "../components/layout"
import SEO from "../components/seo"

<<<<<<< HEAD
import {ResumeTitle} from '../components/title'
import {ResumeText} from '../components/text'
import Headshot from '../components/headshot'


type ResumeProps = {
    name: string
    aboutME: string
}


const ResumePage: React.FC<PageProps<ResumeProps>> = (ResumeProps) => (
  <Layout>
    <SEO title="Hendry Khoza Resume" />

    <Wrapper>
        <Section>
          <Header>
            <Headshot />
                <ResumeTitle text="Hendry Khoza"/>
                <ResumeText text="Software Engineer"/>
            </Header>
        </Section>
    </Wrapper>
      {/*
*/}
  </Layout>
)

export default ResumePage
=======
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
>>>>>>> resume
