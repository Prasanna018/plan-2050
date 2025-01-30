import React, { useState } from 'react';
import { motion } from 'motion/react';

const pdfLinks = [
    { id: 1, name: "Appendix A: Project and Policy recommendations", link: "https://craterpdc.org/DocumentLibrary/Transportation/Plan2045Documents/06272022_PLAN2045_ApprovedDocument.pdf" },
    { id: 2, name: "Appendix B: System Performance Report", link: "https://craterpdc.org/DocumentLibrary/Transportation/Plan2045Documents/06272022_PLAN2045_ApprovedDocument.pdf" },
    { id: 3, name: "Appendix C: Environmental Justice Analysis", link: "https://craterpdc.org/DocumentLibrary/Transportation/Plan2045Documents/06272022_PLAN2045_ApprovedDocument.pdf" },
    { id: 4, name: "Appendix D: Environmental Assessment", link: "https://craterpdc.org/DocumentLibrary/Transportation/Plan2045Documents/06272022_PLAN2045_ApprovedDocument.pdf" },
    { id: 5, name: "Appendix E: Public Participation and Response to Comments", link: "https://craterpdc.org/DocumentLibrary/Transportation/Plan2045Documents/06272022_PLAN2045_ApprovedDocument.pdf" },
    { id: 6, name: "Appendix F: Congestion Management Process", link: "https://craterpdc.org/DocumentLibrary/Transportation/Plan2045Documents/06272022_PLAN2045_ApprovedDocument.pdf" },
    { id: 7, name: "Appendix G: Pedestrian Facilities Toolbox", link: "https://craterpdc.org/DocumentLibrary/Transportation/Plan2045Documents/06272022_PLAN2045_ApprovedDocument.pdf" }
];

function Appendices() {
    const [clickedLink, setClickedLink] = useState(null);

    const handleLinkClick = (id) => {
        setClickedLink(id);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="lg:h-[80vh] h-[90vh] flex sm:justify-center w-screen sm:w-[100vw] space-x-2 p-1 scroll-smooth overflow-y-auto sm:h-fit sm:items-center bg-[#e7eaeb] lg:justify-start lg:items-start
            md:w-screen md:h-[70vh] lg:p-5"
        >

            <div className="flex justify-center border-2 lg:p-8 w-fit bg-gray-500 rounded-md items-start lg:pl-5 text-center flex-col space-y-4">
                {pdfLinks.map((pdf) => (
                    <a
                        className={`underline sm:text-xl text-sm text-white font-semibold italic hover:text-pink-600 hover:duration-300 ${clickedLink === pdf.id ? 'text-pink-500' : ""}`}
                        target="_blank"
                        key={pdf.id}
                        href={pdf.link}
                        rel="noopener noreferrer"
                        onClick={() => handleLinkClick(pdf.id)}
                    >
                        {pdf.name}
                    </a>
                ))}
            </div>

        </motion.div>
    );
}

export default Appendices;
