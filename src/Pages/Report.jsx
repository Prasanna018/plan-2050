import React from 'react'

function Report() {
    return (
        <div className='w-screen lg:h-[80vh] h-[90vh] sm:h-[60vh] flex justify-center items-center lg:p-2 p-4'>

            <div className='border bg-gray-600 p-6 lg:h-fit lg:w-2/3 rounded-lg shadow-lg flex   flex-col items-center'>
                <span className='text-center lg:p-2 text-white font-bold sm:text-xl lg:text-2xl'>Federal law requires Metropolitan Transportation Plans (MTPs) for urban areas over 50,000 in population as a condition for spending federal highway and transit funding.  MTPs must:	</span>
                <br></br>

                <p className='md:p-4 p-2'>1. Forecast for demand for transportation facilities and services for 20 or more years
                    <br></br>
                    2. Identify policies, strategies, and projects that are recommended for the future
                    <br></br>
                    3.  Include both short-range and long-range strategies and actions that lead to the development of an integrated multi-modal transportation system
                    <br></br>
                    4. Contain reasonable cost estimates for identified capital investments and operations and maintenance
                    <br></br>
                    5. Be updated every five years
                    <br></br>
                </p>
                <span className='md:p-2 p-1'>Be updated every five years
                    The latest MTP (PLAN2045) was adopted in June 2022, replacing the previous MTPs.</span>

                <div className='text-sm'>


                    <p className='text-sm'>
                        PLAN2045 was developed in coordination with the,

                        <a href='https://www.capitalarearpc.org/community-regional-development/regional-development-plan-update/' target='_blank'
                            className='text-blue-300 underline font-semibold'
                        >
                            Capital Area Regional Planning Commission’s 2050 Regional Development Framework
                        </a>
                        , which serves as the region’s advisory land use guide. The Framework draws on public priorities, local government input, and growth projections to establish goals, objectives, and strategies for accommodating future growth in the Dane County region.
                        The adopted plan can be downloaded ,

                        <a href='../../public/report_pdf.pdf' target='_blank' className=' font-semibold underline'>

                            here
                        </a>

                    </p>
                </div>

            </div>


        </div >
    )
}

export default Report
