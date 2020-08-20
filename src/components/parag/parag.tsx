import React from 'react'
import { Template } from './style'

interface ParagProps {
  text: string;
}

export const Parag: React.FC<ParagProps> = ({text}: ParagProps) => (
    <Template>{text}</Template>
)
