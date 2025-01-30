import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'


const links = [
    { id: '1', text: 'Purpose of the Plan' },
    { id: '2', text: 'What is the Regional Transportation Plan?' },
    { id: '3', text: 'How to Navigate the Plan' },
    { id: '4', text: 'Plan Goals' },
    { id: '5', text: 'The Role of the Tri-Cities Area MPO' },
    { id: '6', text: 'MPO Organizational Structure' },
    { id: '7', text: "Federal Regional Transportation Planning Requirements" },
    { id: '8', text: "National Transportation Planning Factors" },
    { id: '9', text: "The Planning Process" },
    { id: '10', text: "Federal Performance Measures" },
    { id: '11', text: "Relationship to Other Plans, Reports, and Studies" },
    { id: '12', text: "What We Heard: Stakeholder Involvement and Public Outreach" }
];





function Introduction() {
    const [activeSection, setActiveSection] = useState('');

    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -31% 0px', // Adjusted to detect section earlier
            threshold: 0.2, // Increased sensitivity
        };

        const observerCallback = (entries) => {
            let lastVisibleSection = null;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    lastVisibleSection = entry.target.id;
                }
            });

            if (lastVisibleSection) {
                setActiveSection(lastVisibleSection);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('.scroll-section');

        sections.forEach((section) => observer.observe(section));

        // Handle initial highlight
        const firstVisibleSection = Array.from(sections).find((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        });

        if (firstVisibleSection) {
            setActiveSection(firstVisibleSection.id);
        }

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="lg:h-[80vh] h-[90vh] flex w-full sm:w-[100vw] space-x-2 p-1 scroll-smooth overflow-y-auto sm:h-fit overflow-x-hidden bg-[#e7eaeb]"
        >


            {/* left side */}
            <div className="hidden md:w-[50vw] sm:w-[40vw] sm:items-center sm:justify-center sm:flex-col lg:flex  text-blue-500 lg:space-y-4 text-center  lg:text-md lg:items-start lg:pl-2">
                <div className=' flex flex-col justify-start items-start space-y-5 p-2 rounded-lg'>



                    {links.map((link, index) => (
                        <div key={index}>
                            <a
                                className={`cursor-pointer scroll-smooth p-1 rounded-xl bg-[#008CBA] text-white ${activeSection === link.id ? 'text-blue-900 font-bold' : ''}`}
                                onClick={() => handleSmoothScroll(link.id)}
                            >
                                {link.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* right side */}
            <div className="w-full relative sm:w-full sm:h-fit pt-32 sm:pt-0 overflow-y-auto no-scrollbar md:w-full lg:h-full lg:flex lg:justify-center  ">

                <div className='lg:w-[35vw] w-full bg-black h-fit p-2 space-y-4'>



                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="1">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="2">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="3">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="4">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="5">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="6">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="7">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="8">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="9">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="10">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="11">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="12">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>
                    </div>













                </div>
            </div>



        </motion.div >
    )
}

export default Introduction
