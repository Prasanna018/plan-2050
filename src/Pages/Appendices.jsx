import React from 'react'
import { motion } from 'motion/react'


const pdfLinks = [
    { id: 1, name: "Appendix A: Project and Policy recommendations", link: "https://www.greatermadisonmpo.org/planning/documents/Appendix-A-ConnectRTP-web.pdf" },
    { id: 2, name: "Appendix B: System Performance Report", link: "https://www.greatermadisonmpo.org/planning/documents/appendixb_systemperformancereport.pdf" },
    { id: 3, name: "Appendix C: Environmental Justice Analysis", link: "https://www.greatermadisonmpo.org/planning/documents/Appendix-C-RTP-EJ.pdf" },
    { id: 4, name: "Appendix D: Environmental Assessment", link: "https://www.greatermadisonmpo.org/planning/documents/Appendix-D-RTP-EnvironmentalAssessment.pdf" }
    ,
    {
        id: 5, name: "Appendix E: Public Participation and Response to Comments", link: "https://www.greatermadisonmpo.org/planning/documents/AppendixE_PIRevised.pdf"
    },
    { id: 6, name: "Appendix F: Congestion Management Process", link: "https://www.greatermadisonmpo.org/planning/documents/Appendix-F-RTP-CMP.pdf" }
    ,
    { id: 7, name: "Appendix G: Pedestrian Facilities Toolbox", link: "https://www.greatermadisonmpo.org/planning/documents/Appendix-F-RTP-CMP.pdf" }
]



function Appendices() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="lg:h-[80vh] h-[90vh] flex justify-center items-center sm:justify-center w-screen sm:w-[100vw] space-x-2 p-1 scroll-smooth overflow-y-auto sm:h-fit sm:bg-black sm:items-center lg:justify-center
            md:w-screen md:h-[70vh]
            "
        >
            <div className='flex justify-center items-center text-center w-full flex-col space-y-4'>
                {
                    pdfLinks.map((pdf) => (
                        (
                            <a
                                className='underline sm:text-xl text-sm text-white font-semibold italic hover:text-blue-700'
                                target='_blank'
                                key={pdf.id}
                                href={pdf.link}
                            >
                                {pdf.name}

                            </a>
                        )
                    ))
                }

            </div>


        </motion.div>
    )
}

export default Appendices
