import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import summary_bg from '../assets/Summary_photos/summary_bg.png';
import night_pic from '../assets/Summary_photos/night_pic.png';
import Map_EX_a_Planning_Boundaries_of_the_Greater_Madison_MPO
    from '../assets/Summary_photos/Map EX-a Planning Boundaries of the Greater Madison MPO .png'
import link3 from '../assets/Summary_photos/link3.png'
import Dane_County_Projected_Household_Growth from '../assets/Summary_photos/Dane County Projected Household Growth.png'
import Figure_EX_b_Dane_County_Projected_Employment_Growth from '../assets/Summary_photos/Figure EX-b Dane County Projected Employment Growth .png'

import Map_EX_b_Household_Change_2016_2050 from '../assets/Summary_photos/Map EX-b Household Change, 2016-2050.png'

import Map_EX_c_Employment_Change_2016_2050 from '../assets/Summary_photos/Map EX-c Employment Change, 2016-2050.png'
import key_recommendations from '../assets/Summary_photos/key_recommendations.png'
import link5 from '../assets/Summary_photos/link5.png'

import Map_EX_d_Major_Roadway_and_High_Capacity_Transit_Projects_and_Studies from '../assets/Summary_photos/Map EX-d Major Roadway and High Capacity Transit Projects and Studies .png'

import transport_bus from '../assets/Summary_photos/transport bus.png'

import Map_EX_e_Future_Planned_Regional_Transit_Service_Network from '../assets/Summary_photos/Map EX-e Future Planned Regional Transit Service Network .png'

import Map_EX_f_Planned_Future_Bicycle_Network_Functional_Class
    from '../assets/Summary_photos/Map EX-f Planned Future Bicycle Network Functional Class.png'
import investing_regional from '../assets/Summary_photos/investing_reginoal.png'


const links = [
    { id: '1', text: ' Connect Greater Madison 2050 Regional Transportation Plan' },
    { id: '2', text: 'Greater Madison MPO Mission and Vision' },
    { id: '3', text: 'Greater Madison 2050 Regional Transportation Plan Goals' },
    { id: '4', text: 'How Will the Region Grow?' },
    { id: '5', text: 'Our Transportation System Tomorrow: 2050' },
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


    // useeffect for the scrolling watching 
    useEffect(() => {
        const observerOptions = {
            root: null, // Use the viewport as the root
            threshold: [0.1, 0.5, 0.9], // Trigger at different points of visibility
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
                <div className=' flex flex-col space-y-6 h-fit px-2 py-6 rounded-lg'>


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
            <div className="w-full relative sm:w-full  sm:h-fit pt-32 sm:pt-0 overflow-y-auto no-scrollbar md:w-full lg:h-full lg:flex lg:justify-center">
                <div className='lg:w-[35vw] w-full bg-black p-4 h-fit'>


                    {/* Image Section */}
                    <div id="image-section" className="object-cover  py-4 scroll-section">
                        <img src={summary_bg} alt="Summary Background" />
                    </div>

                    {/* Sections */}
                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="1">


                        <motion.div



                        >
                            <p>
                                The Madison region’s transportation system
                                provides critical connections to commerce,
                                employment, health care, education and
                                recreation, and supports the quick and
                                efcient movement of goods and services.
                                A successfully integrated multi-modal
                                transportation system provides multiple
                                options for commuting, shopping, leisure,
                                and regional travel. Transportation afects
                                the afordability of neighborhoods and
                                communities, as well as the viability of
                                community and economic development.
                                The transportation network also directly
                                infuences quality of life in the region. Safe
                                and efcient regional transportation facilities
                                ensure convenient business and leisure travel,
                                while an integrated, well-connected network
                                makes traveling by all modes convenient and
                                enjoyable. Streets can foster community by
                                acting as community gathering and meeting
                                spaces, and high quality transit and bicycling
                                options are important for employers wanting
                                to attract young, educated, skilled workers.
                                The Connect Greater Madison 2050
                                Regional Transportation Plan (RTP) sets the
                                framework for the future of transportation
                                in the Madison region, identifying how the
                                region intends to invest in the transportation
                                system to accommodate current travel
                                demands and future growth, while setting
                                priorities that balance limited funds. The
                                plan includes strategies to begin addressing
                                important trends such as rapidly evolving
                                transportation technology and the rise of
                                teleworking, as well as strategies to take
                                action on critical issues, including equity and
                                climate change. It articulates how the region
                                intends to build, manage, and operate its
                                multi-modal transportation system to meet
                                important regional economic, transportation,development, and sustainability goals. Finally,
                                the plan ties goals to performance measures
                                and sets targets to track progress.
                                The RTP is a federally required long-range
                                (20+ years) transportation plan that guides
                                federally funded transportation investments. It
                                must be updated every fve years in order for
                                the Madison metropolitan area to be eligible
                                to receive federal funding for transportation
                                projects. The Connect Greater Madison 2050
                                plan update builds upon recent and ongoing
                                MPO, WisDOT, and local government
                                projects, plans, and studies, including an MPO
                                trafc safety study, WisDOT’s Beltline fex lane
                                and U.S. Highway 51 Highway projects, and
                                Metro’s Bus Rapid Transit project and Transit
                                Network Redesign study. Federal rules require
                                the plan to be fnancially constrained.
                                The plan complements and supports the
                                Capital Area Regional Planning Commission’s
                                (CARPC) Regional Development Framework
                                (RDF), including the future growth scenario
                                built using the RDF goals and strategies
                                and local plans. Together with the RDF,
                                Connect Greater Madison 2050 establishes
                                a regional vision for the future, and roadmap
                                to achieving regional transportation and
                                land use goals through strategic, coordinated
                                investments.

                            </p>

                        </motion.div>

                        <img className="object-cover w-full h-full pt-2" src={night_pic} alt="Night Overview" />
                    </div>


                    <div className="flex flex-col justify-center w-full items-center  scroll-section space-y-4 text-center" id="2">
                        <span className="lg:text-xl">MISSION</span>
                        <p>
                            Lead the collaborative planning and funding of a sustainable, equitable transportation
                            system for the greater Madison region.
                        </p>
                        <span className="lg:text-xl">VISION</span>
                        <p>
                            A sustainable, equitable regional transportation system that connects people, places, and
                            opportunities to achieve an exceptional quality of life for all.
                        </p>
                        <span className='lg:text-xl'>THE ROLE OF THE GREATER MADISON MPO</span>
                        <p>

                            The Greater Madison MPO is the federally
                            designated metropolitan planning
                            organization (MPO) responsible for
                            overseeing the transportation planning decision-making process for the Madison
                            Metropolitan Planning Area (Map EX-a).
                            The goal of the MPO’s planning and
                            programming processes is to build regional
                            agreement on transportation investments
                            that balance roadway, public transit, bicycle,
                            pedestrian, and other transportation needs
                            to support regional land use, economic
                            development, and environmental goals.

                        </p>
                        <img className='w-full object-cover' src={Map_EX_a_Planning_Boundaries_of_the_Greater_Madison_MPO}></img>
                    </div>

                    <div className="flex flex-col justify-center w-full items-center  scroll-section space-y-4 text-center" id="3">
                        <img className='object-cover w-full' src={link3}></img>



                    </div>

                    <div className="flex flex-col justify-center w-full items-center  scroll-section space-y-6 text-center" id="4">
                        <div className='lg:flex flex flex-col justify-center items-center lg:justify-center  lg:flex-col'>
                            <p className='lg:text-[20px] '>
                                Demographic changes, commuting patterns,
                                economic shifts, and land use development
                                patterns all infuence the type, location, and
                                amount of demand on transportation facilities
                                and services. It is particularly important
                                to plan for these changes in the greater
                                Madison region—the fastest growing and
                                changing region in the state. The Madison
                                area is outpacing the rest of the state in
                                all key economic indicators, including job
                                creation, business growth,
                                and construction activity.
                                The area’s population is also
                                growing more rapidly than the
                                rest of the state and becoming
                                increasingly diverse.
                            </p>

                            <img src={Dane_County_Projected_Household_Growth}></img>

                        </div>
                        <div>
                            <span className='text-red-400 font-bold text-2xl'>Dane County is expected
                                to grow 35% by 2050,
                                adding nearly 195,000
                                additional people </span>
                        </div>

                        <div className='lg:flex lg:flex-col items-center lg:justify-center  flex flex-col justify-center'>

                            <p className='lg:text-[20px]'>


                                Between 2010 and 2020, while
                                the state population grew
                                just 4%, Dane County grew
                                by 15%—accounting for more
                                than one-third of the state’s
                                total population growth. This
                                rapid population growth is
                                expected to continue over the
                                coming decades, as shown in
                                Figure EX-a. Dane County is

                                expected to gain nearly 100,000 households
                                by 2050, with about two-thirds of those job growth is expected to  in the City of Madison and its inner communities, as shown in Map EX-c. has led to one of the lowest unemployment ring of adjacent suburban communities rates in Wisconsin, and this trend is expected (see Map EX-b).


                            </p>
                            <img src={Figure_EX_b_Dane_County_Projected_Employment_Growth}>
                            </img>

                        </div>
                        <div className='lg:flex items-center lg:justify-between  flex flex-col justify-center'>
                            <img className='w-full object-cover' src={Map_EX_b_Household_Change_2016_2050}></img>

                            <div>
                                <div className=''>
                                    <span className='text-xl'>EMPLOYMENT AND THE ECONOMY </span>
                                </div>

                                <div className='text-center '>
                                    <p>Dane County’s thriving and diverse economy  has led to one of the lowest unemployment rates in Wisconsin, and this trend is expected to continue in the coming years (see Figure EX-b). Employment in the City of Madison is  expected to grow by more than 80,000 by

                                        2050, with the remainder of Dane County’s
                                        job growth is expected to occur in suburban  communities, as shown in Map EX-c.
                                    </p>
                                </div>
                                <div>
                                    <img className='w-full object-cover' src={Map_EX_c_Employment_Change_2016_2050}></img>
                                </div>

                                <div className=''>
                                    <span className='text-red-400 font-bold text-2xl '>Dane County is expected to add
                                        approximately 140,000 jobs by 2050 </span>
                                </div>
                            </div>




                        </div>





                    </div>

                    <div className="flex flex-col justify-center w-full items-center  scroll-section space-y-6 text-center" id="5">



                        <div className=''>
                            <p>
                                What will our transportation system look like
                                in 2050? What critical issues and drivers of
                                change will shape how our transportation
                                system grows and evolves? How do we
                                leverage transportation to achieve our longterm vision for the region? The way our
                                transportation system will evolve over the next
                                three decades will be shaped by countless
                                public and private decisions at all levels.
                                Connect Greater Madison 2050 includes
                                a detailed analysis of current and future
                                transportation needs in the region, taking
                                into account critical issues that will need to
                                be considered in all levels of planning and
                                decision-making. Connect Greater Madison
                                2050 provides the framework for prioritizing
                                multimodal investments in the transportation
                                system and includes recommendations
                                necessary to meet the region’s mobility needs
                                now and in the future, supporting the region’s
                                vision and goals.


                            </p>


                        </div>
                        <div className='space-y-4'>
                            <span className='lg:text-xl text-orange-700'>
                                CRITICAL ISSUES
                            </span>
                            <p>
                                As the greater Madison region’s
                                transportation system evolves, three critical
                                issues that play an important role in planning
                                and decision-making include equity,

                                climate change, and health. Each is directly
                                afected by the benefts and burdens of the
                                transportation system, and each deeply
                                afects quality of life.
                                Central to local and regional agencies’ ability
                                to act on equity, climate change, and health
                                is the efective coordination of transportation
                                and land use strategies that naturally
                                support these goals. The foundation for this
                                is community design that provides access
                                for all to transportation options, afordable
                                housing, and other basic needs, thereby
                                fostering equitable access to opportunity,
                                wise use of natural resources, and the ability
                                of individuals to live healthy, sustainable lives.
                                Connect Greater Madison 2050 centers these
                                critical issues at the heart of its analysis of
                                needs, recommendations, and identifcation
                                of multimodal investments

                            </p>
                        </div>

                        <div className='space-y-4'>
                            <span className='lg:text-xl text-orange-700'>
                                DRIVERS OF CHANGE
                            </span>
                            <p>
                                Drivers of change are the new technologies
                                and technology-enabled ways of doing
                                things that are changing the way people
                                use the transportation system. Telework,
                                e-commerce, shared mobility, vehicle
                                electrifcation, connected autonomous
                                vehicles, and other recent advancements
                                in intelligent transportation systems (ITS)
                                represent major departures from the 20th
                                century status quo. As they become more
                                prevalent, and increasingly intertwined,
                                their impact on the transportation system
                                will be profound in ways not easy to predict.
                                The region’s transportation system will
                                need to be resilient and adaptable to these evolutionary changes. The MPO will continue
                                to stay up to date on these rapid changes,
                                and will evaluate a range of scenarios using
                                its regional travel forecast model to inform
                                current and future planning eforts, including
                                major regional corridor studies.
                            </p>
                        </div>
                        <div>
                            <img className='w-full object-cover' src={link5}></img>
                        </div>

                        <div className='space-y-4'>
                            <span className='lg:text-xl text-orange-700'>
                                CONNECT GREATER MADISON 2050
                                RECOMMENDATIONS
                            </span>
                            <p>
                                Connect Greater Madison 2050 includes a
                                detailed analysis of the region’s transportation
                                system needs and a series of project and
                                policy recommendations with supporting
                                actions for each mode of transportation,
                                including:
                                <br></br>
                                <div className='text-xl '>

                                    Land use and Transportation Integration
                                    <br></br>
                                    Roadways
                                    <br></br>
                                    Transportation System Management and

                                    Operations (TSMO) and Technology
                                    <br></br>
                                    Public Transit
                                    <br></br>
                                    Specialized Transit
                                    <br></br>
                                    Bicycles
                                    <br></br>
                                    Pedestrians
                                    <br></br>
                                    Travel Demand Management (TDM)
                                    <br></br>
                                    Parking
                                    <br></br>
                                    Inter-Regional Travel
                                    <br></br>
                                    Freight, Air, and Rail
                                    <br></br>
                                </div>
                                Plan recommendations were developed
                                based on analyses of the existing
                                transportation network condition and
                                performance; prior and ongoing
                                transportation planning eforts by the MPO and implementing agencies; travel
                                forecasts accounting for future growth;
                                and input received from stakeholders
                                through public engagement activities. Plan
                                recommendations are largely focused on
                                optimizing the use, capacity, and safety of
                                existing facilities, expanding transportation
                                options, and improving land use and
                                transportation integration.
                                Implementing agencies, including local and
                                county governments as well as WisDOT, are
                                encouraged to consult the recommendations
                                and supporting actions identifed in Connect
                                Greater Madison 2050 when undertaking
                                planning eforts and implementing specifc
                                transportation projects to ensure regional
                                continuity of the transportation system and
                                support regional transportation plan goals.
                                The following are an excerpt of key plan
                                recommendations.
                            </p>
                        </div>

                        <div className='space-y-4'>
                            <span className='lg:text-xl text-orange-700'>Land Use and Transportation
                                Integration </span>

                            <p>
                                Land use and transportation
                                are inextricably linked. The role of
                                transportation is to connect people with
                                opportunities, services, goods, and other
                                resources. In order for transportation
                                policies and investments to be successful in
                                achieving this, they must be coupled with
                                complementary land use plans, policies,
                                and implementing ordinances. Low-density
                                land use patterns increase demand for
                                transportation while reducing the feasibility of
                                transit, biking, and walking. Location-efcient
                                development, that provides dense clusters of development with a variety of land uses
                                in a pedestrian-oriented environment, gives
                                people easier access to key destinations
                                and reduces transportation costs by making
                                alternative travel modes more convenient
                                and economical.
                            </p>
                        </div>

                        <div className='space-y-4'>
                            <span className='lg:text-xl text-orange-700'>
                                Key Recommendations
                            </span>

                            <p className='text-center'>
                                Adopt local land use plans that support
                                RTP goals and policies.
                                <br></br>
                                Provide a mix of housing types with
                                higher densities in areas with multimodal
                                access to jobs and services in order to
                                provide afordable living options in less car
                                dependent neighborhoods.
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <img className='w-full object-cover' src={key_recommendations}>
                            </img>

                        </div>

                        <div className='space-y-6'>
                            <img
                                className='object-cover w-full'
                                src={Map_EX_d_Major_Roadway_and_High_Capacity_Transit_Projects_and_Studies}></img>
                        </div>

                        <div className='space-y-4'>
                            <span className='lg:text-xl text-orange-700'>
                                Roadways
                            </span>
                            <p>
                                Streets and roadways provide
                                mobility for the vast majority of
                                residents in the region, however they
                                travel, but they also make up the majority
                                of our public space, providing areas to
                                walk, play, and socialize with our friends. It
                                is important to preserve this infrastructure
                                and manage it so that it continues to serve
                                our community efectively, making targeted
                                enhancements when appropriate.
                            </p>

                            <span className='lg:text-xl text-orange-700 space-y-4'>
                                Key Recommendations
                            </span>
                            <p>
                                • Preserve and maintain the region’s street
                                and highway system in a manner that
                                minimizes their life cycle cost, maintains
                                safety, and minimizes driver costs while
                                reducing their impact on the environment.
                                <br>
                                </br>
                                • Build a well-connected network of regional
                                roadways to accommodate future growth,
                                efciently distribute trafc to avoid
                                bottlenecks on overburdened routes,
                                and providing multimodal connections
                                between neighborhoods.
                                <br>
                                </br>
                                • Incorporate complete streets and green
                                streets concepts for regional and local
                                roadways.
                                <br>
                                </br>
                                • Expand regional roadway system capacity
                                to address critical bottlenecks and
                                accommodate future planned growth
                                consistent with RTP goals (see Map EX-d).
                                <br></br>
                                • Adopt a Safe System Approach for
                                addressing safety needs on the regional
                                roadway system.
                                <br></br>
                                • Address security and resiliency needs
                                related to the regional roadway system.

                            </p>

                        </div>

                        <div >

                            <img className='object-cover' src={transport_bus}></img>
                        </div>









                    </div>


                    <div className="flex flex-col justify-center w-full items-center  scroll-section space-y-6 text-center" id="6">

                        <div className='space-y-6 '>
                            <img
                                className='object-cover'
                                src={investing_regional}></img>
                        </div>

                    </div>


                    {/* Add more sections as needed */}
                </div>
            </div>
        </motion.div >
    );
}

export default Summary;
