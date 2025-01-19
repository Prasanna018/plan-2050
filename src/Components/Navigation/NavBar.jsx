import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import Tabs from './Tabs';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { tabs } from '../../Constants/Tabs';

import { FaExternalLinkAlt } from "react-icons/fa";

const menuVariants = {
    open: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    closed: {
        x: "-100%",
        opacity: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
    },
};

function NavBar() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const [isOpen, setOpen] = useState(false)

    const handleHambergur = () => {
        setOpen(!isOpen)
    }

    const [selected, setSelected] = useState("Summary")


    return (

        < div className='fixed top-0 left-0 w-full space-y-3 z-50 bg-[#283339] pb-1 '>
            <div className=' flex w-full items-center space-x-1 justify-center sm:flex  sm:justify-between sm:items-center sm:p-4 '>
                {/* left side of navigation */}

                <div className='flex justify-evenly w-full items-center p-2 sm:justify-between'>
                    <div className='lg:hidden'
                        onClick={handleHambergur}
                    >
                        {
                            !isOpen ? <GiHamburgerMenu size={22}></GiHamburgerMenu> :
                                (<IoCloseSharp size={26}></IoCloseSharp>)

                        }

                    </div>
                    {

                        isOpen && (

                            <motion.div

                                initial="closed"
                                animate={isOpen ? "open" : "closed"}
                                variants={menuVariants}
                                style={{
                                    position: "fixed",
                                    top: 30,
                                    left: 0,

                                    height: "100%",


                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "20px",
                                }}


                                className='z-100 h-screen w-full flex justify-center space-y-5 text-xl items-center flex-col 
                               bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 text-white font-bold '>
                                {tabs.map((tab) => {
                                    return <Link
                                        key={tab.id}
                                        to={tab.to}
                                        onClick={() => {
                                            setSelected(tab.tabName)
                                            setOpen(false)
                                        }}

                                        className={`cursor-pointer ${selected === tab.tabName ? "underline" : ""}`}>
                                        {tab.tabName}
                                    </Link>
                                })}


                            </motion.div>
                        )

                    }

                    <div className='flex flex-col items-center justify-center'>
                        <Link className='text-white font-bold sm:text-2xl text-[16px] text-center flex italic'
                            to='/'
                        >
                            PLAN 2050


                        </Link>




                    </div>


                </div>

                {/* right side of navigation */}
                <div className='hidden sm:hidden md:flex  space-x-2'>

                    <div className='text-center '>
                        <a
                            href='https://www.greatermadisonmpo.org/planning/documents/RTP_2050_Full_Report_with_Appendix_Final73117.pdf'
                            target='_blank'

                            className='text-white font-bold underline'>Regional Transportation Plan 2050 Full Report with Full Appendix </a>
                    </div>
                    <div className='sm:flex justify-center items-center space-x-2'>
                        <a className='text-white  cursor-pointer '><ImFacebook2 size={22}></ImFacebook2></a>
                        <a className='text-white cursor-pointer'><FaTwitter size={26}></FaTwitter></a>

                    </div>

                    {/* <div>
                        <img src='google.com' alt='img'></img>

                    </div> */}

                </div>


                {/* pop up code */}
                <div
                    className="w-8 flex flex-col md:hidden justify-between h-6 cursor-pointer"
                    onClick={togglePopup}
                >
                    <FaExternalLinkAlt size={22}></FaExternalLinkAlt>
                </div>

                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg p-6 shadow-lg text-center w-80">
                            <div className='flex flex-col justify-center items-center space-y-4 p-4'>
                                <a
                                    href='https://www.greatermadisonmpo.org/planning/documents/RTP_2050_Full_Report_with_Appendix_Final73117.pdf'
                                    target='_blank'

                                    className='text-[#982b3f] font-bold underline'>Regional Transportation Plan 2050 Full Report with Full Appendix </a>
                                <a className='text-[#982b3f]  cursor-pointer'><ImFacebook2 size={22}></ImFacebook2></a>
                                <a className='text-[#982b3f] cursor-pointer'><FaTwitter size={26}></FaTwitter></a>
                            </div>
                            <button
                                className="px-4 py-2  bg-gray-800 text-white rounded hover:bg-gray-600"
                                onClick={togglePopup}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}



            </div>

            <div className=' w-full hidden sm:flex sm:justify-start sm:items-center '>
                <Tabs></Tabs>
            </div>
        </div>
    )
}

export default NavBar
