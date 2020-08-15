import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Wrapper, Section, Header } from '../style/resume-style'



import Layout from "../components/layout"
import SEO from "../components/seo"

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
  </Layout>
)

export default ResumePage
