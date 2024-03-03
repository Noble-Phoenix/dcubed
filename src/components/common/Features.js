import ReactHtmlParser from "react-html-parser";

function Features({heading, data}){
    return(
        <>
             <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">{heading}</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    data.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
                                <div className="card-body mt-4 items-center text-center">
                                <p className='text-accent'>{i.icon}</p>
                                    <h2 className="card-title">{ReactHtmlParser(i.title)}</h2>
                                    <p>{i.description}</p>
                                </div>
                                </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
        </>
    )
}

export default Features