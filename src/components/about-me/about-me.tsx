import React from "react"
import { Template } from './style'
import { SubTitle } from '../title'
import { Parag } from '../parag'

interface AboutProps  {
  title: string;
  parag: string;
}


const AboutMe: React.FC<AboutProps> = ({ title, parag }: AboutProps) => (
  <Template>
    <SubTitle text={title} />
    <Parag text={parag} />
  </Template>
)

export default AboutMe
