import { Inter } from '@next/font/google'
import Hero from '@/components/home/Hero'
import PageMetaTags from '@/containers/PageMetaTags'
import CTA from '@/components/common/CallToAction'
import { Fragment } from 'react'
import ServiceOfferings from '@/components/home/ServiceOfferingCards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageMetaTags title="Home" description={"dcubed is a local owned finance and business consultning firm wit h a team of experts who are ready to help achieve your goals.We offer tax and accounting services to individuals and businesses. "} url=""/>
    <div itemScope itemType="https://schema.org/WebSite">
      <meta itemProp="url" content="https://www.dcubed.biz/"/>
      <meta itemProp="name" content="dcubed"/>
    </div>
        <Hero />
        <CTA showHeading={true} 
             heading="About Us" 
             body={<Fragment> We are <span className="font-bold text-l text-accent">dcubed</span>, a team of passionate  business experts who are ready to help you achieve your goals.  Our mission is to provide business services to the next generation of entrepreneurs!</Fragment>}  
             showImage={false}
             link="/about-us"
             linkTitle={"Discover more"}>

        </CTA>
        <ServiceOfferings/>
        <CTA
        showHeading={true} 
        heading="Contact Us" 
        body={<Fragment>We're here to help you achieve your goals. Don't hesitate to reach out! </Fragment>}  
        showImage={false}
        link="/contact-us"
        linkTitle={"Contact Us"}>
          
        </CTA>
    </>
  )
}
