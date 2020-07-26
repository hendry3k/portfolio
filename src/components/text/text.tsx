import React from 'react'

type TextProps = {
    text: string
}
export const ResumeText: React.FC<TextProps> = ({text})=> (
    <p>{text}</p>
)
