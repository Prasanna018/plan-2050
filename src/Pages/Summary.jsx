import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
    { id: '1', text: ' The Regional Transportation Plan (PLAN 2050)' },
    { id: '2', text: 'MPO Mission and Vision' },
    { id: '3', text: 'Goals and Objectives' },
    { id: '4', text: 'How will the Region Grow?' },
    { id: '5', text: 'The Future of our Transportation System' },
    { id: '6', text: 'Investing in the Region’s Transportation Future' }
];





function Summary() {
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
            root: null, // Use the viewport as the root
            rootMargin: '0px 0px -40% 0px', // Adjust to consider element visibility in the viewport
            threshold: 0.01, // Trigger when 20% of the section is visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setActiveSection(sectionId === 'image-section' ? null : sectionId);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = document.querySelectorAll('.scroll-section');
        sections.forEach((section) => observer.observe(section));

        // Initial check: Highlight the first visible section on load
        const firstVisibleSection = Array.from(sections).find((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        });
        if (firstVisibleSection) {
            setActiveSection(firstVisibleSection.id === 'image-section' ? null : firstVisibleSection.id);
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
            className="lg:h-[80vh] h-[90vh] flex w-full sm:w-[100vw] space-x-2 p-1 scroll-smooth overflow-y-auto sm:h-fit bg-[#e7eaeb]"
        >



            {/* Left Section */}
            <div className="hidden md:w-[50vw] lg:w-[50vw] lg:flex lg:flex-col space-y-8 lg:justify-center p-2
            ">
                <div className=' flex flex-col space-y-10 h-fit px-2 py-6 rounded-lg'>


                    {links.map((link, index) => (
                        <div


                            key={index}>
                            <a
                                className={`cursor-pointer scroll-smooth text-white bg-[#008CBA] rounded-xl p-2 ${activeSection === link.id ? 'text-blue-900 font-bold' : ''}`}
                                onClick={() => handleSmoothScroll(link.id)}
                            >
                                {link.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>


            {/* Right Section */}
            <div className="w-full relative sm:w-full   sm:h-fit  sm:pt-0 overflow-y-auto no-scrollbar md:w-full lg:h-full lg:flex lg:justify-center">
                <div className='lg:w-[35vw] w-full bg-black p-2 h-fit space-y-4'>


                    {/* Image Section */}


                    {/* Sections */}
                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="1">
                        <p>

                            A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.
                        </p>




                    </div>


                    <div className="flex flex-col justify-center w-full items-center  scroll-section space-y-4 sm:text-xl " id="2">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>

                    </div>

                    <div className="flex flex-col sm:text-xl justify-center w-full items-center  scroll-section space-y-4 " id="3">
                        <p>
                            A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.
                        </p>



                    </div>

                    <div className="flex flex-col sm:text-xl justify-center w-full items-center  scroll-section space-y-6 " id="4">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>

                    </div>

                    <div className="flex flex-col sm:text-xl justify-center w-full items-center  scroll-section space-y-6 " id="5">
                        <p>A Metropolitan Planning Organization (MPO) is the policy board of an organization
                            created and designated to carry out the metropolitan transportation planning process.
                            MPOs are required by federal law to represent localities in all urbanized areas (UZAs) with
                            populations over 50,000, as determined by the U.S. Census. MPOs are designated by
                            agreement between the governor and local governments that together represent at
                            least 75 percent of the affected population (including the largest incorporated city,
                            based on population) or in accordance with procedures established by applicable state
                            or local law.</p>



                    </div>

                    <div className="flex flex-col sm:text-xl justify-center w-full items-center  scroll-section space-y-6 " id="6">

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
    );
}

export default Summary;
