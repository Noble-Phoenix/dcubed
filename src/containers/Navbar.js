import Link from 'next/link'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import Navlinks from './Navlinks'
import { themeChange } from 'theme-change'
import { useEffect, useState } from 'react'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'

function Navbar() {

    const [currentTheme, setCurrentTheme] = useState(null)

    useEffect(() => {
        themeChange(false)
        console.log(currentTheme)
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                localStorage.setItem('theme', "dark");
                document.getElementById("themeToggle").checked=true;
                setCurrentTheme("dark")
            } else {
                localStorage.setItem('theme', "light");
                setCurrentTheme("light")
            }
        }
        //👆 false parameter is required for react project
    }, [])

    return (
        <div className="w-full flex justify-center  shadow-lg  ">
            <div className="navbar py-2 bg-base-100 max-w-6xl">
                <div className="navbar-start ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <Bars3Icon className="h-5 inline-block w-5" />
                        </label>
                    </div>


                    <div className="md:flex-1 flex-none px-2 mx-2">
                        <Link href="/">
                            <span className='font-bold text-xl'>
                                <img className="mask inline-block mr-2 w-12" src="/296_Cube.png" /> dcubed
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="px-1 menu menu-horizontal custom-menu">
                        <Navlinks />
                    </ul>

                    <label className="flex cursor-pointer gap-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg> */}
                        <SunIcon className={"fill-current w-5 h-5 "} />
                        <input id="themeToggle" type="checkbox" className="toggle theme-controller" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" />
                        <MoonIcon className={"fill-current w-5 h-5 "} />
                    </label>
                </div>

            </div>
        </div>
    )
}

export default Navbar