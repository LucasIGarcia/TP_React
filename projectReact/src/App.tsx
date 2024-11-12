import { useState } from "react"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComp } from "./components/MiPrimerComp/MiPrimerComp"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { AppProduct } from "./components/AppProducts/AppProduct"

export const App = () => {
    const [enableCounter, setEnableCounter] = useState(false)
  return (
    <div style={{ display:"flex", flexDirection: "column", gap: "2vh"}}>

    {/* <MiPrimerComp text={"Texto desde prop"} color="blue" fontSize ={3} />
    
    {
        enableCounter && <ComponentCounter/>
    }
    
    <button onClick={()=>{
        setEnableCounter(!enableCounter);
    }}> Mostrar u Ocultar Counter</button>

    <ComponentUseEffect/> */}

    {/* <FormComponent /> */}

    <AppProduct/>
    
    </div>
)
}