import { FC } from "react"


interface IPropsMiPrimerComp{

    text: string
    color: string
    fontSize: number

}






export const MiPrimerComp :FC<IPropsMiPrimerComp> = ({text, color, fontSize}) => {
  return(
    <div style={{color: `${color}`, fontSize: `${fontSize}rem`}}><p>{text}</p></div>
  )
}
