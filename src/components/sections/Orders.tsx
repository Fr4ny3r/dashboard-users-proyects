// import type { JSXElementConstructor } from "react"
import { Favorites } from "../SectionMain"
import { GamesPc } from "../typesProducts"
import type { IdDevice}  from "../typesProducts"

import { useState } from "react"

type Product = {
    title : string
    desc : string
    price : number
    favorite : boolean
    device? : [object] | object
    id : number
}


type Props = {
    products : Product[][]
}


export function Orders({products} : Props ){

    const [game, setGame] = useState<Product | null>(null)



  const randomProduct = game ? products[Math.floor(Math.random()*3)][Math.floor(Math.random()*5)] : products[1][1]

    const handleGame = (products : Product) =>{
        setGame(products)
        // setFavorite(products.id)
        // console.log(favorite)
        // handleFavorite(products.id)
    }


    const [favName, setFavName] = useState<string[]>([]);

    
    
    function ToggleFavorite() {
            // Get the current product id (as string)
            const id = (game ? game?.id : randomProduct?.id).toString();
    
            // Check if this product is already a favorite
            const isFavorite = favName.includes(id);
    
            function handleFavorite() {
                setFavName((prev) =>
                    isFavorite
                        ? prev.filter((favId) => favId !== id)
                        : [...prev, id]
                );
            }
            return (
                <div
                    onClick={handleFavorite}
                    id="fav"
                    className=" hover:scale-110 hover:cursor-pointer bottom-5 h-fit w-fit px-2 pt-2 pb-1"
                >
                    <span className="w-full h-fit top-0 left-0">
                        {isFavorite ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                        )}
                    </span>
                </div>
            )
        }
        

    function SectionLeft(){

    
        return(
            <>
                <div
                className="w-full m-0-auto h-10 rounded-md flex items-center justify-between relative bg-white/70"
                style={{"boxShadow" : "2px 2px 4px 0px rgba(0, 0, 0, 0.4)"}}
                >
                    <span>
                        {game && typeof game.device === "object" && game.device !== null ?
                        (
                            <span className="text-black ml-3 text-lg">
                                {game.device && typeof game.device === "object"
                                    ? Object.values(game.device)[0]?.toString()
                                    : ""}
                            </span>
                            
                        ) : (
                            <span className="text-black ml-3 text-lg">
                            {game
                                ? (game.device ? Object.values(game.device)[0]?.toString() : "")
                                : (randomProduct.device ? Object.values(randomProduct.device)[0]?.toString() : "")
                            }
                            </span>
                        )}
                    </span>
                        <span id="idProduct" hidden>{game ? game?.id : randomProduct.id}</span>
                        <span className="text-black/70 mr-4 text-lg">
                            #{game ? game?.id : randomProduct.id}
                        </span>
                </div>
                
                <div 
                    className=" w-full h-fit grid p-5 pt-7"
                    style={{gridTemplateRows : "auto 1fr", gridTemplateColumns : "auto 1fr"}}
                >
                    <span
                        className="bg-black min-h-70 w-50"
                        style={{gridRow : "1/4", gridColumn : "1/2"}}
                    >
                        <img/>
                    </span>

                    <span className=" h-2/6 w-fit ml-3 mt-5 text-3xl" >
                        {game ? game?.title : randomProduct.title}
                    </span>
                     <p className=" pl-5 w-15/18 pt-1">
                        {game ? game?.desc : randomProduct.desc}
                    </p>
                </div>


                <div 
                    className="bg-[#3f3f3f] absolute grid h-fit w-fit right-5 bottom-5"
                    style={{gridTemplateColumns : "auto 1fr"}}
                >
                    
                    <span className="right-15 bottom-5 px-2 text-xl bg-[#2f2f2f] text-white py-2">
                        Price {game ? game?.price : randomProduct.price}
                    </span>
                    <ToggleFavorite/>

                </div>
                    
            </>
        )
    }


    function SectionRight(){
        return(
            <>

                <div
                className=" w-full fixed min-h-15 backdrop-blur-9 top-0 bg-white/70 sticky z-10 flex items-center"
                // style={{background : "linear-gradient(gray, rgba(0, 0, 0, 0))"}}
                >
                    <div className="absolute w-full h-15" ></div>
                    <span className="left-3 relative top-0 text-gray-900">
                        Games
                    </span>
                </div>

                    <ProductList/>
    
            </>
        )
    }



    function ProductList(){
        return(
                <div className='max-h-70 flex pb-35 flex-col wrap '>
                    
                    {products ? (
                        <>
                            {products[2] && products[2].map((values) => (
                                <span
                                    key={values.title}
                                    className="text-white my-2  mx-3 py-2 text-center text-lg hover:scale-110 hover:cursor-pointer hover:bg-[#181818] select-none"
                                    style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                                    onClick={()=>{handleGame(values)}}
                                >
                                    {values.title}
                                </span>
                            ))}
                            {products[1] && products[1].map((values) => (
                                <span
                                    key={values.title}
                                    className="text-white my-2  mx-3 py-2 text-center text-lg hover:scale-110 hover:cursor-pointer hover:bg-[#181818] select-none"
                                    style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                                    onClick={()=>{handleGame(values)}}
                                >
                                    {values.title}
                                </span>
                            ))}
                            {products[0] && products[0].map((values) => (
                                <span
                                    key={values.title}
                                    className="text-white my-2  mx-3 py-2 text-center text-lg hover:scale-110 hover:cursor-pointer hover:bg-[#181818] select-none"
                                    style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                                    onClick={()=>{handleGame(values)}}
                                >
                                    {values.title}
                                </span>
                            ))}
                        </>
                    ) : (<span>Cargando...</span>)}
                
                </div> 
        )
    }



    return(
            <section
                className="w-full h-full flex flex-col overflow-x-hidden overflow-y-scroll lg:overflow-hidden text-white lg:grid relative"
                style={
                    {   
                        "gridTemplateColumns" : "1fr 1fr",
                        fontFamily: '"Pixelify Sans", sans-serif'
                    }}    
            >

        <section className="flex flex-col max-w-200 lg:min-h-full lg:justify-between">
            <div
                className="relative max-h-full mb-10 max-w-full p-3 border-gray-400/8 border-1 rounded-md"
                style={{"boxShadow" : "2px 4px 4px 0px rgba(0, 0, 0, 0.4)","animation" : "easeBox .3s both 0s"}}
            >

                    <SectionLeft/>

            </div>

            <div
                className="relative min-h-30 max-w-auto lg:min-w-150 p-3 border-gray-400/8 border-1 bg-black "
                style={{"boxShadow" : "2px 4px 4px 0px rgba(0, 0, 0, 0.4)","animation" : "easeMario 1s both 0s"}}
            >
            </div>

        </section>



        <section className="py-2 h-fit w-full lg:max-w-55 lg:m-auto flex flex-col lg:px-5 justify-between" style={{fontFamily: '"Pixelify Sans", sans-serif', fontSize : "35px"}}>            
            <div
                className="relative lg:h-6/6 border-gray-400/8 flex justify-center items-center border-1"
                style={{"boxShadow" : "2px 4px 4px 0px rgba(0, 0, 0, 0.4)","animation" : "easeInput .3s both 0s"}}
            >
                <input className="text-white bg-[#191919] border-none w-5/6 my-4 py-3 px-2 focus:outline-none" type="text" name="Search" placeholder="Search" id="" style={{fontFamily: '"Pixelify Sans", sans-serif', fontSize : "14px"}}/>
            </div>            
            <div className='overflow-y-scroll scrollbar h-fit relative border-gray-400/8 border-1'
                style={{   
                        "boxShadow" : "2px 4px 4px 0px rgba(0, 0, 0, 0.4)",
                        "animation" : "easeMessage .3s both 0s",
                        "gridTemplateRows" : "auto 1fr"
                    }}
            >
                <SectionRight/>    
            </div>
                
        </section>
        </section>
        )
    }