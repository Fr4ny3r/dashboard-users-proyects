import { useState } from "react";
import { SectionMain } from "./SectionMain";


export function Section() {
  const [section, setSection] = useState<string>('Home');
  const [active, setactive] = useState<boolean>()


// useEffect(()=>{
//   SectionElement()
// },[])

    function SectionElement(){

      function handleSection(asd : string){
         setSection(asd)
        // console.log(section)
        section == asd ? setactive(true) : setactive(false) 
      }

      const sections = ["Home","Orders","Plans","Favorites","History","Support / Help"]
      sections.forEach((sect)=>{
    	const elemento = document.getElementById(`${sect}`)
      // console.log(elemento?.textContent)
    	return elemento?.addEventListener("click", ()=>{handleSection(elemento.id)})
      })        
      // active ? console.log(active) : console.log(active) 
    }

    SectionElement()

  return (

        // active ?
        <main id="mainBox" className="mainBox xl:relative xl:h-full h-28/32  absolute w-full  items-center overflow-hidden justify-center flex">
           <SectionMain title={section} />
        </main>
        // : console.log(section)

  )
}