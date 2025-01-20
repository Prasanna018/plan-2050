import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import our_system_tomorrow_bg from '../assets/our_systems_tomorrow/our_system_tomorrow_bg.png'
import peoples_on_road from '../assets/our_systems_tomorrow/peoples_on_road.png'
import over_rain from '../assets/our_systems_tomorrow/over_rain_on_road.png'
import Figure_4_a_Levels_of_Vehicle_Automation
    from '../assets/our_systems_tomorrow/Figure 4-a Levels of Vehicle Automation .png'
import road from '../assets/our_systems_tomorrow/road.png'
import Figure_4_b_Land_Use_and_Transportation_Recommendations_and_Supporting_Actions
    from '../assets/our_systems_tomorrow/Figure 4-b Land Use and Transportation Recommendations and Supporting Actions .png'
import Figure_4_o_Federal_Transportation_Performance_Measures
    from '../assets/our_systems_tomorrow/Figure 4-o Federal Transportation Performance Measures (Continued on next page.png'
import Figure_4_o_Federal_Transportation_Performance_Measures2
    from '../assets/our_systems_tomorrow/Figure 4-o Federal Transportation Performance Measures2.png'

import Figure_4_p_Supplemental_RTP_Performance_Measures
    from '../assets/our_systems_tomorrow/Figure 4-p Supplemental RTP Performance Measures.png'
const links = [
    { id: '1', text: 'Critical Issues' },
    { id: '2', text: 'Drivers of Change' },
    { id: '3', text: 'Needs and Recommendations' },
    { id: '4', text: ' Evaluating Plan Progress ' }
]

function OurSystemsTommarow() {
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
            className="lg:h-[80vh] h-[90vh] flex w-full sm:w-[100vw] space-x-2 p-1 scroll-smooth overflow-y-auto sm:h-fit bg-[#e7eaeb] "
        >



            {/* left */}
            <div className="hidden md:w-[50vw] sm:w-[40vw] lg:items-center justify-start h-full  text-blue-500 lg:flex">

                <div className='flex flex-col  h-fit p-2 items-start space-y-6'>

                    {links.map((link, index) => (
                        <div

                            key={index}>
                            <a
                                className={`cursor-pointer scroll-smooth text-white rounded-xl bg-[#008CBA] p-2 ${activeSection === link.id ? 'text-blue-900 font-bold' : ''}`}
                                onClick={() => handleSmoothScroll(link.id)}
                            >
                                {link.text}
                            </a>
                        </div>
                    ))}


                </div>

            </div>

            {/* right */}
            <div className="w-full relative  sm:w-full sm:h-fit lg:flex lg:justify-center pt-32 sm:pt-0 overflow-y-auto no-scrollbar md:w-full lg:h-full  ">
                <div className='lg:w-[35vw] p-2 bg-black h-fit text-lg '>



                    <div id="image-section" className="object-cover w-full scroll-section">
                        <img src={our_system_tomorrow_bg} alt="Summary Background" />
                    </div>
                    <div className='py-2'>
                        <p className=' text-lg'>As the greater Madison region’s
                            transportation system evolves, three critical
                            issues that should play an important role in
                            planning and decision-making are equity,
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
                            fostering equitable access to opportunity, wise
                            use of natural resources, and the ability of
                            individuals to live healthy, sustainable lives.
                            To provide a framework for this coordination,
                            the Greater Madison MPO works closely
                            with the Capital Area Regional Planning
                            Commission (CARPC) to align the agencies’
                            regional plans and implementation
                            strategies that guide communities. The
                            goals, recommendations, and performance
                            measures in the Connect Greater Madison
                            Regional Transportation Plan (RTP) for 2050
                            reinforce the goals and objectives of CARPC’s
                            Regional Development Framework (RDF),
                            together promoting positive outcomes for
                            equity, climate action, and health.
                            The following sections summarize the
                            signifcance of these three critical issues; their relationship to our transportation system; and
                            how the RTP advances each.
                        </p>
                    </div>


                    <div className="py-3 text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center " id="1">
                        <div
                        >
                            <div className='flex text-center justify-center'>

                                <span className='py-2 text-white font-bold text-center text-xl'>
                                    Critical Issues
                                </span>
                            </div>
                            <p>
                                As the greater Madison region’s
                                transportation system evolves, three critical
                                issues that should play an important role in
                                planning and decision-making are equity,
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
                                fostering equitable access to opportunity, wise
                                use of natural resources, and the ability of
                                individuals to live healthy, sustainable lives.
                                To provide a framework for this coordination,
                                the Greater Madison MPO works closely
                                with the Capital Area Regional Planning
                                Commission (CARPC) to align the agencies’
                                regional plans and implementation
                                strategies that guide communities. The
                                goals, recommendations, and performance
                                measures in the Connect Greater Madison
                                Regional Transportation Plan (RTP) for 2050
                                reinforce the goals and objectives of CARPC’s
                                Regional Development Framework (RDF),
                                together promoting positive outcomes for
                                equity, climate action, and health.
                                The following sections summarize the
                                signifcance of these three critical issues; their
                                relationship to our transportation system; and
                                how the RTP advances each.
                            </p>
                        </div>



                        <div className='lg:flex-col w-full flex flex-col gap-3'>
                            <img
                                className='object-cover '
                                src={peoples_on_road}></img>
                            <img
                                className='object-cover'
                                src={over_rain}></img>
                        </div>
                    </div>

                    <div className='py-2'>
                        <p>
                            To support this work, the MPO collaborates
                            with CARPC to prioritize regional planning
                            strategies that build climate change resiliency
                            and reduce GHG emissions from the built
                            environment. A critical shared goal is to
                            promote compact, mixed-use development
                            that supports walking, bicycling, and public
                            transit. Other climate-related goals in
                            CARPC’s RDF that involve increasing tree
                            canopy, increasing water infltration, and
                            decreasing the urban heat island efect
                            are further supported by RTP 2050 goals
                            for environmental sustainability and system
                            performance, which speak to mitigating the
                            2018 Flooding Damage
                            environmental impacts of the transportation
                            system and limiting demand for future
                            roadway expansions.
                            HEALTH
                            Transportation plans, policies, and projects
                            directly infuence public health by determining
                            the type and quality of transportation options
                            available to help people get where they
                            need to go. As a core element of the built
                            environment, transportation is a critical
                            social determinant of health10 that often
                            disproportionately burdens low-income
                            and minority communities. In transportation
                            planning, it is vital to consider the health
                            implications of decisions and to involve
                            afected communities in the decision-making
                            process, in order to achieve systems that
                            support health and a high quality of life for all.
                            Transportation afects public health in four
                            key areas:
                            • Physical Activity: The ability of individuals
                            to easily integrate physical activity into their
                            daily routines through the transportation
                            choices available to them.
                            • Natural Environment: The impact of
                            transportation on air and water quality,
                            and the ability of individuals to take
                            action on climate change through their
                            transportation choices.
                            10 “Social Determinants of Health,” Centers for Disease
                            Control and Prevention, https://www.cdc.gov/
                            socialdeterminants/about.html. Accessed on 2/25/2022.
                            May 2022 | 4-5
                            • Safety: The ability of users of all ages
                            and abilities to safely navigate the
                            transportation system.
                            • Access: The ability of individuals to access
                            basic needs including jobs, healthcare,
                            healthy food, schools, social services,
                            community centers, and green space.
                            Healthy community design11, which makes it
                            easier for people to live healthy lives through
                            the built environment, uses a combination
                            of land use and transportation strategies to
                            promote physical activity, improve air quality,
                            lower safety risks, and strengthen social
                            connections. This approach relies on crosssector collaboration among urban planners,
                            engineers, public health professionals and
                            others to act on critical issues including
                            obesity, heart disease, asthma, and trafc
                            injuries and deaths. Key strategies include
                            compact, mixed-use development; quality
                            public transit and active transportation
                            infrastructure; afordable housing; and
                            equitable access to resources such as
                            healthcare, healthy food, greenspace, and
                            community centers.
                            As the framework for transportation planning
                            and investing in the greater Madison
                            region, the Connect Greater Madison RTP
                            coordinates closely with CARPC’s RDF,
                            incorporating goals, recommendations, and
                            performance measures that support healthy
                            community design in numerous ways. This
                            11 “Healthy Community Design,” American Public Health
                            Association, https://www.apha.org/topics-and-issues/
                            environmental-health/healthy-community-design.
                            Accessed on 2/25/2022.

                            4-6 | May 2022
                            includes through recommendations and
                            supporting actions detailed in this chapter
                            that focus on improving trafc safety;
                            bicycle and pedestrian infrastructure; public
                            transit and specialized transit services; and
                            transportation demand management (TDM).
                            The MPO, local communities, and partner
                            agencies, including CARPC and Dane
                            County, must continue to work together to
                            support positive public health outcomes
                            through coordinated transportation and
                            land use planning. Resources provided by
                            the MPO, including the recent intersection
                            safety analysis and safety optimization tool;
                            Low-Stress Bicycle Network report; and
                            Pedestrian/Bicycle Facility Requirements,
                            Policies, and Street Standards report,
                            provide important tools to identify gaps and
                            opportunities, while new resources such as
                            Streetlight Data will further help to visualize
                            data, identify patterns, and guide investments.
                        </p>
                    </div>

                    <div className="py-3 text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center " id="2">

                        <div className='flex text-center justify-center'>

                            <span className=' text-white font-bold text-center text-xl'>
                                Diverse Change
                            </span>
                        </div>

                        <div className='py-2'>
                            <span className=''>
                                Transportation is currently experiencing
                                a rapid change not seen since the early
                                20th century. Some of this change is due
                                to paradigm shifts, such as the growth of
                                telework and the increase in freight going
                                directly to homes due to the rise of online
                                shopping, while other changes are due to the
                                advent of emerging technologies, including
                                connected and automated vehicles. While
                                many of these technologies on their own
                                would be transformational, the confuence
                                of a number of them into and afecting the
                                transportation system at once poses more
                                questions than answers for manufacturers,
                                consumers, and planners. It will be important
                                to determine quantifable ways that the
                                new technologies will impact planning –
                                be it newfound capacity, cost savings, or a
                                complete reimagining of the transportation
                                system. It will be important, now more than
                                ever, to recalibrate planning eforts based
                                on these and other emerging trends and
                                technologies and to remain fexible,  nimble,
                                and adaptable in the coming years.
                            </span>
                        </div>

                        <div className='py-2'>
                            <span className='text-orange-600 text-xl '>
                                TELEWORK

                            </span>
                            <p className='py-2'>
                                time employees in the US were working partly
                                or fully remotely at the end of 2021, a seismic
                                jump from 6% prior to the start of the Covid-19
                                pandemic. While telework is not an option
                                for many occupations (e.g., manufacturing,
                                education, health care, and the service
                                industry), national and local surveys indicate
                                that telework is likely to be a common part of
                                workplace structures beyond the pandemic,
                                primarily as a hybrid/part-time option.
                                Relative to the long-term impact that telework
                                may have on vehicle miles traveled in the
                                region, responses to a recent MPO survey
                                indicate that telework may have the potential
                                to help employees reduce their overall
                                weekly driving, and in some cases choose
                                alternate commute modes on their in-ofce
                                days. Greater adoption of fexible workplace
                                12 Saad & Wigert. Remote Work Persisting and Trending
                                Permanent. Gallup, 2021. https://news.gallup.com/
                                poll/355907/remote-work-persisting-trendingpermanent.aspx

                                models that include both telework and fexible
                                schedules ofers greater opportunity to
                                reduce driving and peak period congestion, in
                                turn reducing peak-period roadway demand
                                and expanding opportunities to prioritize
                                investments in other modes of transportation.
                                E-COMMERCE AND ONLINE SHOPPING
                                Online shopping is more popular than ever.
                                In fact, in 2019 the total market share of
                                online retail sales exceeded that of bricksand-mortar retail locations,13 with consumers
                                expecting quick turnaround, in many cases
                                same-day delivery. One study found that
                                although e-commerce has generated an
                                increase in parcel delivery trips, the net
                                efect of e-commerce has been a reduction
                                in VMT and fuel consumption.14 The rise in
                                e-commerce requires large warehouse
                                13 Rooney, Kate. Online shopping overtakes a major art of
                                retail for the frst time ever. CNBC, 2019. https://www.cnbc.
                                com/2019/04/02/online-shopping-ofcially-overtakesbrick-and-mortar-retail-for-the-frst-time-ever.html
                                14 Stinson, Enam, and Moore. Citywide impacts of
                                e-commerce: does parcel delivery travel outweigh
                                household shopping travel reductions? Argonne National
                                Laboratory, 2019.

                                and distribution centers in urban settings,
                                particularly locations with prime Interstate
                                access. The recently proposed 3.4 million
                                square foot Amazon distribution center in the
                                Village of Cottage Grove just of the Interstate
                                94 and CTH N interchange is an example of
                                this. Transportation-related implications of
                                e-commerce include more daily truck trafc
                                around warehouse and distribution centers,
                                and the increased need for loading zone
                                management practices.
                            </p>
                        </div>
                        <div className='py-4 w-full'>
                            <img
                                src={Figure_4_a_Levels_of_Vehicle_Automation}
                                className='w-full object-cover py-2'
                            ></img>
                        </div>

                        <div className='py-2'>
                            <span className='text-orange-800 text-xl'>CONNECTED AND AUTONOMOUS
                                VEHICLES </span>

                            <p className='py-4'>
                                Connected and Autonomous vehicles (CV/AVs)
                                are vehicles in which at least some aspect of
                                safety-critical control functions occurs without
                                driver input. Over time, it is anticipated that
                                vehicles will gradually gain more autonomy.
                                Because of this continuum of automation,
                                “levels of vehicle automation” have been
                                developed to determine how driver-reliant a
                                vehicle is. A vehicle with a rating of 0 has no
                                automation, while a rating of 5 is completely
                                automated (Figure 4-a).
                                Examples of vehicle automation are
                                becoming more mainstream each year.
                                Many higher-end vehicles currently come with automated features such as parking
                                assist and crash avoidance. Examples of this
                                type of technology include advanced drive
                                assistance systems (ADAD) that alert drives to
                                objects or people nearby using radar, sonar,
                                or infrared signals; technologies that apply
                                breaks to avoid crashes; and technologies
                                that avoid collisions by cooperative
                                communication between cell-phone signals,
                                vulnerable users, and vehicles to notify both
                                parties of potential issues.
                                The future impact of Level 5 (completely
                                automated) CV/AVs on the transportation
                                system is still uncertain. It is likely that feets
                                and freight will be early adopters. The
                                potential benefts and challenges will largely be dependent on which technology and service models
                                businesses and
                                consumers
                                embrace, and
                                how regulators
                                and policy makers
                                respond. Benefts of
                                this technology are
                                likely to include a
                                dramatic reduction
                                in crashes, reduced
                                travel times,
                                reduced energy
                                consumption,
                                reduced vehicle
                                emissions, improved
                                reliability, increased
                                roadway capacity,
                                and increased
                                OUR SYSTEM TOMORROW: 2050

                                transit accessibility. Shared mobility options
                                could become much more attractive since
                                they would be able to provide door-to-door
                                service for all riders. Transit service could
                                be delivered at a reasonable cost in lowerdensity communities. On the other hand,
                                completely automated vehicles are likely
                                to encourage more driving unless public
                                policies are implemented to make car travel
                                less appealing and to promote shared feets
                                of such vehicles rather than privately owned
                                ones. For example, if people own their vehicle
                                they can send it on “zero-occupancy” trips or
                                errands. People may also be more inclined
                                to move further from their workplace. Policies
                                to make an automated transportation future
                                more environmentally sustainable will need
                                to be adopted before automated vehicles
                                become widespread.
                            </p>
                        </div>

                    </div>

                    <div className="py-3 text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center " id="3">

                        <div className='flex text-center justify-center'>

                            <span className=' text-white font-bold text-center text-xl'>
                                Needs and Recommendations
                            </span>
                        </div>
                        <div className='w-full'>
                            <p>
                                The MPO has synthesized transportation
                                system needs and developed a series
                                of recommendations with supporting
                                actions for each mode of transportation,
                                as well as transportation demand
                                management (TDM) and
                                transportation system management
                                (TSM). Recommendations are
                                largely focused on optimizing
                                the use and capacity of existing
                                facilities, and improving land use
                                and transportation integration.
                                Recommendations are based on:
                                analysis of the existing transportation
                                network condition and performance;
                                prior and ongoing transportation
                                planning eforts by the MPO and
                                implementing agencies; travel
                                forecasts accounting for future
                                growth; and input received from
                                stakeholders and the public through
                                public engagement activities.
                                Implementing agencies, including
                                WisDOT, Dane County, and local
                                governments, are encouraged to
                                use the following recommendations
                                when undertaking planning eforts and
                                implementing specifc transportation
                                projects to ensure regional continuity of the
                                transportation system and support regional
                                transportation plan goals.
                                The discussion of needs, recommendations,
                                and supporting actions are organized by
                                topic area and mode in the order listed below
                                with the recommendations and supporting
                                actions/strategies highlighted in the tables.
                                Appendix A contains a complete table of the
                                recommendations and supporting actions.
                                Needs and recommendations are organized
                                as follows:
                            </p>
                            <img
                                src={road}
                                className='py-2 object-cover w-full'
                            >
                            </img>
                            <p className=' py-2'>
                                • Land use and Transportation Integration
                                <br></br>
                                • Roadways
                                <br></br>
                                • Transportation System Management and
                                Operations (TSMO) and Technology
                                <br></br>
                                • Public
                                Transit
                                <br></br>
                                • Specialized Transit
                                <br></br>
                                • Bicycles
                                <br></br>
                                • Pedestrians
                                <br></br>
                                • Travel Demand Management (TDM)
                                <br></br>
                                • Parking
                                <br></br>
                                • Inter-Regional Travel
                                <br></br>
                                • Freight, Air, and Rail
                                <br></br>
                            </p>
                        </div>

                        <div className='space-y-4'>
                            <span className=' text-orange-800 text-xl'>
                                Land Use and
                                Transportation
                                Integration
                            </span>
                            <p>
                                Though this is a transportation plan, land
                                use and transportation are intrinsically and
                                inextricably related. The role of transportation
                                is to connect people with opportunities,
                                services, goods, and other resources. In order
                                for transportation policies and investments
                                to be successful in achieving this, they must
                                be coupled with land use plans, policies,
                                and implementing ordinances that support
                                the transportation system goals and plan,
                                and recognize the importance of spatial or
                                geographic proximity, layout, and design
                                of land uses. Dispersed, low-density land
                                use patterns and single use developments
                                increase demand for transportation
                                because of greater travel distances. This
                                increases automobile dependency for
                                accessing economic opportunities and
                                needs, thereby placing other travel modes
                                at a disadvantage. Location-efcient
                                development with a balance of mixed uses
                                and pedestrian oriented design provides easy
                                access to desired destinations and reduces
                                people’s transportation costs by making
                                alternative travel modes more convenient
                                and economical.
                                Increasing access to jobs, housing, and
                                services for all people is one of the top
                                priorities of the Capital Area Regional
                                Planning Commission’s (CARPC) 2050
                                Regional Development Framework (RDF)
                                with supporting objectives of increasing the
                                percent of development that is compact,
                                mixed-use, walkable, and where feasible,
                                transit supportive and supporting job growth
                                in identifed areas. Key RDF strategies for
                                achieving this goal are focusing growth in
                                centers and multimodal corridors connected
                                by transit and prioritizing growth in already
                                developed areas. See Figure 4-b for Land Use
                                Recommendations and Supporting Actions.
                            </p>

                            <img

                                src={Figure_4_b_Land_Use_and_Transportation_Recommendations_and_Supporting_Actions}
                                className='py-4 object-cover w-full'
                            ></img>
                        </div>
                    </div>

                    <div className="py-3 text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center " id="4">
                        <div className='flex text-center justify-center'>

                            <span className='py-2 text-white font-bold text-center text-xl'>
                                Evaluating Plan Progress
                            </span>
                        </div>

                        <div className=''>

                            <p className=''>
                                The Infrastructure Investment and Jobs
                                Act (IIJA) requires MPOs to develop
                                a system performance report, and
                                monitor and evaluate federally required
                                performance targets as part of integrating
                                a performance-based planning approach
                                into the development and implementation
                                of the RTP. The System Performance Report
                                can be found in Appendix B. Beyond the federally required measures, the MPO
                                has developed supplemental measures to
                                measure and evaluate regional priorities.
                                It is anticipated that the list of performance
                                measures will evolve over time as new data
                                and measurement techniques become
                                available. The current federal and regional
                                measures are listed in Figure 4-o and 4-p.
                                The tracking, evaluation, and reporting of
                                these performance measures and targets
                                will be used to gauge progress in achieving
                                the national and regional goals, help to
                                further inform decisions about investments
                                and strategies, and will describe how well the regional transportation system is performing
                                over time.
                                The MPO began producing an annual
                                performance measures report in 2015 to
                                track regional performance, including the
                                federally required performance measure
                                in accordance with federal guidelines. The
                                development of the annual performance
                                measures report was temporarily halted
                                in 2020 due to the signifcant impacts of
                                Covid-19. The MPO will resume tracking
                                performance measures in 2022 in an
                                interactive online format.
                            </p>

                        </div>

                        <div className='flex flex-col items-center'>
                            <img

                                src={Figure_4_o_Federal_Transportation_Performance_Measures}
                                className='object-cover w-full'
                            >
                            </img>
                            <img

                                src={Figure_4_o_Federal_Transportation_Performance_Measures2}
                                className='object-cover w-full '
                            >
                            </img>
                            <img
                                src={Figure_4_p_Supplemental_RTP_Performance_Measures}
                                className='object-cover w-full '
                            >
                            </img>
                        </div>
                    </div>


                </div>

            </div>




        </motion.div >
    )
}

export default OurSystemsTommarow
