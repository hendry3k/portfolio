import React from "react"

interface TitleProps {
    text: string
}


export const SubTitle: React.FC<TitleProps> = ({ text}: TitleProps) => {
  return (<h2>{text}</h2>)
}


export const MainTitle: React.FC<TitleProps> = ({ text}: TitleProps) => {
  return (<h2>{text}</h2>)
}
