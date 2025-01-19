
import React, { useEffect, useState } from 'react'


import { motion } from 'motion/react'

import system_today_img from '../assets/System_todays_photos/system_today_photo.png'

import man_with_cycle_road from '../assets/System_todays_photos/man_with_cycle_road.png'
import Map_3_a_2020_Roadway_Functional_Classifcation_System_2020 from '../assets/System_todays_photos/Map 3-a 2020 Roadway Functional Classifcation System (2020) .png'
import walking_on_road from '../assets/System_todays_photos/walking_on_road.png'
import Map_3_b_National_Highway_System_2020 from '../assets/System_todays_photos/Map 3-b National Highway System 2020 .png'


import Figure_3_a_PASER_Ratings_and_Corresponding_Treatments from '../assets/System_todays_photos/Figure 3-a PASER Ratings and Corresponding Treatments.png'

import cars_on_road from '../assets/System_todays_photos/cars_on_road.png'
import Map_3_c_Pavement_Condition_PCI_PASER from '../assets/System_todays_photos/_Map 3-c Pavement Condition - PCI_PASER .png'

import Figure_3_b_Bridge_Condition from '../assets/System_todays_photos/Figure 3-b Bridge Condition.png'

import Map_3_d_Bridge_Condition from '../assets/System_todays_photos/Map 3-d Bridge Condition .png'

import Map_3_f_2019_Roadway_Congestion from '../assets/System_todays_photos/Map 3-f 2019 Roadway Congestion .png'

import Map_3_m_EV_Charging_Stations
    from '../assets/System_todays_photos/Map 3-m EV Charging Stations.png'


import Figure_3_h_Annual_Fixed_Route_Ridership_1970_2020
    from '../assets/System_todays_photos/Figure 3-h Annual Fixed Route Ridership 1970-2020 .png'

import Map_3_o_Draft_Network_Plan
    from '../assets/System_todays_photos/Map 3-o Draft Network Plan.png'

import Map_3_p_2019_Dane_County_Senior_Focal_Points from '../assets/System_todays_photos/Map 3-p 2019 Dane County Senior Focal Points.png'
import bicycle_on_road from '../assets/System_todays_photos/bicycle_on_road.png'

import Map_3_q_Bicycle_Facilities from '../assets/System_todays_photos/Map 3-q Bicycle Facilities .png'


import Map_3_t_Urban_Arterial_and_Collector_Roads_with_Sidewalks
    from '../assets/System_todays_photos/Map 3-t Urban Arterial and Collector Roads with Sidewalks.png'


import Map_3_u_Pedestrian_Barriers_and_Intersection_Density_Pedestrian
    from '../assets/System_todays_photos/Map 3-u Pedestrian Barriers and Intersection Density. Pedestrian .png'

import Map_3_v_Existing_Park_and_Ride_Lots
    from '../assets/System_todays_photos/Map 3-v Existing Park and Ride Lots.png'


import Map_3_w_Intercity_Bus_Stops from '../assets/System_todays_photos/Map 3-w Intercity Bus Stops .png'

import Map_3_x_Amtrak_Connects_US
    from '../assets/System_todays_photos/Map 3-x Amtrak Connects US.png'

import Map_3_y_SCWCTS_Candidate_Rail_Corridor_Links
    from '../assets/System_todays_photos/Map 3-y SCWCTS Candidate Rail Corridor Links .png'

import Figure_3_p_Dane_County_Freight_Tonnage_2019 from '../assets/System_todays_photos/Figure 3-p Dane County Freight Tonnage 2019 .png'

import Figure_3_q_Dane_County_Freight_Value_2019
    from '../assets/System_todays_photos/Figure 3-q Dane County Freight Value 2019 .png'

import Map_3_aa_Truck_Routes_and_Truck_Volume_2019
    from '../assets/System_todays_photos/Map 3-aa Truck Routes and Truck Volume 2019 .png'
const links = [


    { id: '1', text: 'Roadways' },
    { id: '2', text: 'Public Transit' },
    { id: '3', text: 'Bicycles' },
    { id: '4', text: 'Pedestrians' },
    { id: '5', text: 'Transportation Demand Management and Ridesharing' },
    { id: '6', text: 'Inter - Regional Travel' },
    { id: "7", text: "Freight Transportation" }
];





function SystemToday() {
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
            <div className="w-full relative sm:w-full sm:h-fit pt-32 sm:pt-0 overflow-y-auto no-scrollbar md:w-full lg:h-full p-2 lg:flex lg:justify-center">
                <div className='lg:w-[35vw] p-2 h-fit bg-black'>



                    <div id="image-section" className="object-cover  scroll-section">
                        <img src={system_today_img} alt="Summary Background" />
                    </div>


                    <div className='space-y-4
                    '>
                        <span className='text-2xl text-white font-bold'>
                            Our Transportation
                            System Today
                        </span>
                        <p>

                            The following sections describe the
                            existing conditions of the greater Madison
                            region transportation system. To view the
                            region’s progress towards achieving the
                            adopted targets of the federally required
                            transportation performance measures please
                            see Appendix B.
                        </p>
                    </div>

                    <div className=" text-white sm:text-xl  md:text-white scroll-section flex flex-col items-center justify-center" id="1">


                        <div className='flex flex-col justify-center w-full items-center'>

                            <div>

                                <span className='text-white font-bold text-center text-2xl p-4'>Roadways


                                </span>
                            </div>


                            <p className='p-4'>
                                Streets and highways form the
                                foundation of the transportation
                                system. Aside from limited-access
                                freeways, roadways must be designed to
                                accommodate safe, convenient travel by
                                buses, bicyclists, and pedestrians, as well as
                                motorists. In addition to travel, streets play a
                                role in public life and the way we experience
                                cities. As the National Association of City
                                Transportation Ofcials (NACTO) notes, they
                                are the lifeblood of our communities and the
                                foundation of our urban economies.
                                There are over 2,900 miles of public
                                roadways in the MPO Planning Area and
                                380 bridges. Roads are critical to virtually
                                all freight moving to and from locations in
                                Dane County. In 2019, 98% of Dane County’s freight tonnage and 90% of its freight value
                                moved exclusively by truck. The remainder,
                                which moves by other modes for part of its
                                trip, needs to travel by truck on the frst or
                                last legs of its journey. Countywide in 2019,
                                the roadway system carried an estimated
                                14.4 million vehicle miles of travel each day.
                                Roadways also have both direct and indirect
                                impacts on the natural environment that must
                                be considered in planning eforts and facility
                                design.
                                Streets and highways provide connectivity
                                to jobs, homes, shops, parks, and other
                                opportunities. The physical design
                                characteristics of each roadway play a
                                signifcant role in its safety, operational
                                performance, and ability to accommodate
                                diferent transportation modes. As an
                                infrastructure asset, the roadway system
                                requires maintenance to remain in
                                acceptable condition.
                                <br></br>
                                The Madison area has a uniquely constrained
                                roadway system due to the natural
                                geography of the area, with the City of
                                Madison’s downtown sitting on an isthmus.
                                The City of Madison, founded in 1848, is a
                                master planned community built on a tight
                                grid of streets around what we now know
                                as the Capitol Square. High-volume arterial
                                streets radiate from the square and connect
                                to a number of State and Interstate Highways,
                                including the Beltline (U.S. Highways (USH)
                                12, 14, 18, and 151), Stoughton Road (USH 51),
                                and I-39/90/94. Unlike many urban areas,
                                downtown Madison is located of the freeway
                                and expressway network. This has greatly
                                contributed to the livability of the downtown,
                                but also made trafc circulation more
                                challenging, increasing the importance of
                                travel demand management and operational
                                strategies for mitigating congestion. Many
                                suburban communities surrounding Madison
                                were founded in the late 1800s, and contain
                                a similarly dense street grid in their historic
                                cores.
                                Roadway development patterns changed
                                across the United States after World War II.
                                America built most of its early highway
                                and freeway infrastructure during this time,
                                leading to the rise of suburbanization. Terms
                                like roadway hierarchy became part of the
                                planning lexicon, and curvilinear streets
                                and cul-de-sacs became the norm for new
                                neighborhood design. The Madison area
                                was no exception to national trends. The
                                construction of the Beltline Highway facilitated
                                growth in areas further from the urban
                                core, including the suburbs. Conceived and
                                approved in 1944, the Beltline opened as a
                                2-lane highway in 1949.
                                In the 1950s, intersections with the Beltline
                                were steadily converted into interchanges
                                and portions of the road widened to four
                                lanes. In the 1970s, portions of the roadway
                                were expanded to six lanes. In 2022, WisDOT
                                will complete work on the Flex Lane project on
                                the Beltline, which will allow peak-period use
                                of the Beltline Highway’s interior shoulders,
                                thereby providing an extra travel lane in each
                                direction.
                                The COVID-19 pandemic has changed
                                driving behavior. Prior to the pandemic, travel demand during the AM and PM peak periods
                                was signifcantly higher than midday travel.
                                With the increase in telework, those peaks
                                have fattened somewhat, especially the AM
                                peak with trafc now distributed more evenly
                                throughout the day. The reduced peak trafc
                                volumes as a result of increased teleworking
                                could help to reduce the need for capacity
                                expansion in the future.
                            </p>




                        </div>


                        <div className='py-2'>
                            <span className='text-orange-500 text-xl font-semibold'>ROADWAY FUNCTIONAL CLASSIFICATION
                                SYSTEM
                            </span>


                            <p className='p-4'>
                                The Federal-Aid Highway Act of 1973, as
                                amended, requires the use of a functional
                                highway classifcation to update and modify
                                the Federal-aid highway system. Functional
                                classifcation defnes the role the roadway
                                plays (mobility, connectivity, accessibility) in
                                serving motor vehicle travel needs through
                                the regional roadway network. Functional
                                classifcation carries with it some expectations
                                about roadway design, including its speed,
                                capacity and relationship to existing and
                                future land use development. However,
                                the land use context for roadways and the
                                priority and needs for transit, bicyclists, and
                                pedestrians must also be considered in
                                designing roadways and their operations.
                                The Federal Functional Classifcation system
                                divides roadways into two groups – urban
                                and rural – based upon whether or not the
                                roadway is located within the urban area
                                boundary of a metropolitan area. The system
                                classifes roadways into the following main
                                categories:
                            </p>

                            <p className='p-2'>
                                • Principal Arterials, which include the
                                Interstate, other access restricted freeways
                                and expressways, and other high trafc
                                volume roadways serving the longest
                                trips and the major regional centers and
                                facilities;
                                <br></br>
                                • Minor Arterials, which connect and
                                augment the principal arterials, serve
                                moderate distance trips and community
                                land uses;
                                <br></br>
                                • Collectors, which connect neighborhoods
                                to the arterials, serving more of an access
                                function and shorter trips connecting to
                                neighborhood facilities; and
                                <br></br>
                                • Local Roads, which serve primarily an
                                access function for homes and businesses.
                            </p>
                            <p className='p-2'>
                                Federal legislation uses functional
                                classifcation in determining eligibility for
                                funding under the Federal-aid program. All
                                roadways classifed as a rural major or urban
                                collector or higher are eligible for federal
                                funding.
                                The MPO coordinates with WisDOT to
                                assign functional classifcations to roadways
                                in the urban area, while WisDOT assigns
                                functional classes to roadways in the rural
                                area. Roadways are classifed according
                                to average daily trafc (ADT) volume,
                                population of the area, land uses served,
                                spacing criteria, and supplemental criteria
                                (e.g., whether bus or truck route and trafc
                                control). In addition, rural-urban interface is
                                considered, which ensures the connectivity of
                                routes from rural areas into urban areas.Map 3-a shows the functionally classifed
                                roadway system in Dane County as approved
                                in 2015. The map is updated every ten years.
                            </p>

                        </div>


                        <div className='py-2'>
                            <span className='p-2 text-xl text-orange-800'>
                                STREET TYPOLOGY
                            </span>

                            <div className='flex lg:flex-col flex-col items-center'>

                                <p className='p-2'>

                                    The functional classifcation system only
                                    addresses how roadways are being used
                                    by motor vehicle trafc.
                                </p>
                                <img
                                    className='p-4'
                                    src={man_with_cycle_road}
                                >
                                </img>
                            </div>
                        </div>

                        <div className='py-2'>
                            <img
                                className='p-2 object-cover w-full'
                                src={Map_3_a_2020_Roadway_Functional_Classifcation_System_2020}></img>
                        </div>

                        <div className='flex lg:flex-col flex-col items-center py-2'>
                            <p>
                                with its Complete Green Streets policy.
                                The policy is based on putting people frst,
                                supporting community, fostering sustainability,
                                and achieving equity. A draft street typology
                                was developed, which classifes streets by
                                the land use context, target speeds, and
                                equity issues and relates those to functional
                                class. The project also includes identifying a
                                modal (transit, bike, auto) priority network
                                as a tool for balancing needs when (re)
                                designing streets. For more information, see
                                the project website at this link:
                                <br></br>
                                <a
                                    className='text-blue-600 underline'
                                    target='_blank'
                                    href=' https://www.cityofmadison.com/transportation/initiatives/complete-green-streets'>

                                    https://www.
                                    cityofmadison.com/transportation/initiatives/
                                    complete-green-streets.
                                </a>
                            </p>

                            <img
                                className='p-3'
                                src={walking_on_road}
                            >
                            </img>
                        </div>

                        <div className='space-y-4 py-2'>

                            <span className='text-orange-600 text-xl p-2'>
                                NATIONAL HIGHWAY SYSTEM
                            </span>
                            <p className='py-2'>
                                The National Highway System consists
                                of roadways important to the nation’s
                                economy, defense, and mobility. The NHS
                                was developed by the Department of
                                Transportation (DOT) in cooperation with
                                the states, local ofcials, and metropolitan
                                planning organizations (MPOs).
                                The National Highway System (NHS) includes
                                the following subsystems of roadways:
                                <br>
                                </br>

                                • Interstate
                                <br></br>
                                • Other Principal Arterials
                                <br></br>
                                • Strategic Highway Network (STRAHNET),
                                which includes highways important to the
                                United States’ strategic defense, providing
                                access, continuity and emergency
                                capabilities for defense purposes.
                                <br></br>
                                • Intermodal Connectors, which provide
                                access between major intermodal facilities
                                and the other subsystems making up the
                                NHS.
                                <br></br>
                                The MPO Planning Area contains a total of
                                158 NHS Interstate Highway lane miles, 463
                                non-Interstate NHS US/State highway lane
                                miles, and 88 local road NHS lane miles. The
                                National Highway System is shown in Map
                                3-b.
                            </p>

                        </div>

                        <div className='space-y-4 '>
                            <span className='text-orange-800 p-2 text-xl'>ROADWAY JURISDICTION </span>

                            <p className='p-6'>
                                <p className='p-4'>Roadway jurisdiction indicates which
                                    agency or community owns the road and is
                                    responsible for construction, maintenance,
                                    and operations. Roadway jurisdiction of
                                    the regional roadway network, including all arterials and collectors, is generally
                                    categorized in the following systems:</p>
                                <br></br>
                                <br></br>
                                State Highway System: The state highway
                                system consists of all highways under the
                                jurisdiction of the Wisconsin Department
                                of Transportation (WisDOT), including
                                Interstate highways, U.S. Highways, and
                                all other state highways, referred to as
                                State Trunk Highways. 36% of the regional
                                roadway system centerline miles are under
                                WisDOT jurisdiction.
                                <br></br>
                                <br></br>
                                • Connecting Highway System: Connecting
                                highways are technically local roads
                                that run through developed portions
                                of cities and villages and connect to
                                and are signed as state highways. The
                                state maintains responsibility for their
                                reconstruction, when needed, but ongoing
                                maintenance is the responsibility of
                                the municipality. Municipalities receive
                                connecting highway aids to ofset this
                                maintenance cost. 1% of the regional
                                roadway network are connecting
                                highways, including East Washington Ave.,
                                Northport Dr. and Packers Ave., and S. Park
                                Street.
                                <br></br>
                                <br></br>
                                • County Trunk Highway System: The
                                county trunk highway system contains
                                public roads under the jurisdiction of
                                and maintained by Dane County. 29% of
                                the regional roadway system centerline
                                miles are under Dane County jurisdiction.
                                That percentage has been decreasing
                                as segments of county highways in cities
                                and villages have been transferred to the
                                <br></br>
                                <br></br>
                                municipality following reconstruction per
                                agreement with the county.
                                • Municipal Street System: The municipal
                                street system includes public roads and
                                streets within the limits of municipalities,
                                except those on the federal, state, and
                                county systems and connecting highways.
                                34% of the regional roadway system
                                centerline miles are under the jurisdiction
                                of local municipalities.
                                <br>
                                </br>
                                In some instances, an entity with roadway
                                jurisdiction may enter into an agreement to
                                have another agency perform maintenance,
                                manage operations, or provide snow removal
                                services; however, the agency with jurisdiction
                                over the roadway is ultimately responsible
                                for ensuring the maintenance is performed
                                in a satisfactory manner. For example, Dane
                                County performs all snow removal on the
                                Beltline and Interstate per contract with
                                the state, which are both under WisDOT
                                jurisdiction.

                            </p>

                            <img
                                src={Map_3_b_National_Highway_System_2020}
                                className='p-4 object-cover w-full'
                            >

                            </img>

                        </div>

                        <div className='space-y-4 '>
                            <span className='text-orange-800 p-2 text-xl'>PAVEMENT CONDITION

                            </span>
                            <p>
                                The useful life of a roadway can be extended,
                                and costs can be minimized, by implementing
                                appropriate preservation treatments
                                throughout the pavement’s lifecycle. Selecting
                                the right pavement preservation treatments
                                requires understanding current pavement
                                conditions and where the roadway is in its
                                lifecycle. There are three primary measures
                                used to evaluate pavements in Wisconsin:
                                the Pavement Surface Evaluation and
                                Rating (PASER) system, the Pavement

                            </p>
                            <img
                                className='p-4 w-full object-cover'
                                src={Figure_3_a_PASER_Ratings_and_Corresponding_Treatments}
                            ></img>

                            <div className='flex lg:flex-col flex-col items-center'>

                                <p className='p-3'>
                                    Condition Index (PCI), and the federal
                                    measure, required under the federal surface
                                    transportation program.
                                    The Pavement Surface Evaluation and
                                    Rating (PASER) system is used to assist local
                                    communities in evaluating the condition
                                    of municipal roadways. The PASER rating
                                    system was developed by researchers at
                                    the University of Wisconsin-Madison to be a
                                    quick, comparable way to evaluate surface
                                    conditions of pavement. The system rates
                                    pavements along a scale from 1-10 and
                                    prescribes treatment options accordingly, as
                                    shown in Figure 3-a.
                                    For state roadways, WisDOT uses the more
                                    sophisticated Pavement Condition Index
                                    (PCI) to evaluate pavement condition. PCI
                                    was developed by the United States Army
                                    Corps of Engineers, and uses a visual survey
                                    to measure the distress of pavement. This
                                    widely utilized method of pavement condition
                                    measurement factors in twenty diferent
                                    pavement distress types (e.g., diferent
                                    cracking types, rutting, potholes, etc.) In addition to these pavement distress
                                    types, PCI rates distress in jointed concrete
                                    pavements. The system rates pavements
                                </p>
                                <img
                                    src={cars_on_road}
                                    className='object-cover'
                                >
                                </img>


                            </div>
                            <div className='flex w-full justify-center items-center flex-col'>
                                <p className='p-2'>
                                    along a scale of 0-100 in which 0 is the worst
                                    possible roadway condition and 100 is a new
                                    roadway. For simplicity, this scale has been
                                    converted to the PASER scale where used in
                                    the RTP. Map 3-c details pavement condition
                                    in the MPO planning area.
                                    Generally, roadways with a pavement
                                    condition of “fair” or worse are nearing the
                                    end of their repairable life. Lower volume
                                    roads routinely fall into this category, while
                                    high-volume, regional mobility corridors
                                    rarely do. In 2019/2020, pavement condition
                                    in the MPO Planning area varied by facility
                                    type:
                                    <br></br>
                                    • 100% of the Interstate highway system was
                                    in good to excellent condition
                                    <br></br>
                                    • 87% of the US highway system was in good
                                    to excellent condition
                                    <br></br>
                                    • 90% of the state highway system was in
                                    good to excellent condition
                                    <br></br>
                                    • 58% of county and municipal arterial and
                                    collector roads were in good to excellent
                                    condition.
                                    <br></br>
                                    Some of the regional roadways in the poorest
                                    condition in 2019 include:
                                    <br></br>
                                    • State Trunk Highway (STH) 113 from
                                    Kennedy Road to the STH 19 (very poor to
                                    fair) – Pavement replacement scheduled
                                    for 2023
                                    <br></br>
                                    • STH 113 north of STH 19 (very poor to fair) –
                                    Pavement replacement scheduled for 2024
                                    <br></br>
                                    • US Highway (USH) 14 from
                                    the Beltline to Cross Plains
                                    (very poor to poor) – Mill
                                    and overlay completed in
                                    2020
                                    <br></br>
                                    • S. Blair Street/USH 151 (very
                                    poor) – Concrete repair
                                    and overlay scheduled for
                                    2022
                                    <br></br>
                                    • S. Park/USH 151 (South of
                                    Olin Ave.) (fair to very poor)
                                    – Concrete repair and
                                    overlay scheduled for 2022
                                    <br>
                                    </br>
                                    The federal pavement
                                    condition performance
                                    measures, required under the
                                    surface transportation bill,
                                    are based on four metrics:
                                    roughness, cracking, rutting,
                                    and faulting. These metrics
                                    are combined to yield a
                                    condition rating that forms
                                    the basis of the performance
                                    measure. States and MPOs
                                    are required to report the percentage of
                                    Interstate and non-Interstate NHS roadway
                                    lane miles in good and poor condition.
                                    These performance measures were codifed
                                    several years ago but, until recently, full
                                    data has been available only for roughness,
                                    measured using the International Roughness
                                    Index (IRI). Transportation planners and
                                    engineers in the Madison area found the use
                                    of IRI alone to be a less useful measure than
                                    PASER/PCI.


                                </p>
                            </div>
                            <div className='flex  flex-col justify-center items-center w-full'>
                                <img
                                    src={Map_3_c_Pavement_Condition_PCI_PASER}
                                ></img>
                                <p>
                                    An analysis of pavement condition in the
                                    Madison area is also included in Chapter 5.
                                </p>
                            </div>



                        </div>


                        <div className='space-y-6 '>
                            <span className='text-orange-700 p-2 tetx-xl 
                        '>
                                BRIDGE CONDITION
                            </span>

                            <div className='p-2'>
                                <p>
                                    The Federal Highway Administration (FHWA)
                                    compiles the National Bridge Inventory (NBI),
                                    a database with information about every
                                    bridge in the US. The federally required
                                    bridge condition performance measures—
                                    percentage of NHS bridges in good and poor
                                    condition—are based on deck, superstructure,
                                    substructure, and culvert condition ratings in the NBI. A bridge’s condition is determined by
                                    its lowest rated element. If the lowest rating
                                    is at least 7, the bridge is classifed as good;
                                    if it is 3 or below, the bridge is classifed as
                                    poor. Bridges with their lowest rating between
                                    4 and 6, are classifed as fair. The federal
                                    performance measure is calculated based on
                                    bridge deck area, rather than the number of
                                    bridges in each category.
                                    By deck area, 49% of bridges in the
                                    metropolitan area are in good condition and
                                    1% are in poor condition. The condition of NHS
                                    and non-NHS bridges is shown in Figure 3-b.
                                    Map 3-d shows the location and condition of
                                    both NHS and non-NHS bridges in the area.
                                    A total of 17 bridges in the metropolitan
                                    area were rated as being in poor condition
                                    following inspections in late 2019, including
                                    the following:
                                    <br></br>
                                    • Century Ave./CTH M at Pheasant Branch
                                    Creek – Bridge replacement scheduled for
                                    2022 pending federal grant
                                    <br></br>
                                    • STH 30 (WB) at Fair Oaks Ave – Deck
                                    overlay scheduled for 2023
                                    • US 14 at STH 138
                                    <br></br>
                                    • CTH N at Little Door Creek
                                    <br></br>
                                    • Hoepker Rd. at I-39/90/94
                                    <br></br>
                                    • CTH KP at Black Earth Creek – Bridge
                                    replacement scheduled for 2023
                                    <br></br>
                                    • Windsor Rd at the Yahara River – Bridge
                                    replacement scheduled for 2022
                                    • CTH T at Koshkonong Creek
                                    <br></br>
                                    • STH 19 at the Yahara River
                                    – Bridge replacement
                                    completed 2020
                                    <br></br>
                                    • CTH MN at Door Creek
                                    <br></br>
                                    • CTH BB at Koshkonong
                                    Creek
                                    <br></br>
                                    • Femrite Dr at Door Creek
                                    <br></br>
                                </p>
                            </div>



                        </div>

                        <div className='space-y-6 '>
                            <span className='text-orange-700 p-4 text-xl'>

                                TRAFFIC VOLUMES
                            </span>

                            <div className='flex flex-col items-center justify-center'>
                                <p className='p-2'>
                                    Between 2010 and 2019, vehicle
                                    miles of travel (VMT) increased
                                    about 8.5% or an average of
                                    a little less than 1% annually,
                                    as shown in Figure 3-c. The
                                    increase is largely due to
                                    population and employment
                                    growth.
                                    VMT decreased 15% in
                                    2020, due to the COVID-19
                                    pandemic. VMT has largely,
                                    but not completely rebounded
                                    since then based on data
                                    collected by the MPO, but
                                    with continued high levels of
                                    teleworking trips are more
                                    spread out during the day
                                    with more made from home
                                    rather than as part of the
                                    work trip.
                                    The most signifcant trafc
                                    growth over the past 30 years
                                    has occurred on the Beltline
                                    between Verona Road and
                                    I-39/90 and on I-39/90
                                    between the Beltline and USH

                                </p>
                                <img
                                    className='p-6 w-full object-cover'
                                    src={Figure_3_b_Bridge_Condition}
                                ></img>

                                <img
                                    className='p-6 object-cover w-full'
                                    src={Map_3_d_Bridge_Condition}
                                >
                                </img>

                                <img
                                    className='p-6 w-full object-cover'
                                    src={Map_3_f_2019_Roadway_Congestion}
                                >
                                </img>
                            </div>


                        </div>
                    </div>



                    <div className="py-2 text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="2">
                        <div className='space-y-6 p-4'>
                            <span className='p-2 text-white text-2xl '>
                                Public Transit
                            </span>


                        </div>

                        <div className='p-4 text-orange-700 text-xl'>

                            <span className='p-4'>
                                TRANSIT SERVICE PROVIDERS
                            </span>
                            <p>
                                Metro Transit, operated by the City
                                of Madison, provides the majority of public
                                transportation service in the Madison
                                metropolitan area. The agency contracts with
                                the cities of Middleton, Fitchburg, Sun Prairie,
                                and Verona, as well as the University of
                                Wisconsin and other entities to provide service
                                outside the City of Madison. Metro operates
                                a feet of about 215 fxed-route buses, as
                                well as contractor-provided point-to-point
                            </p>
                            <img className='p-4 object-cover w-full'
                                src={Map_3_m_EV_Charging_Stations}
                            >
                            </img>
                            <p>
                                paratransit service for qualifying people with
                                disabilities.
                                As shown in Figure 3-h, ridership on Metro
                                Transit increased rapidly following the City
                                of Madison’s acquisition of the Madison Bus
                                Company in 1970, spurred by spiking oil prices
                                in the 1970s, peaking in 1979. Throughout the
                                1980s ridership declined before beginning
                                a period of moderate growth in the 1990s
                                that accelerated in 2000s, reaching a
                                high of 15.2 million in 2014. Ridership then began a decline, exacerbated by
                                the COVID-19 pandemic—which
                                reduced annual ridership to less
                                than 37% of pre-pandemic levels in
                                2020. The causes and implications
                                of the pre-COVID decline are
                                unclear but may be linked to lower
                                gasoline prices and the rise of
                                ride-hailing services such as Lyft
                                and Uber. The increase in remote
                                work that followed safer-at-home
                                orders responding to the COVID-19
                                pandemic is likely to have a longterm impact on ridership, as many
                                employers are expected to continue
                                to allow part-time and in some
                                cases full-time remote work in the
                                post-COVID future. Even so, April
                                2021 saw year-over-year increases
                                in ridership from April 2020—the
                                frst month with a year-over-year
                                increase since the pandemic began
                                in March 2020.
                                In addition to Metro Transit, the
                                City of Monona operates Monona Express,
                                a fxed-route commuter service during the
                                morning and afternoon peak periods, and
                                Monona Lift, designed primarily to provide
                                transportation for seniors and people with
                                disabilities during mid-day hours. Monona
                                Express operates in a counter-clockwise loop
                                around Lake Monona in the morning and
                                a clockwise loop in the evening. Service is
                                only provided to passengers travelling within
                                Monona or between Monona and Madison.
                            </p>
                        </div>

                        <div>
                            <img src={Figure_3_h_Annual_Fixed_Route_Ridership_1970_2020}

                                className='w-full object-cover p-4'
                            >
                            </img>

                            <p className='p-4 '>
                                Map 3-n shows the transit route system and
                                service area.
                                While other communities lack local fxed route
                                transit service, Sun Prairie and Stoughton
                                ofer publicly subsidized shared-ride taxi
                                service, primarily for intra-city trips. In
                                addition, Sun Prairie is working with Metro
                                and the MPO to design potential local
                                service routes, which would provide transfer
                                opportunities to the local Sun Prairie BRT
                                extension
                            </p>
                        </div>

                        <div>
                            <img

                                className='p-4 w-full object-cover'
                                src={Map_3_o_Draft_Network_Plan}
                            ></img>
                        </div>

                        <div className='p-2 space-y-5'>
                            <span className='p-4 text-orange-700 text-xl'>
                                BUS OPERATIONS
                            </span>
                            <p className='p-4'>
                                Metro Transit dispatches its feet of about
                                220 buses from a single bus storage and
                                operations facility on East Washington Avenue
                                at Ingersoll Street. The facility was renovated
                                in 1981 with the intent of housing a feet of
                                about 160 buses and is currently operating
                                beyond capacity. A multi-phase facility
                                improvement plan began in 2019, with phase
                                3A scheduled to be completed in August 2022.
                                Metro is currently planning and designing the
                                remodel of a new satellite facility on Hanson
                                Road, which will accommodate 96 to 104
                                60-foot articulated buses, as well as providing
                                bus fueling and maintenance lanes, driver
                                spaces, and administrative ofces. This facility
                                will support the Bus Rapid Transit and other
                                fxed-route operations.
                                Metro Transit’s fxed-route feet consists
                                almost entirely of standard-length 40-foot
                                diesel transit buses, about 10% of which are
                                hybrid diesel-electric. Metro took delivery
                                of three electric buses in 2021 that will enter
                                service in 2022. Metro Transit, in coordination
                                with the MPO, conducted a Bus Size Study
                                in 2014 reviewing the feet make-up. The
                                study concluded that although the uniform
                                feet cost-efectively serves the area, the
                                overcrowding problems encountered on
                                several routes could be solved with larger
                                60-foot long articulated buses. Further, a few
                                buses could be replaced with shorter 30-foot
                                buses, although the small number of 30-
                                foot buses combined with similar operating
                                costs would not result in large cost savings.
                                Metro will use new articulated 60-foot buses
                                for the East-West BRT system, as well as the
                                North-South BRT, Middleton, Sun Prairie, and
                                American Center local service extensions.
                            </p>
                        </div>

                        <div className='p-2 space-y-5'>
                            <span className='p-4 text-orange-700 text-xl'>
                                FUNDING
                            </span>
                            <p className='p-4'>
                                Funding for public transportation in the
                                Madison area is derived primarily from four
                                sources – fares, local investments (primarily
                                from property taxes), federal grants, and state
                                operating grants. As Metro Transit is a City
                                of Madison utility, some service, particularly
                                service provided outside the city limits, is
                                funded through partner agreements where
                                other municipalities or institutions cover the
                                local share. Figures 3-i and 3-j show Metro
                                Transit’s Operating and Capital budget
                                funding summaries for 2020.
                                Metro Transit’s funding and governance
                                structure as a city-owned utility is fairly
                                uncommon. A Regional Transit Authority,
                                which would raise revenue in the transit
                                service area, has been explored but is not
                                currently allowed by state law. Enabling
                                legislation was granted in 2009 and
                                rescinded in 2010.
                            </p>
                        </div>

                        <div className='p-4 space-y-4'>
                            <img
                                className='p-2 objetc-cover w-full'

                                src={Map_3_p_2019_Dane_County_Senior_Focal_Points}
                            ></img>
                        </div>






                    </div>



                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="3">
                        <div >
                            <div className='flex justify-center items-center'>

                                <span className='text-white text-2xl p-2 text-center font-bold'>Bicycles</span>

                            </div>
                            <p className=''>
                                The Madison metropolitan area is
                                served by an interconnected bikeway network
                                consisting of of-street shared-use paths,
                                on-street bike lanes, and local street networks.
                                Bikeway construction began in earnest
                                in the 1990s and most roadway projects
                                now feature provisions for pedestrians and
                                bicyclists. Several rail and other corridors
                                have been utilized to build high quality
                                shared-use paths.The

                                <a

                                    className='text-blue-500 underline'
                                    href='https://www.greatermadisonmpo.org/planning/BikePlan.cfm' target='_blank'>

                                    2015 Bicycle Transportation Plan
                                </a> -
                                organized components of the bikeway
                                system into a regional network of primary
                                and secondary bicycle routes consisting
                                of on-street and of-street segments. This
                                network helps planners visualize the bikeway
                                network as it is used by cyclists, identify gaps,
                                and prioritize improvements. The Bicycle
                                Transportation Plan identifed regional
                                bicycle infrastructure needs and outlined
                                recommended path segments to improve
                                regional connectivity. Updates were made
                                to the planned regional network as part of
                                the last Regional Transportation Plan (RTP)
                                adopted in 2017 and are being made as part
                                of this RTP update.
                            </p>

                            <img
                                className='py-4 w-full object-cover'
                                src={bicycle_on_road}
                            ></img>
                        </div>

                        <div>
                            <span className='text-orange-700  text-xl'>
                                BICYCLE FACILITIES

                            </span>
                            <p className=''>
                                Bicycle facilities include of-street facilities,
                                most commonly shared-use paths, and onstreet facilities, such as bike lanes and paved
                                shoulders
                            </p>
                            <img

                                className=' w-full object-cover'
                                src={Map_3_q_Bicycle_Facilities}
                            >
                            </img>
                            <p className=''>
                                Shared-use paths are the most comfortable
                                bicycle facilities because they eliminate the
                                need for a bicyclist to interact with trafc
                                outside of street crossings. Shared-use paths
                                are typically built along railroad corridors,
                                street and highway corridors, through parks,
                                and in other locations where land can be
                                secured. However, they often do not provide
                                direct access to homes and businesses.
                                Bike lanes are used on arterial and collector
                                streets to separate bicyclists from trafc. They
                                may be separated from trafc with a bufer
                                space or vertical element like
                                a curb or row of parked cars.
                                Contra-fow bike lanes are
                                used on one-way streets to
                                allow two-way bicycle trafc.
                                Paved shoulders wide enough
                                for bicycle use (ideally 5 feet
                                or more) are used in rural
                                areas where vehicle and
                                bicycle trafc is relatively low.
                                They operate similarly to bike
                                lanes but also provide other
                                benefts, including reducing
                                several crash types, improving
                                roadway drainage, and
                                serving as an emergency
                                stopping space for motor
                                vehicles.
                                New bicycle facilities are
                                generally added during
                                street reconstruction projects,
                                if possible. Bicycle facilities
                                are chosen based on many
                                factors, including the projected
                                usage, safest design, cost, and
                                available space. Map 3-q shows existing
                                bicycle facilities
                            </p>
                        </div>



                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="4">

                        <div className='space-y-4 '>

                            <div className='flex justify-center items-center'>

                                <span className='p-2 text-2xl text-white font-bold'>
                                    EXISTING PEDESTRIAN SYSTEM

                                </span>
                            </div>
                            <p className='
                        '>
                                Pedestrian facilities are important
                                for a safe transportation system that
                                accommodates all users, since virtually
                                all trips by any mode begin and end with
                                walking. Sidewalks provide a separate
                                facility so that people walking and using
                                mobility devices do not need to walk in trafc.
                                Sidewalks also provide access to public
                                transit, increasing transportation options
                                for those who may not be able to drive.
                                Sidewalks on both sides of the street reduce
                                the number of times pedestrians must cross
                                the street and be exposed to trafc. The City
                                of Madison and other communities have
                                programs that routinely retroft sidewalks and
                                crosswalks with curb ramps in street corridors
                                that do not have them and repair sidewalks
                                that are broken, heaved, or do not meet
                                modern standards.All urban streets beneft from sidewalks. They
                                create a healthier community as research
                                has shown people will walk for recreational
                                or other purposes if a facility is provided.
                                Sidewalks, however, are most crucial on
                                urban arterial and collector streets, which
                                have higher trafc speeds and volumes
                                and also serve most destinations like shops,
                                schools, and employment areas. Sidewalks
                                on these streets provide the most safety
                                benefts and also can increase the number
                                of transportation trips made by walking.
                                In addition, shared-use paths are used by
                                pedestrians as an alternative to walking
                                along streets or because they provide shorter
                                paths to destinations.
                                Intersections represent a special barrier
                                for pedestrians not only because they
                            </p>
                            <img
                                src={Map_3_t_Urban_Arterial_and_Collector_Roads_with_Sidewalks}
                                className='py-2 object-cover w-full'
                            >
                            </img>

                            <p className='py-2'>
                                must cross trafc to continue, but also
                                because trafc is frequently turning and
                                drivers may be focusing on several things
                                at once. Motor vehicle trafc is required to
                                yield to pedestrians at most unsignalized
                                intersections, but compliance is limited.
                            </p>
                        </div>

                        <div className='space-y-4  '>
                            <div className=''>

                                <span >
                                    SIDEWALK COVERAGE
                                </span>
                                <p className=''>
                                    The MPO maintains a countywide sidewalk
                                    database in order to track sidewalk coverage.
                                    The database contains information on
                                    whether each public road has a sidewalk or
                                    shared-use path on both sides,
                                    one side, or no sidewalk at all.
                                    It further tracks whether streets
                                    are primarily urban or rural
                                    (sidewalks are not normally
                                    installed on rural roads) and
                                    whether or not sidewalk is
                                    expected due to development
                                    along the street and in the area
                                    and other factors. Sidewalks
                                    are not expected along
                                    freeways, ramps, alleys, or in
                                    parking lots.
                                    In the metropolitan planning
                                    area, about 50% of urban
                                    streets have sidewalks on both
                                    sides, with an additional 15%
                                    having sidewalks on one side.
                                    Sidewalk coverage in the City
                                    of Madison is substantially
                                    greater, with 88% of streets
                                    equipped with sidewalks on at
                                    least one side. Among urban
                                    arterial and collector roads in
                                    the area, shown on Map 3-t,
                                    54% have sidewalks on both sides and an
                                    additional 23% have sidewalks on one side.
                                </p>
                            </div>

                        </div>

                        <div className='space-y-4
                     '>
                            <span
                                className=' text-orange-700
                            text-xl
                            '
                            >

                                THE CHALLENGES AND TRADE-OFFS WITH
                                RETROFITTING SIDEWALKS IN DEVELOPED
                                AREAS
                            </span>

                            <p className='py-2'>
                                Although sidewalks are normally included
                                in new construction in most jurisdictions,
                                installing sidewalks along streets in
                                established neighborhoods is often met with
                                local opposition. Residents may be concerned
                                about several issues, including assessments
                                for sidewalk installation, the need to clear
                                snow and ice in the winter, and the loss of
                                yard area and landscaping.
                                While policies regarding snow and ice
                                clearance are similar across communities
                                in the Madison metropolitan area, policies
                                regarding funding for sidewalk installations
                                in existing neighborhoods vary widely. Some
                                require property owners to pay the entire cost,
                                others fund the entire cost publicly, and some
                                split the cost of new sidewalk construction
                                50/50 with adjacent owners.
                                City of Madison residents are charged a
                                special assessment for 100% of the cost of sidewalk installation and 50% of the cost for
                                repair. Beginning in 2015, the city has ofered
                                a program to reduce the burden of these
                                assessments on low-income residents.

                            </p>

                        </div>

                        <div className='space-y-4 py-2'>
                            <span className='text-orange-700 p-4 text-xl'>
                                BICYCLE AND PEDESTRIAN CRASH STUDY
                            </span>
                            <p>
                                In the 2018 Dane County Bicycle and
                                Pedestrian Crash Study, the MPO identifed
                                common features of crashes in which

                            </p>
                            <img
                                className=' object-cover w-full'
                                src={Map_3_u_Pedestrian_Barriers_and_Intersection_Density_Pedestrian}
                            >
                            </img>
                            <p className=''>
                                barriers are railroad tracks and major roadways that signifcantly inhibit
                                pedestrian travel. Barrier crossings are paths, crosswalks, or roads that
                                enable pedestrian access. Defcient crossings lack adequate safety
                                features or pedestrian facilities, or do not provide sufcient connectivity.
                                pedestrians were struck by motor vehicles
                                and set a benchmark for future safety
                                performance measurement in the Madison
                                metropolitan area and Dane County.
                                During the study period of 2011-2015, there
                                were 552 documented motor vehicle crashes
                                involving pedestrians, 23 (4%) of which
                                were fatal and 79 (14.3%) were classifed as
                                “incapacitating.” The rate of fatalities and
                                incapacitating injuries resulting
                                from these crashes is far
                                higher than from motor vehicle
                                crashes involving bicyclists.
                                Speed was highly correlated
                                with injury severity, with 14 of
                                23 crashes (61%) occurring on
                                roads with speed limits of at
                                least 35 mph, despite these
                                roads accounting for less than
                                20% of reported pedestrian
                                crashes. While the majority
                                of crashes were in central
                                Madison, fatal crashes were
                                more widely distributed.
                                Most crashes occurred at an
                                intersection, and in about 60
                                percent of cases the pedestrian
                                was in a legal crosswalk.
                                Drivers received citations
                                in 49% of these crashes,
                                pedestrians were cited in
                                about 10%, and 1% of crashes
                                resulted in citations for both
                                drivers and pedestrians. In
                                40% of the crashes, no citations
                                were issued.
                            </p>
                        </div>


                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="5">
                        <div className='
                    '>
                            <div className='flex justify-center items-center text-center'>

                                <span className='text-white font-bold text-2xl'>
                                    Transportation
                                    Demand
                                    Management and
                                    Ridesharing
                                </span>
                            </div>
                            <p>
                                Transportation Demand Management (TDM)
                                is generally defned as a set of strategies to
                                reduce roadway congestion, vehicle miles
                                traveled, and demand for single-occupancy
                                vehicle (SOV) use by redistributing demand
                                to alternative travel modes, times, and routes.
                                TDM is implemented through land use
                                policies that support compact, mixed-use
                                development; transportation policies that
                                support safe, connected, multimodal systems;
                                fnancial incentives such as discounted
                                transit passes and priced parking that
                                infuence demand; and public and private
                                sector programs that use education and
                                encouragement to promote behavior change.
                                TDM programs that are administered by
                                public and nonproft entities and applied
                                beyond a single workplace, such as at a
                                district, municipal, or regional scale, have
                                traditionally focused on commuter-based
                                incentives and activities that promote
                                carpooling, vanpooling, public transit
                                and telework, as well as employer-based
                                incentives and marketing aimed at reducing
                                drive-alone commute trips. Today, these
                                programs also promote active transportation
                                such as bicycling and walking, and support transportation behavior change for trips
                                beyond the commute.
                                While TDM involves all modes of nonSOV transportation, this section focuses on
                                ridesharing services, shared mobility options,
                                and incentive and encouragement programs
                                in the Madison region. See other sections in
                                this chapter for more on walking, bicycling,
                                and public transit.
                            </p>

                            <img
                                className=' object-cover w-full'
                                src={Map_3_v_Existing_Park_and_Ride_Lots}>

                            </img>
                        </div>

                        <div>
                            <span className=' text-orange-700 text-xl'>
                                Park and Ride Lots

                            </span>
                            <p className=''>
                                There are twelve formal park and ride lots
                                in Dane County, fve of which are served
                                by Metro Transit (see Map 3-v). Nine are
                                operated by WisDOT; one is jointly operated
                                by WisDOT in partnership with the Wisconsin
                                DNR and Dane County; two are operated
                                by Metro Transit; and one is operated by
                                the City of Sun Prairie. With the planned
                                implementation of bus rapid transit (BRT)
                                and the related transit network redesign in
                                Madison in 2023-2024, the existing North
                                Transfer Point park and ride is proposed to be
                                removed, and a new lot is anticipated on the
                                west end of the BRT line.
                                There are also many informal park-andride locations distributed throughout the
                                region, concentrated along major Metro
                                Transit corridors. These include locations such
                                as neighborhood streets and commercial
                                parking lots.
                            </p>
                        </div>

                        <div className=''>
                            <span className=' text-orange-700 text-xl'>YW Transit JobRide Program</span>
                            <p className=''>
                                In addition to other public transit options
                                including fxed route, specialized transit,
                                and shared ride taxis, the JobRide program
                                operated by YW Transit provides rides for low-income commuters to areas
                                that are inaccessible during non-peak
                                public transportation hours, including
                                nights, weekends, and holidays. For more
                                information on other public transit services
                                in the Madison area, including additional
                                services provided by YW Transit, see the Public
                                Transit section in the chapter.
                            </p>
                        </div>


                        <div className=''>
                            <span className=' text-orange-700 text-xl'>Bike Share</span>
                            <p className=''>
                                Bike share allows users to check out a bicycle
                                at any station in the network, ride to their
                                destination, and park at the closest station.
                                Bike share supports TDM by making it easier
                                for people to make short trips by bicycle,
                                and increasing accessibility by providing an
                                alternative to bicycle ownership.
                                The City of Madison partners with Trek
                                Bicycles to make bike share available through
                                the Madison BCycle program. Madison
                                BCycle launched in 2011 and recently became
                                the frst system in the country to convert
                                entirely to e-bikes. BCycle stations were
                                originally concentrated on the UW campus
                                and in downtown Madison, and have since
                                expanded beyond these areas, including to
                                the frst two stations outside of Madison in
                                2021.
                                Madison BCycle ofers a Corporate Program
                                that allows businesses to subsidize annual
                                memberships for employees and purchase
                                discounted day passes for guests. UWMadison and Madison College students
                                and staf, and staf of UW Extension and
                                UW Health, are all eligible for discounted
                                annual passes. In 2021, BCycle launched a
                                free Community Pass Program to increase
                                accessibility for low-income and unbanked
                                individuals. For more information on the
                                Madison-area BCycle system, see the Bicycle
                                section in this chapter.
                            </p>
                        </div>




                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="6">


                        <div>
                            <span className=' text-white text-2xl '>Inter-Regional Travel </span>


                        </div>

                        <div>

                            <span className=' text-orange-700 textx-xl' >INTER-CITY BUS SERVICE</span>
                            <p className=''>
                                A handful of private inter-city bus companies
                                provide regularly-scheduled bus service open
                                to the public between Madison and major
                                destinations like Milwaukee, Chicago, and
                                Minneapolis/St Paul as well as other cities
                                and points in the region. Prior to the COVID-19
                                pandemic, Badger Bus provided eight round
                                trips per day to Milwaukee with stops in
                                Johnson Creek and Waukesha; these services
                                have been suspended, with Badger Bus
                                currently only ofering the seasonal campus
                                trips described below. Van Galder (Coach
                                USA) provides 12 round trips daily to Chicago
                                with stops in Janesville, Beloit, and Rockford.
                                Megabus (Coach USA) and Greyhound both
                                provide one daily express round trip between
                                Chicago and Minneapolis/St Paul with a stop
                                in Madison; prior to the COVID pandemic
                                both operators ofered multiple daily trips on
                                these routes. FlixBus, a relative newcomer to
                                the U.S. intercity bus market,11 ofers service to
                                Minneapolis and Chicago fve days a week.
                                Lower-volume routes connect smaller cities.
                                Lamers provides daily service on routes
                                between Madison and Dubuque, Green
                                Bay, Appleton, Milwaukee, and Wisconsin
                                Rapids. Jeferson Lines serves Madison and
                                La Crosse on its Milwaukee to Minneapolis
                                route. Operation of these services is partially
                                supported by Wisconsin state intercity bus
                                grants, and federal Section 5311 funding
                                11 Founded in Germany in 2013, initiated Madison service
                                in 2021, and acquired Greyhound in October 2021.
                                supports capital purchases for Jeferson and
                                Lamers Bus Lines. Seasonal limited service
                                between Madison and Whitewater, Eau
                                Claire, and La Crosse/Minneapolis operated
                                by Badger Bus is designed around college
                                and university student weekend travel with
                                two trips each on Friday and Sunday.
                                Map 3-w shows inter-city bus stop locations
                                in the Madison area.
                                Ridership data is not generally available
                                from intercity bus companies, and only
                                Jeferson Lines provided requested ridership
                                numbers for this plan update. Jeferson Lines
                                reports approximately 3,800 total annual
                                2019 combined boardings and alightings in
                                Madison, with the most popular trips being
                                those between Madison and La Crosse,
                                the Twin Cities, Rochester, Winona, and
                                connections to interlined bus networks in
                                locations outside of Wisconsin.
                                Jeferson operates approximately 1 in 20 intercity buses that serve Madison. If their buses
                                are, on average, at the same percentage
                                of capacity as other lines they are carrying
                                approximately 5% of the total inter-city
                                ridership. This means that total inter-city
                                annual ridership would appear to be in the
                                neighborhood of 76,000 trips, or 208 trips
                                daily. Given that these trips are bound for
                                or arriving from nearly every direction, it is
                                unlikely that inter-city buses currently have
                                any impact on congestion through reducing
                                private automobile trafc. Ridership would
                                need to increase by one if not two orders of
                                magnitude in order for these services to have
                                a noticeable impact trafc congestion on any
                                particular roadway or corridor.
                                Investment in high-quality facilities for intercity bus travelers could help boost ridership,
                                so it is conceivable that congestion could
                                be impacted by these services by 2050 -
                                particularly in specifc corridors or areas like
                                the UW campus where so many trips begin
                                or end. Ironically, inter-city buses and related
                                pick-up/drop-of trafc appear to cause
                                congestion at the current UW Lake Street stop
                                location; this problem should be at least partly
                                ameliorated by the planned Lake St. inter-city
                                bus terminal.

                            </p>
                            <img
                                className=' object-cover w-full'
                                src={Map_3_w_Intercity_Bus_Stops}>
                            </img>
                            <p>Based on the shortest trip
                                distance to any of those
                                destinations from Madison
                                (La Crosse, at 142 miles), the
                                3,800 annual trips made to
                                or from Madison on Jeferson
                                Lines alone prevent the release
                                of over 500,000 lbs. of CO2
                                annually, compared to making
                                those trips in single occupant
                                vehicles.12 Given that the
                                majority of destinations served
                                by Jeferson Lines are farther
                                from Madison than La Crosse
                                is, the actual reduction in CO2
                                emissions resulting through use
                                of inter-city bus service is much
                                higher than this conservative
                                estimate. Although the larger
                                bus companies did not provide
                                ridership numbers for this
                                plan, Jeferson Lines operates
                                approximately one in 20 inter
                                -
                                city buses serving Madison,
                                and most destinations served
                                by inter-city buses are further
                                from Madison than La Crosse
                                is.  The public does subsidize some
                                inter-city bus services through the federal
                                Section 5311 Program; for 2022-2026, this
                                annual support amounts to under $1.5 million
                                for area routes.16 </p>
                        </div>

                        <div className='space-y-4 '>
                            <span className='text-orange-700 text-xl'>
                                PASSENGER RAIL SERVICE

                            </span>

                            <p>
                                The nearest passenger rail station with
                                regular public service is the Amtrak station
                                in Columbus, Wisconsin about 26 miles
                                northeast of downtown Madison. This station
                                serves Amtrak’s daily long-distance Empire
                                Builder route serving Chicago, Milwaukee,
                                Minneapolis/St. Paul, Seattle, Portland, and
                                other cities with departures three days a
                                week. Access to Empire Builder trains is limited
                                by stop locations – which include Portage
                                and Wisconsin Dells – and schedules of interregional bus operators serving La Crosse and
                                Columbus.
                                Amtrak also coordinates with inter-regional
                                bus companies and sells integrated tickets
                                on their Thruway Bus service. Thruway bus
                                service allows passengers to buy a single
                                ticket that includes travel on Amtrak’s rail
                                service and certain connecting bus routes.
                                Amtrak’s national network includes a central hub in Chicago, which, along with Van
                                Galder’s Madison-to-Chicago bus service,
                                allows convenient rail travel to many major
                                destinations around the U.S.
                                In addition to its long-distance service with
                                trains generally running daily on routes longer
                                than 750 miles, Amtrak ofers more frequent
                                service on shorter state-supported lines. The
                                Hiawatha Service between Chicago and
                                Milwaukee is one of Amtrak’s more successful
                                state-supported routes with about seven
                                daily round trips and 876,356 passenger
                                boardings in 2019.18 Due to the Coronavirus
                            </p>
                            <img
                                src={Map_3_x_Amtrak_Connects_US}
                                className=' object-cover w-full'
                            ></img>

                            <img
                                src={Map_3_y_SCWCTS_Candidate_Rail_Corridor_Links}
                                className='object-cover  w-full'>

                            </img>
                        </div>



                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="7">
                        <div>
                            <span className=' text-white text-2xl' >
                                Freight Transportation
                            </span>

                        </div>

                        <div className=''>
                            <span className=' text-orange-700 text-xl'>
                                FREIGHT MOVEMENT

                            </span>
                            <p className=''>

                                The region’s economic prosperity
                                depends on the efcient movement of freight.
                                Freight transportation is a key factor in the
                                efciency, productivity, and proftability of
                                most businesses, and is critical to economic
                                growth.
                                In recent years, a shift towards online
                                shopping from traditional brick-andmotor stores has had a major impact on
                                the way freight moves in the community. It
                                has fundamentally changed the last stage
                                of freight movement, aka the “last mile,”
                                for consumer goods. In the past, the last
                                mile would be a delivery to a retail store.
                                Today, many of these shipments terminate
                                at private residences. While this has led
                                to more delivery truck trafc in residential
                                neighborhoods, the full impact of online
                                shopping on trafc congestion and emissions
                                is unclear—depending on the efciency of
                                truck deliveries, whether deliveries replace
                                personal vehicle trips, and other factors.Between 2014 and 2019, the total tonnage of
                                freight shipments in Dane County increased
                                by about 8.5%.26 In 2014, a total of 23.7 million
                                tons of freight were moved in Dane County,
                                98% of which was carried by truck. In 2019,
                                25.6 million tons of freight were moved in the
                                quantity of rail freight, which more
                                than doubled over the fve-year
                                period to 1.1 million tons in 2019.
                                In terms of weight, the quantity
                                of freight moved by air and other
                                modes (pipelines) accounted for
                                roughly 0.1% of all freight moved in
                                2014 and 2019.The value of freight shipments in
                                the county increased by 4% during
                                this period, from $24.1 to $25.1
                                billion. Trucks are the dominant
                                mode by value, carrying 90% of the
                                county’s total freight value in 2019,
                                while air cargo accounted for 8.5%,
                                and rail carried less than 2%. The
                                value of air freight increased by
                                28% between 2014 and 2019, from
                                $1.6 to $2.1 billion. The value of rail
                                freight also grew during this period,
                                increasing by nearly 48%, but its
                                total value remains below $450
                                million. The high value and low
                                weight of air shipments is due to
                                air cargo being largely restricted to
                                the most high-value time-sensitive
                                goods. Rail tends to carry the
                                lowest value, least time-sensitive
                                shipments.
                            </p>


                        </div>

                        <div className='flex lg:flex-col flex-col items-center'>
                            <img
                                src={Figure_3_p_Dane_County_Freight_Tonnage_2019}
                                className='w-full object-cover'
                            >
                            </img>

                            <img
                                className='object-cover w-full'
                                src={Figure_3_q_Dane_County_Freight_Value_2019}></img>


                        </div>
                        <div>

                            <p className=''>
                                freight volumes is likely due to the Madison
                                area’s economic base, which is tilted towards
                                healthcare, education, government, and
                                technology, industries that employ many
                                consumers but that are not reliant on the
                                export of goods from the area.
                                By tonnage, Dane County’s trade is almost
                                evenly split between locations inside and
                                outside the State of Wisconsin. 46% of Dane
                                County’s inbound freight comes from out of
                                state, with 54% coming from in-state locations.
                                52% of Dane County’s outbound freight is
                                bound for out-of-state destinations, while 48%
                                goes to other counties in Wisconsin. The top
                                out-of-state origins and destinations of Dane
                                County freight shipments, by weight, are
                                detailed in Figures 3-r and 3-s.
                            </p>
                        </div>

                        <div className='w-full '>
                            <img
                                className='w-full object-cover'
                                src={Map_3_aa_Truck_Routes_and_Truck_Volume_2019}>

                            </img>
                            <p className='py-2'>The metropolitan area is home to numerous
                                trucking companies, most of which cluster
                                near industrial areas and truck routes. Many
                                truck companies are located along the US
                                Highway 51 corridor due to the corridor’s
                                relatively easy access to the interstate system.
                                Dane County’s industrial areas and truck
                                routes, including the relative share of truck
                                trafc on each, is detailed in Map 3-aa.
                                Truck trafc volume is shown as StreetLight
                                Index. StreetLight Index volume estimates are
                                not estimates of actual daily
                                truck trafc; they describe the
                                relative levels of truck trafc
                                only. So, for example a road
                                with an index value of 10,000
                                is estimated to carry twice
                                as many trucks each day, on
                                average, as a road with an
                                index value of 5,000.
                                While congestion in the
                                Madison area is modest
                                compared to many other large
                                urban areas, it does impact
                                some key freight routes. Travel
                                time reliability is a particular
                                challenge on the Beltline,
                                between USH 51 and Verona
                                Rd (USH 18/151), and USH 51,
                                between East Washington
                                Avenue and the Beltline, during
                                morning and afternoon peak
                                periods. See the Roadways
                                section for more information
                                on congestion and travel time
                                reliability. </p>
                        </div>

                    </div>

                </div>

            </div>




        </motion.div>
    )
}

export default SystemToday
