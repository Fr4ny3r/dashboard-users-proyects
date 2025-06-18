import { useEffect, useState } from 'react';
import { Orders } from './sections/Orders.tsx';
// import type { Device } from './typesProducts';
import { GamesPc, GamesConsole, GamesAndroid } from './typesProducts';


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

    const products = [GamesPc, GamesConsole, GamesAndroid]

    return(
        <section
            className="backdrop-brightness-95 flex flex-rows wrap overflow-hidden justify-between p-5 relative h-28/32 w-30/32 rounded-lg"
        >
            {title ? (
                title === "Support / Help" ? <Help />
                : title === "History" ? <History />
                : title === "Favorites" ? <Favorites />
                : title === "Plans" ? <Plans />
                : title === "Orders" ? <Orders products={products} />
                : title === "Home" ? <Home />
                : <span>Cargando...</span>
            ) : (<span>Cargando...</span>)}

        </section>
    )
}




