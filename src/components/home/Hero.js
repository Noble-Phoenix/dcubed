import Link from "next/link"


function Hero(){
    return(
        <div className="hero py-12 bg-gradient-to-t from-secondary to-blue-300">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
                {/* <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" /> */}
                <img src="/512_JustCube.png" className="max-w-sm  h-80 object-cover rounded-lg" />
                <div>
                <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10"> Finance made easy for the next generation of entrepreneurs  </h1>
                <p className="py-2 text-xl text-slate-100 mt-4 pr-12"> <span className="font-bold text-2xl text-accent"> dcubed </span> has the skills, knowledge, and affordability to meet your needs. Whether you are a business owner, an executive, or an independent professional, we have a range of services that can help you achieve your goals. </p>
                <Link href="/contact-us"><button className="btn text-lg mt-16 px-12 btn-primary normal-case">Schedule a Consultation</button></Link>
                </div>
            </div>
        </div>
    )    
}

export default Hero