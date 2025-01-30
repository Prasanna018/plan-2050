import React, { useEffect, useState } from "react";
import { motion } from 'motion/react'



const links = [
    { id: '1', text: 'Introduction' },
    { id: '2', text: 'Demographics' },
    { id: '3', text: 'Economy' },
    { id: '4', text: 'Land Use and Development' },
    { id: '5', text: 'Travel Patterns' }

];

function TrendsAndForeCasts() {
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
            className="lg:h-[80vh] h-[90vh] flex w-full bg-[#e7eaeb] sm:w-[100vw] space-x-2 p-1 scroll-smooth overflow-y-auto sm:h-fit "
        >

            {/* left */}
            <div className="hidden md:w-[50vw] sm:w-[40vw] sm:items-center sm:justify-center sm:flex-col lg:flex  text-blue-500 lg:space-y-4 text-center  lg:text-md lg:w-[50vw] lg:pl-2 lg:items-start ">

                <div className=" flex flex-col space-y-10 p-2 rounded-lg">

                    {links.map((link, index) => (
                        <div
                            className="flex"
                            key={index}>

                            <a
                                className={`cursor-pointer scroll-smooth rounded-xl bg-[#008CBA] text-white p-2 ${activeSection === link.id ? 'text-blue-900 font-bold' : ''}`}
                                onClick={() => handleSmoothScroll(link.id)}
                            >
                                {link.text}
                            </a>
                        </div>
                    ))}
                </div>


            </div>




            {/* right */}


            <div className="w-full relative sm:w-full sm:h-fit pt-32 sm:pt-0 overflow-y-auto no-scrollbar md:w-full lg:h-full lg:w-full lg:flex lg:justify-center">

                <div className="lg:w-[35vw] w-full bg-black p-2 h-fit space-y-4">

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


                </div>




            </div>
        </motion.div>
    )
}

export default TrendsAndForeCasts
