import Link from "next/link"


function Footer() {
  return (
    <div>
      <div className="bg-slate-50 flex justify-center">
        <footer className="footer pt-10 pb-16 px-4 max-w-6xl  text-base-content">
          <div>
            <img className="mask w-24  " src="/512Export.png" />
          </div>
          <div>
            <span className="footer-title">Information</span>
            <Link href="/about-us" className="link link-hover">About Us</Link>
            <Link href="/faqs" className="link link-hover">FAQs</Link>
          </div>
        </footer>
      </div>
      <div className="p-4 flex justify-center bg-primary">
        <div className="max-w-5xl text-slate-50">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer