import { useEffect,useState } from 'react';
import { Orders } from './sections/Orders.tsx';




type Props = {
    title : string
}



    export function Home(){
        return(
            <div>Home</div>
        )
    }
    export function Plans(){
        return(
            <div>Plans</div>
        )
    }
    export function Favorites(){
        return(
            <div>Favorites</div>
        )
    }
    export function History(){
        return(
            <div>History</div>
        )
    }
    export function Help(){
        return(
            <div>Help</div>
        )
    }


export function SectionMain({title} : Props){

    
// useEffect(()=>{
// SectionElement()
// },[])






    return(
        <section
            className="bg-blue-500/2 flex overflow-hidden backdrop-blur-7 -translate-y-2  relative h-28/32 w-17/18 rounded-l"
        >
            {title == "Support / Help" ? (<Help />) : ("")}
            {title == "History" ? (<History />) : ("")}
            {title == "Favorites" ? (<Favorites />) : ("")}
            {title == "Plans" ? (<Plans />) : ("")}
            {title == "Orders" ? (<Orders />) : ("")}
            {title == "Home" ? (<Home />) : ("")}
        </section>
    )
}




