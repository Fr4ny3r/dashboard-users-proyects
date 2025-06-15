// import type { JSXElementConstructor } from "react"

type Product = {
    title : string
}

type Props = {
    products : Product[][]
}


   export function Orders({products} : Props ){
        return(
            <>
            <section
                className=" h-5/8 mt-5 ml-5 overflow-hidden border-gray-400/8 border-1 rounded-md"
                style={
                    {   
                        "boxShadow" : "2px 4px 4px 0px rgba(0, 0, 0, 0.4)",
                        "animation" : "easeBox .2s both .2s"
                    }}
            >
                <div
                className="w-3/6 h-2/18 m-auto top-3 rounded-md relative bg-blue-900/8"
                style={{"boxShadow" : "2px 2px 4px 0px rgba(0, 0, 0, 0.4)"}}
                >
                </div>
            </section>

            <section
                className="w-5/6 mt-6 mx-5 mb-6 items-top grid pb-4 border-gray-400/8 border-1 "
                style={
                    {   
                        "boxShadow" : "2px 4px 4px 0px rgba(0, 0, 0, 0.4)",
                        "animation" : "easeMessage .2s both .2s",
                        "gridTemplateRows" : "auto 1fr"
                    }}
            >


                <div
                className="w-full h-10 top-0 relative bg-blue-900/8"
                style={{"boxShadow" : "2px 2px 4px 0px rgba(0, 0, 0, 0.4)"}}
                >
                </div>

                <div className="relative h-50 top-0 py-2 flex flex-col bg-blue-500">
                    {products ? (products[0].map((values)=>(
                        <span 
                            key={values.title}
                            className="block relative text-center bg-red-500"
                            style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                        >
                         {values.title}
                        </span>
                        
                    ))) : (<span>Cargando...</span>)}
                </div>

            </section>
            </>
        )
    }