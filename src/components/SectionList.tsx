import React, { useState } from "react";
// import { Section } from "./Section";


type SectionsPropss = {
  tituloo: string;
};


function TempSectList({ tituloo } : SectionsPropss) {

    const [titulo, setTitulo] = useState('')


    const handletitulo = () =>{
        setTitulo(tituloo)
        console.log(tituloo)
    }

  return (
    <span
      id={`${tituloo}`}
      className={`py-4 hover:py-5 bg-[#00000f]/30 backdrop-blur-xl text-lg text-white hover:cursor-pointer hover:bg-[#00000f]/10 transition-all delay-200`}
      style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
      onClick={handletitulo}
    >
      {tituloo}
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

