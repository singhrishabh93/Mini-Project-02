import React from "react"
import Logo from "./img/logo.png"   //logo initialized
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md"; //cart logo initilized
const Header = () => {
    return(
        <header className="fixed z-50 w-screen  p-6 px-16">
            {/* For Desktop and tablet for medium and large device it should be flex for small device hidden*/}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo"></img> {/*logo size w-8 */}
                    <p className="text-headingColor text-xl font-bold"> City</p> {/*logo text*/}
                </div>
                <div className="flex items-center gap-8">
                <ul className="flex items-center gap-8">
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                </ul>

                <div className="relative flex items-center justify-center">
                    <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer"/> {/*cart icon text color and size*/}
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center"> {/*cart amount items amount*/}
                        <p className="text-sm text-white font-semibold">2</p> 
                    </div>
                </div>
                </div>
            </div>
            {/* for mobile for small device flexible and for medium device it should be hidden*/}
            <div className="flex md:hidden w-full h-full"></div>
        </header>
    )
}

export default Header
