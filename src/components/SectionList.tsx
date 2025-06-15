import React, { useState } from "react";
// import { Section } from "./Section";


type SectionsPropss = {
  tituloo: string;
};


function TempSectList({ tituloo } : SectionsPropss) {

    const [titulo, setTitulo] = useState<string>("")
    const [focus, setFocus] = useState<boolean>(false)


    const handletitulo = () =>{
        setTitulo(tituloo)
        
    }

    const handletituloo = () =>{
        setTitulo('')
        
    }

  return (
    <span
      id={`${tituloo}`}
      className={`py-4 hover:py-5 bg-[#00000f]/30 backdrop-blur-xl text-lg text-white hover:cursor-pointer hover:bg-[#00000f]/10 transition-all delay-200`}
      style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
      onMouseEnter = {()=>{handletitulo}}
      onClick = {()=>{titulo == tituloo ? setFocus(true) : setFocus(false)}}
      onMouseLeave = {()=>{handletituloo}}
      

    >
      {focus ? (<i><b>{tituloo}</b></i>) : tituloo}

    </span>
  );


}


type SectionsProps = {
  title?: string;
};

export function SectionList({ title }: SectionsProps){

return(
    <TempSectList tituloo={title ?? ""}/>
)
}

