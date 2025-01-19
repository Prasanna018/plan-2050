import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Introduction_bg from '../assets/Introduction_photos/introduction_bg.png'
import Road_vehilcles_city from '../assets/Introduction_photos/Road_Vehicles_city.png'
import green_city_road from '../assets/Introduction_photos/green_city_road.png'

import Map_1_a_Planning_Boundaries_of_the_Greater_Madison_MPO from '../assets/Introduction_photos/Map 1-a Planning Boundaries of the Greater Madison MPO.png'

import mpo_policy_board_struture from '../assets/Introduction_photos/mpo_policy_board_struture.png'

import signal_road from '../assets/Introduction_photos/signal_road.png'
import peoples_on_road from '../assets/Introduction_photos/peoples_on_road.png'
import Figure_1_b_Performance_Based_Planning_and_Programming_Framework from '../assets/Introduction_photos/Figure 1-b Performance-Based Planning and Programming Framework.png'
import bus from '../assets/Introduction_photos/bus.png'

import friends_on_road from '../assets/Introduction_photos/friends_on_road.png'
import parked_vehicles from '../assets/Introduction_photos/parked_vehicles.png'
import two_roads from '../assets/Introduction_photos/two_roads.png'
import interactive_online_map from '../assets/Introduction_photos/screenshot_of_interactive_online_comment_map.png'

const links = [
    { id: '1', text: 'Purpose of the Plan' },
    { id: '2', text: 'What is the Regional Transportation Plan?' },
    { id: '3', text: 'How to Navigate the Plan' },
    { id: '4', text: 'Plan Goals' },
    { id: '5', text: 'The Role of the Greater Madison MPO' },
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
            root: null, // Use the viewport as the root
            rootMargin: '0px 0px -50% 0px', // Adjust to consider element visibility in the viewport
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
            className="lg:h-[80vh] h-[90vh] flex w-full sm:w-[100vw] space-x-2 p-1 scroll-smooth overflow-y-auto sm:h-fit overflow-x-hidden bg-[#e7eaeb]"
        >


            {/* left side */}
            <div className="hidden md:w-[50vw] sm:w-[40vw] sm:items-center sm:justify-center sm:flex-col lg:flex  text-blue-500 lg:space-y-4 text-center  lg:text-md lg:items-start lg:pl-2">
                <div className=' flex flex-col justify-start items-start space-y-4 p-2 rounded-lg'>



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

                <div className='lg:w-[35vw] w-full bg-black h-fit p-4'>



                    <div id="image-section" className="object-cover scroll-section">
                        <img src={Introduction_bg} alt="Summary Background" />
                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="1">
                        <div className='space-y-4 flex justify-center items-center flex-col'>
                            <span className='text-xl text-orange-800'>THE MADISON REGION
                                IS GROWING
                            </span>
                            <p className=''>
                                The Greater Madison Area is growing. From
                                2000-2020 the Dane County population
                                grew by 32% - adding almost 135,000 people.
                                Between 2020 and 2050, the population
                                is forecast to grow by another 178,000 to
                                739,000. By 2050 the county is also expected
                                to add around 96,000 jobs. To accommodate
                                that growth, the region must have an
                                integrated, well-planned transportation
                                network that meets the needs of all who live,
                                work, or play here.
                            </p>
                        </div>
                        <div className='space-y-4 pt-2'>
                            <img src={Road_vehilcles_city}></img>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-xl text-orange-800'>THE TRANSPORTATION SYSTEM IS THE
                                REGION’S BACKBONE </span>

                            <p className=''>
                                The region’s transportation system
                                provides critical connections to commerce,
                                employment, health care, education, and
                                recreation, as well as quick and efcient
                                movement of goods and services. An
                                integrated multi-modal transportation system
                                provides multiple options for commuting,
                                shopping, leisure, and regional travel.
                                Transportation can have an impact on the
                                afordability of
                                neighborhoods and
                                communities and
                                have an impact
                                on the viability
                                of community
                                development. The
                                transportation
                                network also has a
                                direct impact on the
                                quality of life in the
                                region. Safe and
                                efcient regional
                                transportation
                                facilities ensure
                                convenient business
                                and leisure travel.
                                An integrated, wellconnected network
                                makes traveling
                                by all modes convenient and enjoyable. The network can
                                also help to foster community with streets
                                acting as community gathering and meeting
                                spaces. A high quality transportation system
                                with transit and bicycling options is also
                                important for businesses in attracting young,
                                educated, and skilled workers. National
                                surveys have shown this is one of the top
                                criteria of Millennials in choosing where
                                to live. Finally, the transportation system
                                afects the environment both directly and
                                indirectly, including being the second largest
                                source of greenhouse gas emissions in
                                Dane County. The Regional Transportation
                                Plan provides an opportunity to carefully
                                consider how we can leverage transportation
                                investments to achieve our regional goals in
                                all of these areas: community development;
                                the economy; the environment; equity; and
                                quality of life
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-orange-800 text-xl'>
                                THE TRANSPORTATION
                                SYSTEM IS EVOLVING
                            </span>
                            <p className=''>
                                The purpose of the Connect Greater Madison
                                Regional Transportation Plan (RTP) for 2050
                                is to identify how the region intends to invest
                                in the transportation system to accommodate
                                current travel demands and future growth,
                                while setting investment priorities balancing
                                limited funds. The plan will also include
                                strategies to begin to address important
                                trends such as rapidly evolving transportation
                                technology and the rise of teleworking, as well
                                as addressing critical issues, including equity
                                and climate change.
                            </p>

                        </div>


                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center " id="2">
                        <div className='flex flex-col justify-center items-center'>



                            <p className=''>
                                The RTP sets the framework for the future
                                of transportation in the Madison region.
                                The RTP is an integrated, multi-modal plan
                                that articulates how the region intends
                                to build, manage, and operate a multimodal transportation system (including
                                transit, highway, bicycle, pedestrian,
                                and other modes) to meet the region’s
                                economic, transportation, development,
                                and sustainability goals. The RTP defnes
                                the transportation goals for the region and
                                specifes the policies, projects, and strategies
                                that will achieve these
                                goals. Additionally,
                                the plan ties goals to
                                performance measures
                                and sets performance
                                goals to track the region’s
                                progress in meeting plan
                                goals. Further, a board
                                approved and USDOT
                                accepted RTP is required
                                for a metropolitan area
                                to be eligible to receive
                                federal funding for
                                transportation projects.
                                The RTP acts as a
                                transportation investment
                                guide that the MPO, local
                                jurisdictions, and the
                                Wisconsin Department
                                of Transportation use
                                to ensure a unifed regional transportation network. As a “fscally
                                constrained1
                                ” plan, the RTP must demonstrate
                                that the projects listed in the plan can be
                                implemented using committed, available, or
                                reasonably available revenue sources. The
                                RTP must be updated every fve years and
                                provide a plan that covers a minimum of 20
                                years. Finally, the plan will ensure eligibility of
                                projects for federal transportation funding as
                                the plan serves as the framework for guiding
                                federally funded transportation investments.

                            </p>

                            <span>
                                <a
                                    className='text-sm text-blue-500 underline'
                                    target='_blank' href='
 https://www.transit.dot.gov/regulations-and-guidance/
transportation-planning/financial-planning-fiscal-constraint'>regulations-and-guidance</a>

                            </span>
                        </div>
                        <div>  <img
                            className='object-cover '
                            src={green_city_road}></img></div>

                    </div>

                    <div
                        className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center"
                        id="3">
                        <div className="flex justify-center items-center flex-col w-full
                    space-y-4

                    ">
                            <div>How to Navigate the Plan</div>

                            {/* Add overflow-x-auto to make this scrollable horizontally */}
                            <div className="grid grid-cols-2 gap-6 w-full p-2">
                                <div className="flex flex-col justify-between items-center text-center py-4  lg:h-[250px] w-full border space-y-4">
                                    <span className="lg:text-xl">Chapter 1: Introduction</span>
                                    <hr className="border-2 w-full"></hr>
                                    <p className=''>Provides background, plan goals, planning requirements</p>
                                </div>

                                <div className="flex flex-col justify-between items-center text-center py-4 px-6 lg:h-[250px] w-full border space-y-4">
                                    <span className="lg:text-xl">Chapter 2: Trends and
                                        Forecasts</span>
                                    <hr className="border-2 w-full"></hr>
                                    <p>Demographic trends and forecasts,
                                        planned land use development, and
                                        economic and travel trends </p>
                                </div>

                                <div className="flex flex-col justify-between items-center text-center py-4 px-6 lg:h-[250px] w-full border space-y-4">
                                    <span className="lg:text-xl">Chapter 3: Our
                                        Transportation System Today </span>
                                    <hr className="border-2 w-full"></hr>
                                    <p>Inventory and performance of our
                                        existing transportation system </p>
                                </div>

                                <div className="flex flex-col justify-between items-center text-center py-4 lg:h-[250px] w-full border space-y-4">
                                    <span className="lg:text-xl">Chapter 4: Our
                                        Transportation System
                                        Tomorrow </span>
                                    <hr className="border-2 w-full"></hr>
                                    <p>Planned future multimodal
                                        transportation network and
                                        recommendations on how we get
                                        there</p>
                                </div>


                            </div>
                            <div className="flex flex-col w-1/2 justify-between items-center text-center py-4  lg:h-[250px] border space-y-4">
                                <span className="lg:text-xl">Chapter 4: Our
                                    Chapter 5: Financial Analysis  </span>
                                <hr className="border-2 w-full"></hr>
                                <p>How we will fund the future
                                    transportation network </p>
                            </div>


                        </div>
                    </div>

                    <div
                        id="4"
                        className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center pt-4"
                    >
                        <div className='text-center'>
                            <p>
                                In 2015 the MPO teamed up with the Capital Area Regional Planning Commission (CARPC) to conduct the Greater Madison Region Values
                                and Priorities Survey to determine the values and priorities of area residents to ensure that planning decisions speak to and correspond with
                                the desires of the region’s residents. This extensive public engagement process informed the development of a set of goals that represent
                                overarching aspirational statements about desired vision for the region that was established in preceding regional transportation plan, The
                                Regional Transportation Plan 2050: Charting Our Course. A public survey conducted in spring 2021 showed continued support for the existing
                                goals2
                                , which form the foundation for the remainder of this plan.
                            </p>
                        </div>

                        <div className='pt-6  text-center  flex flex-col justify-center items-center'>
                            <span className='text-xl text-yellow-600 '>
                                GOAL 1: LIVABLE COMMUNITIES

                            </span>
                            <p className='lg:px-8 py-4 '>Create connected livable places
                                linked to jobs, services, education,
                                retail, and recreation through a
                                multimodal transportation system that
                                supports compact development patterns,
                                increasing the viability of walking, bicycling,
                                and public transit. </p>
                        </div>

                        <div className='pt-6  text-center  flex flex-col justify-center items-center'>
                            <span className='text-xl text-yellow-600 '>
                                GOAL 2: SAFETY

                            </span>
                            <p className=' py-4 '>Ensure that the transportation
                                system enables all people to get to
                                where they need to go safely with
                                an emphasis on enhanced protection for
                                vulnerable roadway users through use of a
                                safe systems approach, thereby helping to
                                achieve the long-term goal of eliminating
                                fatal and serious trafc injuries.  </p>
                        </div>


                        <div className='pt-6  text-center  flex flex-col justify-center items-center'>
                            <span className='text-xl text-yellow-600 '>
                                GOAL 3: PROSPERITY
                            </span>
                            <p className='lg:px-8 py-4 p-4'>Build and maintain a
                                transportation system that provides
                                people with afordable access to
                                jobs, enables the efcient movement of goods
                                and services within the region and beyond,
                                and supports and attracts diverse residents
                                and businesses, creating a shared prosperity
                                that provides economic opportunities for all.   </p>
                        </div>


                        <div className='pt-6  text-center  flex flex-col justify-center items-center'>
                            <span className='text-xl text-yellow-600 '>
                                GOAL 4: EQUITY
                            </span>
                            <p className=' py-4 '>Provide convenient, afordable
                                transportation options that enable
                                all people, regardless of age,
                                ability, race, ethnicity, or income, to access
                                jobs, services, and other destinations to
                                meet their daily needs; engage traditionally
                                underrepresented groups; and ensure that
                                the benefts of the regional transportation
                                system are fairly distributed, taking into
                                consideration current inequities resulting
                                from past decisions, and that environmental
                                justice populations are not disproportionately
                                impacted.  </p>
                        </div>


                        <div className='pt-6  text-center  flex flex-col justify-center items-center'>
                            <span className='text-xl text-yellow-600 '>
                                GOAL 5: ENVIRONMENTAL
                                SUSTAINABILITY
                            </span>
                            <p className='py-4 '>Minimize transportation-related
                                greenhouse gas emissions that
                                contribute to global climate change; avoid,
                                minimize, and mitigate the environmental
                                impacts of the transportation system on
                                the natural environment and historic and
                                cultural resources; and design and maintain
                                a transportation system that is resilient in the
                                face of climate change.  </p>
                        </div>


                        <div className='pt-6  text-center  flex flex-col justify-center items-center'>
                            <span className='text-xl text-yellow-600 '>
                                GOAL 6: SYSTEM PERFORMANCE

                            </span>
                            <p className='py-4 '>Maximize the investment made
                                in the existing transportation
                                system by maintaining it in a state
                                of good repair and harnessing technological
                                advances; promote compact development
                                and travel demand management to minimize
                                the need for new roadway lane-miles and
                                maximize mobility options; and manage the
                                system to maximize efciency and reliability.   </p>
                        </div>




                    </div>


                    <div
                        className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center"
                        id="5">
                        <div>
                            <p className=''>
                                The Greater Madison MPO is the designated metropolitan planning organization (MPO) responsible for overseeing the continuous,
                                comprehensive, and cooperative (3-C) transportation planning decision-making process for the Madison Metropolitan Planning Area
                                (Map 1-a). MPOs are federally designated decision-making bodies for metropolitan areas with populations greater than 50,000, which guide
                                decisions about how federal transportation funds for planning studies, capital projects, and services will be programed in the region. MPOs help
                                facilitate implementing agencies (including local municipalities, transit providers, and state departments of transportation) in the planning and
                                prioritization of their transportation investments in a continuing, comprehensive, and cooperative (3-C) process consistent with regional goals,
                                policies, and needs, as outlined in a long-range regional transportation plan.
                                The goal of the MPO planning and programming processes is to build regional agreement on transportation investments that balance
                                roadway, public transit, bicycle, pedestrian, and other transportation needs and support regional land use, economic development, and
                                environmental goals.
                                The MPO is a regional transportation planning agency and approves use
                                of federal transportation funding; the MPO is not an implementing agency
                                that builds facilities or operates transit service. The following outlines the
                                key responsibilities of the MPO and those that fall with other agencies and
                                local communities.
                            </p>
                        </div>
                        <div>
                            <img className='w-screen  object-cover'
                                src={Map_1_a_Planning_Boundaries_of_the_Greater_Madison_MPO}>
                            </img>
                        </div>


                        <div className=''>
                            <span className='text-lg text-orange-600'>What the MPO does: </span>
                            <p className=' pt-4'>
                                • Prepare a long range (20+ year) regional transportation plan for all
                                modes of travel, which is updated every 5 years
                                <br></br>
                                • This involves:
                                <br></br>
                                • Collaborating with stakeholders including WisDOT, Metro
                                Transit, other transportation providers, Dane County, and local
                                communities;
                                <br></br>
                                • Analyzing short- and long-term transportation needs; and
                                <br></br>
                                • Making policy, strategy, and project recommendations.
                                <br></br>
                                • Provide a forum for regional transportation decision making
                                <br></br>
                                • Approve Federal funding for projects in the region3
                                <br></br>
                                • Conduct public engagement
                                <br></br>
                                • Administer the RoundTrip Travel Demand Management (TDM)
                                program
                            </p>
                        </div>

                        <div className=''>
                            <span className='text-lg text-orange-600'>What the MPO does not do:  </span>
                            <p className=' pt-4'>
                                • Design, construct or maintain roadways or
                                multi-use paths
                                <br></br>

                                • Trafc control (e.g., signs and signals) and
                                enforcement
                                <br></br>
                                • Operate public transit service or design
                                and construct transit capital facilities

                                Land use planning and zoning
                            </p>
                        </div>


                    </div>


                    <div
                        className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center"
                        id="6">
                        <div>
                            <span className='text-xl underline font-bold p-4'>MPO POLICY BOARD</span>
                            <p className=''>The MPO is governed by a 14-member Policy Board appointed by the local units
                                of government within the Metropolitan Planning Area, Dane County, and Wisconsin
                                Department of Transportation (Figure 1-1). The Policy Board is the decision-making body for
                                the organization. Federal law requires that the Policy Board shall consist of: </p>

                            <p>
                                • Elected ofcials;
                                <br></br>
                                • Ofcials of public agencies that
                                administer or operate major modes
                                of transportation in the metropolitan
                                area; and
                                <br></br>
                                • Appropriate State ofcials
                            </p>


                        </div>

                        <div className='flex flex-col  items-center justify-center '>
                            <div className='w-full py-2'>
                                <p>A listing of the current Policy Board
                                    members, meeting calendar, and past meeting minutes can be accessed at
                                </p>
                                <a
                                    className='text-blue-400 underline cursor-pointer'
                                    href='https://www.greatermadisonmpo.org/meetings/tpb.cfm ' target='_blank'>https://www.greatermadisonmpo.org/meetings/tpb.cfm. </a>

                            </div>

                            <div>
                                <img src={mpo_policy_board_struture}></img>
                            </div>
                        </div>

                        <div>
                            <span className='text-xl underline font-bold p-4'>TECHNICAL COORDINATING COMMITTEE </span>
                            <p className='p-2'>The Technical Coordinating Committee (TCC) is a multi-model planning advisory and
                                coordinating committee. It includes members representing various agencies or facets of
                                transportation planning and consists of 14 voting members, 6 alternate voting members,
                                and 2 non-voting members representing the U.S. Department of Transportation. While
                                the MPO Board serves as the policy body for the MPO, the TCC reviews, coordinates, and
                                advises on transportation planning matters. MPO staf reviews all draft plans, policies,
                                project recommendations, TIPs, and other documents with the TCC, which then makes
                                recommendations to the MPO Board. The TCC also plays an important information sharing
                                and coordinating role </p>

                            <p>A listing of the current TCC members, meeting calendar, and past meeting minutes can be
                                accessed at <a
                                    target='_blank'
                                    href='https://www.greatermadisonmpo.org/meetings/tcc.cfm' className='text-blue-400 underline'>


                                    https://www.greatermadisonmpo.org/meetings/tcc.cfm

                                </a>

                            </p>

                        </div>


                    </div>

                    <div
                        className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center"
                        id="7">

                        <div>
                            <p className=''>The metropolitan transportation planning

                                process is directed by the most recent federal
                                transportation authorization legislation,
                                statutes codifed in the United States Code of
                                Laws (U.S.C), and regulations in the Code of
                                Federal Regulations (CFR). 23 U.S.C and 49
                                U.S.C establish the continuing, cooperative,
                                and comprehensive (3-C) metropolitan
                                planning process that the MPO follows to
                                ensure regional cooperation in transportation
                                planning.</p>

                            <div>
                                <span className='text-orange-600 '>REGIONAL TRANSPORTATION PLAN
                                    REQUIREMENTS </span>

                                <p>The MPO is required to develop a regional
                                    transportation plan4
                                    with no less than a
                                    20-year planning horizon, which must
                                    be updated every 5 years. The plan shall
                                    include both long-range and short-range strategies and actions that provide for the development of an integrated multimodal
                                    transportation system. The plan must include:</p>
                                <p className=''>
                                    • Analysis of the current and future transportation demand of persons and goods in the
                                    region
                                    <br></br>
                                    • Inventory of existing and proposed transportation facilities (including roadways,
                                    public transit facilities, pedestrian walkways, and bicycle facilities)
                                    <br></br>
                                    • Performance measures and targets used in assessing the performance of the
                                    transportation system
                                    <br></br>
                                    • A system performance report evaluation the condition and performance of the
                                    transportation system
                                    <br></br>
                                    • Operational and management strategies to improve the performance of existing
                                    transportation facilities to relieve vehicular congestion and maximize the safety and
                                    mobility of people and goods
                                    <br></br>
                                    • Assessment of capital investment and other strategies to preserve the existing and
                                    projected future metropolitan transportation infrastructure, prove for multimodal
                                    capacity increase based on regional priorities and need, and reduce the vulnerability
                                    of the existing transportation infrastructure to natural disasters.
                                    <br></br>
                                    • Transportation and transit enhancement activities
                                    <br></br>
                                    • A discussion of types of potential environmental mitigation activities and potential
                                    areas to carry out these activities, including activities that may have the greatest
                                    potential to restore and maintain the environmental functions afected by the
                                    transportation plan
                                    <br></br>
                                    • A fscally constrained fnancial plan that demonstrates how the adopted
                                    transportation plan can be implemented
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center"
                        id="8">
                        <div>
                            <span className='text-2xl text-fuchsia-600 '>
                                National Transportation
                                Planning Factors
                            </span>

                            <p className=' py-4 '>
                                • Economic Vitality: Support the economic
                                vitality of the metropolitan area, especially by
                                enabling global competitiveness, productivity,
                                and efciency.
                                <br></br>
                                • Safety: Increase the safety of the transportation
                                system for motorized and non-motorized users.
                                <br></br>
                                • Security: Increase the security of the
                                transportation system for motorized and
                                non motorized users.
                                <br></br>                            • Accessibility & Mobility: Increase the
                                accessibility and mobility of people and freight.
                                <br></br>
                                • Environment & Quality of Life: Protect and
                                enhance the environment, promote energy
                                conservation, improve the quality of life and
                                promote consistency between transportation
                                improvements and planned growth patterns.
                                <br></br>
                                • Connectivity: Enhance the integration and
                                connectivity of the transportation system,
                                across and between modes, for people and
                                freight.
                                <br></br>
                                • Efciency: Promote efcient system
                                management and operation.
                                <br></br>
                                • Preservation: Emphasize the preservation of
                                the existing transportation system.
                                <br></br>
                                • Resiliency & Reliability: Improve the resiliency
                                and reliability of the transportation system
                                and reduce or mitigate stormwater impacts of
                                surface transportation.
                                <br></br>
                                • Travel & Tourism: Enhance travel and tourism.
                            </p>
                        </div>


                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center"
                        id="9">

                        <div>
                            <p className=' text-center'>
                                The Connect Greater Madison 2050 Regional
                                Transportation Plan was developed over
                                a two-year time period beginning in late
                                2020. Work to prepare for the planning
                                process started well before this, including a
                                household travel survey conducted in 2017
                                and development of an updated, improved
                                regional travel forecast model in 2019-’21.
                                The planning process concluded in the
                                spring of 2022 following a phased approach,
                                with the public engagement process
                                occurring concurrently. MPO staf regularly
                                consulted the Policy Board and TCC on plan
                                development activities throughout the whole
                                process.
                            </p>


                        </div>

                        <div className='pt-5'>
                            <span className='text-xl text-center text-fuchsia-800 font-semibold '>
                                PHASE 1: EXISTING CONDITIONS ANALYSIS,
                                GROWTH FORECASTS, AND GOAL
                                DEVELOPMENT
                            </span>

                            <p className=' '>In late 2020 MPO staf began to collect
                                data and analyze existing conditions.
                                Data trends related to demographics, the
                                economy, land use development, travel,and transportation system performance
                                were examined and their relationship to
                                plan goals and performance measures
                                established. These baseline conditions
                                formed the foundation for the rest of the RTP.
                                Local municipal staf completed a survey
                                to identify their community’s top short- and
                                long-term transportation priorities, future
                                planning activities, and biggest transportation
                                challenges or concerns. MPO staf worked
                                with Capital Area Regional Planning
                                Commission (CARPC) staf to prepare county
                                and municipal population, household,
                                and employment forecasts. The MPO then
                                coordinated the work of CARPC and City of
                                Madison planning staf in preparing future
                                year 2035 and 2050 growth scenarios, which
                                were used to forecast future trafc zone level
                                households and employment by general
                                type used in the regional travel model. The
                                frst round of public involvement activities
                                during this phase included a public survey,
                                focus group discussions with traditionally
                                underrepresented populations, and online
                                public involvement meetings which in turn
                                helped refne the plan goals and begin
                                identifying critical needs. A dedicated RTP
                                website was launched during this time to
                                publish data and other fndings, as well as to
                                provide opportunities for public comment.
                            </p>
                        </div>


                        <div className='pt-5'>
                            <span className='text-xl text-center text-fuchsia-800 font-semibold '>
                                PHASE 2: DEVELOPMENT AND
                                PRIORITIZATION OF IMPROVEMENT
                                PROJECTS AND STRATEGIES

                            </span>

                            <p className=' '>Beginning in late summer of 2021, MPO
                                staf analyzed the existing conditions in
                                combination with trafc forecasts to conduct
                                gap and need analyses. These analyses were
                                used to develop improvement strategies
                                and projects consistent with plan goals,
                                and determine the capital requirements,
                                operational strategies, and land use policy
                                changes that may be needed in combination
                                with these strategies and projects. An
                                online interactive map commenting tool
                                was launched to allow the public to identifyspecifc needs, barriers or concerns, as well
                                as aspects of the current transportation
                                system that they thought were doing well,
                                followed by a second round of online
                                public involvement meetings presenting
                                draft facility recommendations. The public
                                involvement meetings sought feedback on the
                                recommendations that MPO staf developed,
                                as well as suggestions for additional projects.
                                Feedback from these activities helped inform
                                the prioritization of projects and strategies.

                            </p>
                        </div>

                        <div className='pt-5'>
                            <span className='text-xl text-center text-fuchsia-800 font-semibold '>
                                PHASE 3: FINANCIAL CAPACITY ANALYSIS
                                AND DRAFT PLAN

                            </span>

                            <p className=' '>In early 2022 staf completed a fnancial
                                capacity analysis. This analysis determined
                                which projects and strategies from the
                                prioritized list would be included in the plan
                                based on available funding, ensuring that
                                any recommendations made in the RTP could
                                be completed between now and 2050 using
                                cost and revenue estimates. Once prioritized,
                                the draft RTP was completed. During this
                                same period environmental justice and
                                environmental analyses of the draft RTP were
                                completed to evaluate the impacts of the
                                RTP on minority, low-income, and autoless
                                households and screen major projects for
                                potential environmental impacts. It should be
                                noted that environmental justice (EJ) analysis
                                was conducted and equity considered
                                throughout the planning process with projects
                                identifed and prioritized based on their
                                importance in serving the Tier 1 and 2 EJ areas
                                identifed at the beginning of the process.
                                A fnal round of online public meetings was held. The draft RTP was presented to the TCC
                                and the MPO board and made available
                                for public comment. Feedback from the TCC,
                                board, and public was incorporated into the
                                fnal RTP, which was approved by the MPO
                                board on May 11, 2022 following an ofcial
                                public hearing.



                            </p>
                        </div>

                        <div className='pt-5'>
                            <span className='text-xl text-center text-fuchsia-800 font-semibold '>
                                PHASE 4: PLAN IMPLEMENTATION

                            </span>

                            <p className=' '>
                                The MPO adoption of the RTP demonstrates
                                regional agreement on the transportation
                                vision for the metropolitan area. Upon
                                adoption, the RTP implementation and
                                performance measurement will begin.
                                Implementation can include building new
                                facilities, adding transit service, implementing
                                trafc and transit operational improvements,
                                adding new trails, adopting policies,
                                and completing further studies to refne
                                improvements or strategies recommended in
                                the plan.




                            </p>
                        </div>


                        <div className='pt-5 flex flex-col justify-center items-center'>
                            <span className='text-xl text-center text-fuchsia-800 font-semibold '>
                                A COORDINATED APPROACH TO
                                TRANSPORTATION AND LAND USE
                                PLANNING
                            </span>

                            <p className=''>
                                One of the greater Madison region’s key
                                challenges is growth. With Dane County’s
                                population projected to grow by 178,000
                                between 2020 and 2050, our choices
                                about how and where people live, work,
                                and travel set the stage for future quality
                                of life and achievement of other regional
                                goals. This requires the coordination and
                                integration of transportation and land use
                                planning. The Capital Area Regional Planning
                                Commission (CARPC) is the MPO’s partner
                                INTRODUCTION
                                agency charged with regional land use
                                and areawide water quality management
                                planning. CARPC developed a Regional
                                Development Framework (RDF) is to serve
                                as an advisory resource and guide for local
                                planning and development. The framework
                                addresses regional challenges and aligns
                                local plans and policies with shared regional
                                goals. It also fulflls statutory requirements
                                for RPCs to prepare and adopt a master
                                plan for the physical development of the
                                region. This framework was developed in
                                coordination with the RTP process, with
                                the recommended growth scenario taking
                                into consideration RTP goals and policies along with local comprehensive plans. The
                                recommended growth scenario developed
                                for the RDF informed the travel forecasts the
                                RTP relies on for the facility, service, and other
                                recommendations to accommodate that
                                future travel demand. As a result, the RDF and
                                RTP are mutually supportive.



                            </p>
                            <img src={signal_road}>
                            </img>
                        </div>


                        <div className='pt-5 flex flex-col justify-center items-center'>
                            <span className='text-xl text-center text-fuchsia-800 font-semibold '>
                                THE COVID-19 GLOBAL PANDEMIC AND
                                ITS POTENTIAL LONG-TERM IMPACT ON
                                TRAVEL TRENDS
                            </span>

                            <p className=' '>
                                The outbreak of the COVID-19 global
                                pandemic began just prior to the ofcial start
                                of the RTP planning process. The pandemic
                                has introduced much uncertainty due to
                                its potential long-term impact on land
                                use development and travel trends. While
                                nationally vehicle miles of travel (VMT) has
                                almost returned to pre-pandemic levels,
                                trafc volumes on many major roadways in
                                the Madison area are still down around 10%.
                                In addition, travel has become more spread
                                out throughout the day with weekday peak
                                period volumes down to 60%-70% of prepandemic levels on some roadways. A major
                                factor in this is the continued high level of
                                part-time and full-time teleworking, which
                                employers expect to continue according
                                to a survey conducted by the MPO in 2021.
                                Because roadways are designed to meet
                                peak demand, this could impact capacity
                                needs in the future. At the same time, transit
                                service demand may be more spread out
                                through the day. In addition, there are new
                                technologies such as connected, autonomous
                                vehicles and shared mobility services that are likely to have signifcant impacts on travel
                                and the transportation system in the future.
                                This highlights the importance of updating the
                                RTP every fve years and conducting scenario
                                planning to take into account the uncertainty
                                regarding the future. The MPO intends to
                                use its regional travel forecast model, which
                                was developed based on pre-pandemic
                                household travel characteristics and regional
                                travel patterns, to modify inputs to test
                                the potential impacts of scenarios such as
                                continued high levels of teleworking, more
                                online shopping, shared mobility services, and
                                driverless vehicles.




                            </p>
                            <img src={peoples_on_road}>
                            </img>
                        </div>


                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center"
                        id="10">

                        <div className='flex flex-col '>
                            <span className='text-2xl font-bold p-4 text-center'>
                                Federal Performance
                                Measures

                            </span>
                            <p className=''>
                                The federal performance measures
                                established in 23 CFR 490 and 49 CFR
                                625 and 630 include:
                                <br></br>
                                • Highway Safety Performance
                                Measures (PM1)
                                <br></br>
                                • Pavement and Bridge
                                Performance Measures (PM2)
                                <br></br>
                                • System Performance Measures
                                (PM3)
                                <br></br>
                                • Transit Asset Management Plan
                                (TAM)
                                <br></br>
                                • Public Transportation Agency
                                Safety Plan (PTASP)
                            </p>
                        </div>
                        <div className=' w-full flex justify-center items-center'>
                            <img src={Figure_1_b_Performance_Based_Planning_and_Programming_Framework}></img>
                        </div>


                    </div>



                    <div className=" text-white  sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center space-y-2 pt-2" id="11">


                        <div className='text-start text-orange-700 font-bold'>
                            <span className='text-2xl '>MPO PLANS </span>
                        </div>

                        <div>
                            <span className='text-white font-semibold text-xl p-4'>2050 Regional Transportation Plan (2017)</span>
                            <p className=''>
                                The MPO’s previous RTP. The 2050 Regional
                                Transportation Plan was a major update to
                                the 2035 RTP update, extending the planning
                                horizon to 2050 and accounting for new
                                and modifed land use plans, growth and
                                development, new household, employment
                                and trafc forecasts, and other changes and
                                trends afecting the system since the RTP
                                2035 Update was adopted in 2012. As with all
                                RTPs, it is an integrated, multi-modal system
                                plan that provides the overall framework
                                for transportation planning and investment
                                decision making in the region. The 2050 RTP
                                was amended three times to add the Beltline
                                Flex Lanes project, the East-West Bus Rapid
                                Transit (BRT) project, and the reconstruction of
                                U.S.H. 51 between Stoughton and McFarland
                                to the ofcial, fnancially constrained plan.
                            </p>
                        </div>

                        <div>
                            <span className='text-white font-semibold text-xl '>Bicycle Transportation Plan (2015)</span>
                            <p className=''>
                                The Bicycle Transportation Plan for the
                                Madison Metropolitan Area and Dane County is a comprehensive bicycle plan to
                                serve as a blueprint for continuing to improve
                                bicycling conditions and increase bicycling
                                levels throughout Dane County. The planning
                                horizon is 2050. It provides a framework for
                                cooperation between state agencies, Dane
                                County, and local governments in planning
                                for and developing bicycle facilities and
                                programs.
                                maintaining bicycle facilities. The plan
                                is a component of the the MPO’s RTP. The
                                facility plans have been updated as part of
                                the RTPs.
                            </p>
                        </div>

                        <div>
                            <span className='text-white font-semibold text-xl '>2022-2026 Transportation Improvement
                                Program (2021) </span>
                            <p className=''>
                                The Transportation Improvement Program
                                (TIP), which the MPO updates annually,
                                is a coordinated listing of short-range
                                transportation improvement projects
                                anticipated to be undertaken in the next
                                fve-year period. The TIP is the mechanism by
                                which the long-range RTP is implemented,
                                and represents the transportation
                                improvement priorities of the region.
                                Projects within the MPO Planning Area
                                must be included in the TIP in order to be
                                eligible to receive federal funding assistance.
                                Outer county area projects are also listed
                                for information and coordination purposes.
                                The list is multi-modal. In addition to streets/
                                roadways, it includes transit, pedestrian and
                                bicycle, parking, and rideshare/transportation
                                demand management projects.

                            </p>
                        </div>



                        <div>
                            <span className='text-white font-semibold text-xl '>2013-2017 Transit Development Plan (2013)
                                (2019) </span>
                            <p className=''>
                                The Transit Development Plan (TDP) for the
                                Madison Urban Area is a short- to mediumrange strategic plan intended to identify
                                transit needs and proposed improvements
                                and studies over a fve-year planning horizon.
                                The MPO is responsible for developing and
                                maintaining the TDP. The MPO works in
                                close cooperation with Metro Transit and
                                other transit providers, funding partners, and
                                jurisdictions in the Madison area to develop
                                the plan. The TDP is developed within the
                                overall framework of the long-range RTP. An
                                update to the TDP was put on hold due to the
                                Metro Transit Network Redesign Study, but
                                work on an update will resume in late 2022.

                            </p>
                        </div>

                        <div>
                            <span className='text-white font-semibold text-xl '>Congestion Management Process (2022)
                                (2019) </span>
                            <p className=''>
                                Metropolitan Planning Organizations with
                                planning area populations over 200,000 are
                                designated as Transportation Management
                                Areas (TMA) by FHWA. In these areas, a
                                Congestion Management Process (CMP) is
                                required to be developed and implemented
                                as an integral part of the metropolitan
                                planning process. The CMP is an 8-step
                                process, as follows:

                                <p className=''>

                                    • Develop Congestion Management
                                    Objectives;
                                    <br></br>
                                    • Identify Area of Application;
                                    <br></br>
                                    • Defne System or Network of Interest;
                                    <br></br>
                                    • Develop Performance Measures;
                                    <br></br>
                                    • Institute System Performance Monitoring
                                    Plan;
                                    <br></br>
                                    • Identify and Evaluate Strategies;
                                    <br></br>
                                    • Implement Selected Strategies and
                                    Manage Transportation System;
                                    <br>
                                    </br>
                                    • Monitor Strategy Efectiveness.
                                </p>
                                The MPO developed its frst CMP in 2011 with
                                the intent to address congestion based on a
                                cooperatively developed and implemented
                                metropolitan-wide strategy that provides
                                for the safe and efective management and
                                operation of the multimodal transportation
                                system. Strategies from the CMP are
                                incorporated into the RTP and TIP. Strategies
                                that manage travel demand, reduce single
                                occupant vehicle (SOV) travel, and improve
                                transportation system management and
                                operations are all to be considered, as well
                                as those that explicitly address bicycling and
                                walking.

                            </p>
                        </div>


                        <div>
                            <span className='text-white font-semibold text-xl '>Wisconsin Rail Plan 2050 (Anticipated Early
                                2022)

                            </span>
                            <p className=''>
                                The Wisconsin State Rail Plan 2050 will
                                include policies for railroad crossings, freight
                                rail, Wisconsin’s state-owned rail system,
                                long distance passenger rail, intercity rail,
                                and commuter rail. The plan will specifcally
                                discuss rail data trends, existing and possible
                                future service levels, rail system conditions,
                                and commodity freight movements.
                            </p>
                        </div>


                        <div>
                            <span className='text-white font-semibold text-xl '>Transportation Asset Management Plan
                                (2019)

                            </span>
                            <p className=''>
                                The TAMP outlines WisDOT’s investment
                                strategy over the next ten years (to 2029)
                                to keep the National Highway System safe,
                                efcient and in a state of good repair.
                            </p>
                        </div>

                        <div>
                            <span className='text-white font-semibold text-xl '>WisDOT SW Region Park-and-Ride System
                                Study (2015)
                            </span>
                            <p className=''>
                                The Wisconsin Department of Transportation
                                (WisDOT) Southwest Region initiated the
                                Southwest Region Park-and-Ride System
                                Study to create more efcient and sustainable
                                commuting choices and reduce trafc
                                volumes on the state highway system. Parkand-ride system planning work begins with a location evaluation tool. The frst step in
                                the location selection process is identifying
                                areas where park-and-ride lots may be
                                practical, with potential to attract users and
                                meet WisDOT’s park-and-ride program
                                goals. The purpose of this report is to present
                                the screening methodology for assessing the
                                most efcient locations for future park-andride facilities in the sixteen county study area
                                of the Southwest Region.
                            </p>
                        </div>


                        <div>
                            <span className='text-white font-semibold text-xl '>Major Corridor Studies

                            </span>
                            <p className=''>
                                Major highway development projects
                                are generally the most complex and
                                costly projects initiated by the Wisconsin
                                Department of Transportation (WisDOT).
                                They are intended to identify long-term
                                solutions to the most serious defciencies on
                                highly traveled segments of the highway
                                system. They are currently shown in the
                                RTP as studies, however when the fnal
                                design concepts and construction funding is
                                approved they will be amended into the RTP.
                            </p>
                            <p>
                                <b> • I-39/90 Study</b> - The Interstate study will
                                analyze the existing and future conditions
                                of the I-39/90/94 corridor, testing several
                                possible transportation improvements and
                                their impact on future corridor conditions.
                            </p>
                            <p>
                                <b>• Madison Beltline Study (ongoing)</b> -
                                The Madison Beltline Planning and
                                Environmental Linkages (PEL) Study is a
                                planning-level analysis of the efectiveness
                                of all possible solutions to the Madison
                                Beltline’s current and long-term needs;
                                in particular, determining to what extent
                                possible solutions would address the existing safety, capacity and geometric
                                issues as well as meet identifed study
                                objectives. In addition to improvements
                                to the physical Beltline or crossings of
                                the Beltline, changes or improvements
                                to alternate modes of travel, other area
                                transportation corridors, and existing
                                Beltline connections to the adjacent road
                                network are being analyzed. Following the
                                completion of the PEL Study in 2023 the
                                environmental study process under NEPA
                                will be initiated to further analyze and
                                refne the highest priority improvement
                                concepts selected as part of the preferred
                                strategy package. Following selection of a
                                preferred alternative project and approval
                                of funding fnal design will begin.
                            </p>
                            <p>
                                <b>• US 51 Stoughton Road Corridor Study
                                    (ongoing)</b> - The study limits extend from
                                Terminal Drive/Voges Road in the village
                                of McFarland to the State Trunk Highway
                                (STH) 19 interchange in the village of
                                DeForest. The study passes through the city
                                of Madison, the city of Monona, and the
                                town of Blooming Grove in Dane County.
                                This study will develop and evaluate
                                long-term alternatives to address the
                                safety, congestion, and gaps in the bicycle
                                and pedestrian facility network along this
                                corridor.
                            </p>
                        </div>


                        <div className=' text-orange-700 font-bold'>
                            <span className='text-2xl'>REGIONAL PLANS </span>
                        </div>
                        <div>
                            <span className='text-white font-semibold text-xl '>CARPC Regional Development Framework
                            </span>
                            <p className=''>
                                CARPC has prepared an update, known as
                                the Regional Development Framework (RDF), to the Vision 2020: Dane County Land Use and
                                Transportation Plan. The Framework draws
                                on public priorities, local government input,
                                and growth projections to establish goals,
                                objectives, and strategies for accommodating
                                future growth in the Dane County region.
                                The Framework is designed to serve as a
                                guide for incorporating big picture goals
                                into individual decisions about where and
                                how to grow. The strategies outlined in the
                                Framework will promote growth that:
                                <br></br>
                                • Reduces greenhouse gas emissions and
                                fosters community resilience to climate
                                change
                                <br></br>
                                • Increases access to jobs, housing and
                                services for all people
                                <br></br>
                                • Conserves farmland, water resources,
                                natural areas, and fscal resources

                            </p>
                        </div>


                        <div>
                            <span className='text-white font-semibold text-xl '>Dane County’s North Mendota Parkway
                                Study (2009)
                            </span>
                            <p className=''>
                                The North Mendota Parkway Study helped
                                develop a series of recommended study
                                areas for a future north-metro parkway route:
                                <br></br>
                                • An Eastern Corridor Area between County
                                Trunk Highway (CTH) M and CTH Q;
                                <br></br>
                                • A broader Western Corridor Area between
                                the Town of Westport / Town of Springfeld
                                line and U.S. Highway 12, and;
                                <br></br>
                                • A transition area to connect the Eastern
                                Corridor and Western Corridor areas.
                                <br></br>
                                Additionally, the study recommended a
                                natural resource area boundary to protect the
                                environmental, water, scenic, and recreation
                                resources in the North Mendota area. The
                                plan was adopted and incorporated into the
                                Dane County Parks and Open Space Plan.
                                The county has moved forward with the
                                eastern corridor on existing alignment with a
                                project to reconstruct and expand that section
                                of CTH M to a four-lane divided crosssection with associated bicycle/pedestrian
                                improvements. That project, funded by the
                                MPO, is scheduled for construction in 2023-
                                ‘24. No further work has been completed on
                                the western corridor on new alignment due in
                                part to the very large cost and difcult issues
                                for such a project.

                            </p>
                        </div>


                        <div>
                            <span className='text-white font-semibold text-xl '>Dane County Climate Action Plan (2020)

                            </span>
                            <p className=''>
                                Dane County has created a sciencebased plan to achieve “deep
                                decarbonization” that is consistent with
                                the latest recommendations from the
                                <a
                                    className='text-blue-600 underline'
                                    href='https://www.ipcc.ch/sr15/' target='_blank'>

                                    Intergovernmental Panel on Climate
                                    Change (IPCC)
                                </a>

                                Under the CAP Dane
                                County aims to reduce greenhouse gas
                                emissions (GHG) 50% county-wide by
                                2030 and put the county on a path to be
                                carbon-neutral by 2050. Visit the Climate
                                Action Plan web page
                                <a
                                    className='text-blue-600 underline'

                                    href='https://daneclimateaction.org/climate-action-plan' target='_blank'>

                                    here.
                                </a>



                            </p>
                        </div>

                        <div>
                            <span className='text-white font-semibold text-xl '>Dane County Natural Hazard Mitigation
                                Plan (2017; currently being updated)
                            </span>
                            <p className=''>
                                The plan outlines a strategy with specifc
                                programs and policies that can be
                                implemented by Dane County and local
                                units of government within Dane County
                                to reduce the impact of natural hazards
                                on people, structures and infrastructure,
                                and the natural environment. A wide
                                range of hazard mitigation projects are being
                                considered, from small individual actions to
                                large-scale community projects. This plan
                                is recognized by the Federal Emergency
                                Management Agency (FEMA) as the County’s
                                ofcial plan, enabling the County to apply for
                                grants to implement projects and programs
                                identifed in the plan.

                            </p>
                        </div>


                        <div>
                            <span className='text-white font-semibold text-xl '>Madison Region Economic Partnership
                                (MadREP) Advance Now 2.0 (2019)
                            </span>
                            <p className=' flex justify-center items-center flex-col'>
                                The Advance Now 2.0 strategy represents
                                a refreshed blueprint to ensure that the
                                Madison Region continues its trajectory
                                as a national community of choice.
                                <img
                                    className=''
                                    src={friends_on_road}
                                ></img>
                                The process will also serve as MadREP’s fve-year
                                update to the Comprehensive Economic
                                Development Strategy (CEDS) process as
                                required by the U.S. Economic Development
                                Administration (EDA). The report notes “when
                                asked to name the Madison Region’s top
                                competitive issue, a surprising number of top
                                leaders identifed the need for regional transit
                                as their number one concern.”

                            </p>
                        </div>

                        <div className=' text-orange-700 font-bold'>
                            <span className='text-2xl'>LOCAL PLANS  </span>
                        </div>

                        <div className=''>
                            <p>Local reports, documents, and other studies
                                relevant to transportation, land use, and
                                economic development in the region were
                                also reviewed during the development of the
                                RTP. These documents include community
                                comprehensive plans, land use plans,
                                corridor plans, and more. </p>
                        </div>

                        <div>
                            <span className='text-white font-semibold text-xl '>Madison in Motion – Sustainable
                                Madison Transportation Master Plan
                                (2017)
                            </span>
                            <p className=''>
                                Madison in Motion, the City of Madison’s
                                Sustainable Madison Transportation
                                Master Plan, is intended to guide future
                                transportation decisions in Madison, in
                                order to help make Madison a more
                                walkable, bikeable and transit-oriented
                                city. Madison in Motion builds on adopted
                                transportation and land use plans to
                                improve coordination, connectivity and
                                transportation choice while establishing a
                                framework to strengthen neighborhoods
                                with context-appropriate future
                                development.

                            </p>
                        </div>






                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center"
                        id="12">

                        <div className=''>
                            <p className=''>
                                The intent of the RTP is to ofer a vision
                                and blueprint for the future of the
                                transportation network in the Madison
                                area. To develop this vision and fnd
                                consensus between competing interests,
                                it is important to have a robust dialogue
                                between the community, stakeholders,
                                and local ofcials. The MPO staf worked
                                to facilitate opportunities for all interested
                                parties to participate in the planning
                                process and attempted to make that
                                process more inclusive for those that may
                                not feel comfortable or have the time
                                for traditional forms of participation. The
                                public involvement process was broken
                                down into three phases
                            </p>
                            <p className=''>
                                <br></br>
                                • Phase One: Introduction to the
                                Planning Process
                                <br></br>
                                • Phase Two: Review of Existing Conditions
                                <br></br>
                                • Phase Three: Presentation of the Draft Plan
                                and Recommendations
                                <br></br>
                                Due to Covid-19 safety precautions, all public
                                involvement was conducted virtually. Key
                                public involvement activities are summarized
                                below. In addition to the activities described
                                below, the MPO posted RTP updates
                                frequently through social media, in the MPO
                                Newsletter, as well as press releases at key
                                RTP development stages. Specifc materials
                                delivered during the involvement process can
                                be found in Appendix E.
                            </p>
                            <div className='flex justify-center items-center'>

                                <img
                                    src={parked_vehicles}
                                    className=''
                                ></img>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-2xl  font-bold'>
                                CONNECT GREATER MADISON RTP
                                WEBSITE
                            </span>

                            <p>
                                At the start of the planning process, the
                                MPO worked with a consultant to create
                                an interactive website for the RTP in an
                                efort to increase public participation
                                and interest in the planning process. The
                                website,

                                <a
                                    href="https://greatermadisonmpo.konveio.com/"

                                    className='text-blue-600 font-semibold'>
                                    greatermadisonmpo.konveio.
                                    com
                                </a> , provided project news, descriptions
                                of the plan development process, a listing
                                of RTP related boards and committees and
                                corresponding membership, a timeline of
                                public engagement activities and meetings,
                                links to related plans and studies, information
                                about the MPO, and interactive tools at specifc points in the planning process.
                                The website also included Spanish
                                translation of key plan information.
                            </p>
                        </div>


                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold'>
                                ONLINE SURVEY
                            </span>

                            <p>
                                An online public survey was launched
                                in June of 2021 to kick of Phase One
                                of public involvement for the RTP. The
                                survey asked participants to rate current
                                conditions of the transportation system,
                                identify improvement needs, important
                                transportation issue faction the region,
                                and support for diferent policies and
                                funding options. A total of 274 participants
                                completed the survey, which was
                                available in both English and Spanish.
                                Key themes from the responses include:
                                <br></br>
                                • A need for greater connectivity; the
                                region is well accessed by automobile,
                                but responses indicated a need for
                                expanding public transit service and
                                additional the bike and pedestrian
                                infrastructure.
                                <br></br>
                                • Prioritize maintaining and improving
                                existing infrastructure.
                                <br></br>
                                • Improve safety for all users of the
                                transportation system.
                                <br></br>
                                • Reduce the impact of climate change.
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-2xl  font-bold'>
                                FOCUS GROUPS
                            </span>

                            <p>
                                The MPO partnered with area community
                                organizations, including the Bayview
                                Community Foundation, Latino Academy of
                                Workforce Development, and Sun Prairie’s
                                Neighborhood Navigators to identify focus group participants from demographic
                                groups that are typically under-represented
                                in public participation on plan development.
                                MPO staf heard a lot about the afordability,
                                convenience, and reliability of transportation
                                options during these focus group discussions,
                                including:
                                <br></br>

                                <p>
                                    • The trade-of between greater accessibility
                                    by personal vehicle and the high expense
                                    of car ownership.
                                    <p className=' text-blue-500 font-semibold'>
                                        “My car payment is my biggest expense.
                                        Having a car for regular use means that I
                                        have to sacrifce a lot of things in the rest
                                        of my life. The money we spend to have
                                        that car so that we can have fexibility
                                        means that we do not have money to
                                        spend on other things. For example, we
                                        can’t go on trips, spend money on meals,
                                        or do fun extra activities.”
                                        <br></br>

                                    </p>

                                </p>

                                <p>
                                    • The need for more frequent, accessible,
                                    and convenient public transit.
                                    <p className=' text-blue-500 font-semibold' >

                                        “The bus is not much available at night
                                        and during the weekends. [The Latino
                                        community] does not work from 9 am to 5
                                        pm. Our community works from 4 am to 1
                                        pm, 1 pm to 8 pm, 8 pm to 3 am and there
                                        is no public transportation to meet those
                                        diferent schedules.”
                                    </p>
                                </p>


                                <p>
                                    • Transportation barriers make it difcult
                                    to meaningfully engage with family and
                                    community.
                                    <p className=' text-blue-500 font-semibold' >

                                        “It is hard to be involved with kids’ after
                                        school activities and things like parentteacher conferences due to transportation
                                        limitations.”
                                        “I would like to be a part of the community
                                        and go to farmers markets, make trips
                                        to Madison and go to other events, but I
                                        cannot due to limited bus service.”
                                    </p>
                                </p>
                                <br></br>
                                <p>
                                    • Focus group participants with mobility
                                    limitations expressed challenges to
                                    accessing public transit and using sidewalk
                                    networks due to physical challenges or
                                    discomfort/lack of knowledge about
                                    options.
                                </p>


                            </p>

                        </div>


                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-2xl  font-bold'>
                                INTERACTIVE ONLINE MAPS

                            </span>

                            <p>
                                As part of Phase Two of public participation
                                for the RTP update, the MPO invited the
                                public to provide feedback through interactive
                                maps on the existing transportation system
                                in the greater Madison area. The interactive
                                mapping tool allowed participants to post
                                comments on the network, identifying
                                specifc needs, barriers, or concerns, as well
                                as facilities that work particularly well that
                                should be duplicated elsewhere. Over 1,300
                                map comments were received, identifying
                                connectivity, safety, operational, and
                                maintenance comments and concerns for all
                                modes of transportation.
                                As part of Phase Three an interactive
                                map including all recommended future
                                transportation improvements was made
                                available for public comment. The public was
                                invited to comment on how well the proposed
                                future transportation network would serve
                                their needs and the needs of future growth as
                                we work toward regional livability goals. Over
                                160 comments were submitted on the future
                                network.
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-2xl  font-bold'>
                                PUBLIC INVOLVEMENT MEETINGS

                            </span>

                            <p>
                                A series of three Public Involvement
                                Meetings (PIMs) were held at key points
                                in the RTP development process. The
                                PIMs allowed MPO staf to present and
                                illustrate information, alternatives, and plan
                                recommendations, answer questions, and are
                                a key method for receiving public comment.
                                Each PIM series included a lunchtime and
                                evening presentation. The meetings were
                                recorded and posted on the RTP website
                                along with all meeting materials so anyone
                                who could not attend the live meetings could
                                watch later. Press releases were developed
                                to announce each PIM, notice was emailed
                            </p>
                            <img
                                className=''
                                src={two_roads}></img>

                            <p className=''>
                                out to the entire MPO contact list and with a
                                request that community organizations share
                                the announcement with their members, and
                                the PIMs were posted through social media.
                                <br></br>
                                • Phase One: Introduction to the Planning
                                Process- June 17th and 24th, 2021
                                <br></br>
                                • The June 17th meeting included a joint
                                presentation on the CARPC Regional
                                Development Framework planning process
                                to emphasis the regional transportation
                                and land use planning connections.
                                <br></br>
                                • Phase Two: Existing Conditions- November
                                11th and 16, 2021
                                <br></br>
                                • Phase Three: Recommendations- April 7th
                                and 12th, 2022
                                <br></br>
                                • Public Hearing on Draft RTP- May 11th,
                                2022

                            </p>
                            <img
                                className=' w-full'
                                src={interactive_online_map}
                            >
                            </img>
                        </div>


                    </div>

                </div>
            </div>



        </motion.div >
    )
}

export default Introduction
