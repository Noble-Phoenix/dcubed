import Link from "next/link"
import FeatureImageContainer from "./FeatureImageContainer"


function CTA({heading, body, showHeading, link, linkTitle, showImage, imageurl}){
    return(
        <>
             <div className="grid place-items-center  w-full ">
                <div className="max-w-6xl py-24 px-4 content-center text-center justify-center">
                    {showHeading && <h2 className="text-3xl  text-center font-bold"> {heading} </h2> }
                    
                    <p className="mt-8 text-l">
                        {body}
                    </p>
                    {showImage && 
                        <FeatureImageContainer imageUrl={imageurl} ></FeatureImageContainer>
                    }

                    <Link href={link}><button className="btn mt-12 btn-primary inline-block px-12 normal-case"> {linkTitle}  </button></Link>
                </div>
        </div>
        </>
    )
}

export default CTA