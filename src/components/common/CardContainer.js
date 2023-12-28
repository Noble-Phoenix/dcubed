

function CardContainer({ heading, data }) {
    return (
        <>
            <div className="grid place-items-center w-full ">
                <div className="max-w-6xl w-full py-24 px-4 content-center justify-center">
                    <h2 className="text-3xl  text-center font-bold">{heading} </h2>
                    <div className="grid mt-24 md:grid-cols-3 grid-cols-1 gap-8">
                        {
                            data.map((i, k) => {
                                return (
                                    <div key={k} className="card w-full bg-gray-400 shadow-xl hover:shadow-2xl">
                                        <div className="grid -mt-4 place-items-center">
                                            <div className="w-8 h-8  rounded-full  bg-accent text-slate-100 flex font-bold justify-center items-center">
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className="card-body  items-center text-center">
                                            <p className='text-secondary'>{i.icon}</p>
                                            <p className='mt-2 text-xl font-bold text-black '> {i.title}</p>
                                            <p className='mt-2 text-black'> {i.description}</p>
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

export default CardContainer;