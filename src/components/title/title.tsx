import React from "react"

type TitleProps = {
    text: string

}


export const ResumeTitle: React.FC<TitleProps> = ({text}) => {

return (<h2>{text}</h2>)
}

