import Link from "next/link"
import FeatureImageContainer from "./FeatureImageContainer"

function FeatureSection({title, description, leftText, imageUrl, alt, showHeading, heading, showCTAButton, ctaButtonText}){
    return(
        <>
        {showHeading && <h2 className="text-3xl mt-12 text-center font-bold">{heading}</h2>}
        <div className={`grid place-items-center w-full ${leftText ? "" : ""}`}>
            <div className="max-w-6xl px-4 py-12 content-center justify-center">
                <div className="grid  md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        !leftText && <FeatureImageContainer imageUrl={imageUrl} alt={alt}/>
                    }
                    
                    <div className="text-center py-24">
                        <h2 className="text-2xl  text-center leading-10 font-bold"> {title}</h2>
                        <p> 
                          {description}    
                        </p>
                        {showCTAButton && <Link href="/start-designing"><button className="btn btn-primary mt-8 px-8 normal-case"> {ctaButtonText} </button></Link>}
                    </div>

                    {
                        leftText && <FeatureImageContainer alt={alt} imageUrl={imageUrl}/>
                    }
            </div>
            </div>
        </div>
        </>
    )
}

export default FeatureSection;