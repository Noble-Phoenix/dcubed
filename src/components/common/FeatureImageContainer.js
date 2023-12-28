import { useState } from "react"
import ShareIcon  from '@heroicons/react/24/outline/ShareIcon'


function FeatureImageContainer({imageUrl, alt}){

    const [toggleActive, setToogleActive] = useState(true)

    const onChangeHandler = () => {

    }
    
    return(
        <div className="mt-6 ">
            <img src={imageUrl} alt={alt} className="h-5/6 object-contain w-full rounded-xl"/>
        </div>
    )
    
}

export default FeatureImageContainer