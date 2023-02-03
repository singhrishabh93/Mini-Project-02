import React from "react"
import Logo from "./img/logo.png"   //logo initialized
const Header = () => {
    return(
        <header className="fixed z-50 w-screen  p-6 px-16">
            {/* For Desktop and tablet for medium and large device it should be flex for small device hidden*/}
            <div className="hidden md:flex w-full h-full">
                <div className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo"></img> {/*logo size w-8 */}
                    <p className="text-headingColor text-xl font-bold"> City</p> {/*logo text*/}
                </div>
                <ul className="flex items-center gap-8">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Service</li>
                </ul>
            </div>
            {/* for mobile for small device flexible and for medium device it should be hidden*/}
            <div className="flex md:hidden w-full h-full"></div>
        </header>
    )
}

export default Header