

   export function Orders(){
        return(
            <>
            <section
                className="min-w-4/6 h-5/8 mt-5 ml-5 overflow-hidden border-gray-400/8 border-1 rounded-md"
                style={
                    {   
                        "boxShadow" : "2px 4px 4px 0px rgba(0, 0, 0, 0.4)",
                        "animation" : "easeBox .2s both .2s"
                    }}
            >
                <div
                className="w-35/36 h-2/18 m-auto top-3 rounded-md relative bg-blue-900/8"
                style={{"boxShadow" : "2px 2px 4px 0px rgba(0, 0, 0, 0.4)"}}
                >
                </div>
            </section>

            <section
                className="w-5/6 h-3/10 mt-6 ml-5 mr-5 overflow-hidden border-gray-400/8 border-1 "
                style={
                    {   
                        "boxShadow" : "2px 4px 4px 0px rgba(0, 0, 0, 0.4)",
                        "animation" : "easeMessage .2s both .2s"
                    }}
            >
                <div
                className="w-full h-2/8 m-auto relative bg-blue-900/8"
                style={{"boxShadow" : "2px 2px 4px 0px rgba(0, 0, 0, 0.4)"}}
                >
                </div>
            </section>
            </>
        )
    }