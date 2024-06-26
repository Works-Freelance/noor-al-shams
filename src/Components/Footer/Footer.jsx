import React from 'react';
import { Link } from 'react-router-dom';
import { RiInstagramFill, RiFacebookCircleFill, RiYoutubeFill } from "react-icons/ri";

import logo from '../../assets/img/Logo/logo.png'


const Footer = () => {
    return (
        <div>
           <footer className="bg-gray-100">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <Link to="/Noor-Al-Shams/">
                            <div className=' flex items-center '>
                            <img
                                className=" object-cover h-16 w-auto"
                                src={logo}
                                alt=""
                            />
                            <h1 className=' font-bold'>Noor Al Shams</h1>
                            </div>
                        </Link>
                        <div className="flex flex-wrap justify-center mt-6 -mx-4">
                            <Link
                                to="/Noor-Al-Shams/"
                                className="mx-4 text-sm text-gray-800 transition-colors duration-300 hover:text-blue-500 dark:text-gray-800 dark:hover:text-blue-400"
                            >
                                Home
                            </Link>
                            <Link
                                to="/Noor-Al-Shams/about"
                                className="mx-4 text-sm text-gray-800 transition-colors duration-300 hover:text-blue-500 dark:text-gray-800 dark:hover:text-blue-400"
                            >
                                About
                            </Link>
                            <Link
                                to="/Noor-Al-Shams/products"
                                className="mx-4 text-sm text-gray-800 transition-colors duration-300 hover:text-blue-500 dark:text-gray-800 dark:hover:text-blue-400"
                            >
                                Product
                            </Link>
                            <Link
                                to="/Noor-Al-Shams/contact"
                                className="mx-4 text-sm text-gray-800 transition-colors duration-300 hover:text-blue-500 dark:text-gray-800 dark:hover:text-blue-400"
                            >
                                Contact
                            </Link>
                            {/* <Link
                                to="/privacy"
                                className="mx-4 text-sm text-gray-800 transition-colors duration-300 hover:text-blue-500 dark:text-gray-800 dark:hover:text-blue-400"
                            >
                                Privacy
                            </Link> */}
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-gray-800 dark:text-gray-800">
                            © Copyright 2021. All Rights Reserved.
                        </p>
                        <div className="flex -mx-2">
                            <a
                                href='https://www.linkedin.com/in/akashkottil/'
                                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-800 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                <a href=""></a>
                                <RiInstagramFill />

                            </a>
                            <a
                                href='https://www.linkedin.com/in/akashkottil/'
                                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-800 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                <RiFacebookCircleFill/>
                            </a>
                            <a
                                href='https://www.linkedin.com/in/akashkottil/'
                                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-800 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                <RiYoutubeFill/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
