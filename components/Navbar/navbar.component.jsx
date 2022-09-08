import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

    const [isHamburger, setHamburger] = useState(0)

    function onClicked(){
        setHamburger(isHamburger === 1 ? 0 : 1)
    }

    return (
        <header className="bg-white  border-b border-gray-300">
        <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <Image src="/logo(Logo)(500 × 200 px)(1).svg" width={120} height={67}/>
                </a>
                </div>
        
                <div className="md:flex md:items-center">
                <nav className="hidden md:block" aria-labelledby="header-navigation">
                    <h2 className="sr-only" id="header-navigation">Header navigation</h2>
        
                    <ul className="flex items-center text-sm gap-6">      
                    <li>
                        <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/"
                        >
                        Home
                        </a>
                    </li>
        
                    <li>
                        <a
                        className="text-gray-500 transition hover:text-gray-500/75 ml-8"
                        href="/story"
                        >
                        Our Story
                        </a>
                    </li>
        
                    <li>
                        <a
                        className="text-gray-500 transition hover:text-gray-500/75 ml-8"
                        href="/"
                        >
                        News
                        </a>
                    </li>

                    <li>
                        <a
                        className="text-gray-500 transition hover:text-gray-500/75 ml-8"
                        href="/"
                        >
                        About Us
                        </a>
                    </li>
                    </ul>
                </nav>
        
                <div className="flex items-center gap-4">

        
                    <div className="block md:hidden">
                    <button onClick={onClicked}
                        className="p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>

        {
            isHamburger ? (
                <div id="px-4 mx-auto sm:px-6 md-hidden">
                <nav className="flex flex-col space-y-1">
                <a
                    href=""
                    className="block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg"
                >
                    General
                </a>
                
                <a
                    href=""
                    className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                    Teams
                </a>
                
                <a
                    href=""
                    className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                    Billing
                </a>
                
                <a
                    href=""
                    className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                    Invoices
                </a>
                
                <a
                    href=""
                    className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                    Account
                </a>
                </nav>
                </div>
            ) : (
                <div></div>
            )

        }
        </div>
      </header>
      
    );
};

export default Navbar;