import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Wrapper, Section, Header } from '../style/resume-style'



import Layout from "../components/layout"
import SEO from "../components/seo"

import { SubTitle, MainTitle } from '../components/title'
// import {Parag} from '../components/parag'
import Headshot from '../components/headshot'

import AboutME from '../components/about-me'


type ResumeProps = {
    name: string
    aboutME: string
}

const test = {
  title: "Hey yeah this is title",
  parag: "Okay, here we go on and explain"
}

const ResumePage: React.FC<PageProps<ResumeProps>> = (ResumeProps) => (
  <Layout>
    <SEO title="Hendry Khoza Resume" />

    <Wrapper>
        <Section>

          {/* HEADER */}
          <Header>
            <Headshot />
            <MainTitle text="Hendry Khoza"/>
            <SubTitle text="Software Engineer"/>
          </Header>

          {/* ABOUT ME */}
          <AboutME title={test.title} parag={test.parag}/>


        </Section>
    </Wrapper>
  </Layout>
)

export default ResumePage
