import Link from "next/link"


function Hero() {
    return (
        <div className="hero py-12 bg-gradient-to-t from-secondary to-blue-100">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10"> Service Offerings  </h1>
                    <p className="py-2 text-xl text-slate-100 mt-4 pr-12">
                        <span className="font-bold text-2xl text-accent"> dcubed </span> provides a wide range of services to individuals and businesses in a variety of industries. At <span className="font-bold text-2xl text-accent"> dcubed </span>, we strive to meet each client's specific needs in planning for the future and achieving their goals in an ever-changing financial and regulatory environment.                </p>
                    <Link href="/start-designing"><button className="btn text-lg mt-16 px-12 btn-primary normal-case">Schedule a Consultation</button></Link>
                </div>
            </div>
        </div>
    )
}





export default Hero