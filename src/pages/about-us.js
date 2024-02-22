import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
  return (
    <InnerPageContainer title="About Us">
      <PageMetaTags title="About Us" description={"dcubed is a team of passionate  business experts who are ready to help you achieve your goals.  Our mission is to provide business services to the next generation of entrepreneurs!"} url="/about-us" />
      <p className="mt-8">
        We are <span className="font-bold text-l text-accent">dcubed</span>, a team of passionate  business experts who are ready to help you achieve your goals.  Our mission is to provide business services to the next generation of entrepreneurs!
      </p>
      <h3 className="mt-8 font-bold text-xl">Our Story</h3>
      <p className="mt-2">
        We started dcubed with a vision of providing honest, candid, and reliable financial services and business solutions to entrepreneurs, start-ups, and established businesses. We have over 15 years of combined experience in business consulting, and we have the skills and the network to offer you holistic solutions for your  business challenges.
      </p>
      <h3 className="mt-8 font-bold text-xl">What Sets Us Apart</h3>
      <p className="mt-2">
        We are more than just a service provider, we are your partner in success. We value long-term relationships that are built on trust and mutual benefit. We will always give you honest and candid advice that helps you achieve your goals. We also have access to a network of trusted professionals who can offer you additional support and expertise. We are enthusiastic about working with you and helping you grow your business.
      </p>
    </InnerPageContainer>
  )
}
