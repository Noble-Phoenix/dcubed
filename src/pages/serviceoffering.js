
import FeatureSection from "@/components/common/FeatureSection";
import InnerPageContainer from "@/components/common/InnerPageContainer";
import Hero from "@/components/services/Hero";
import PageMetaTags from "@/containers/PageMetaTags";
import pageContent from "../data/serviceOfferDetails.json"


const data = pageContent;
export default function Page() {
    return (
        <>   
        <PageMetaTags title="Service Offerings" description={"dcubed offers a variety of services for individuals, and new or established businesses. These include tax preperation, bookkeeping, accounting services, payroll processing and new business creations. Please feel free to contact us to shcedule an intial consultation."} url="/services"/>
        <Hero></Hero>
        <InnerPageContainer title="">
            {
                    data.pageContent.map((i, k) => {
                        return(
                            <div key={k}>
                                <FeatureSection 
                                 title = {i.title}
                                 description={i.description + i.description2}
                                 leftText = {i.isLeft}
                                 showHeading={i.showHeading}
                                 showCTAButton={i.showCTAButton}
                                 imageUrl = {i.imageUrl}
                                 alt = {i.altText}
                                 />
                            </div>
                        )
                    })
                }
  
        </InnerPageContainer>
      
        </>
    )
  }


