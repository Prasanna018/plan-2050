import React, { useEffect, useState } from "react";
import { motion } from 'motion/react'


import trends_and_forecasts from '../assets/trends_and_forecasts/trends_and_forecasts_bg.png'
import Map_2_a_2020_Population_Density_by_Census_Block from '../assets/trends_and_forecasts/Map 2-a 2020 Population Density by Census Block .png'

import Figure_2_a_Current_and_Forecast_Population_in_Dane_County_Communities
    from '../assets/trends_and_forecasts/Figure 2-a Current and Forecast Population in Dane County Communities.png'

import Figure_2_b_Household_Size_in_Dane_County_Communities from '../assets/trends_and_forecasts/Figure 2-b Household Size in Dane County Communities .png'
import Figure_2_c_Current_and_Future_Households_in_the_MPO_area from '../assets/trends_and_forecasts/Figure 2-c Current and Future Households in the MPO area .png'

import Figure_2_d_Race_and_Ethnicity_of_Dane_County_Residents from '../assets/trends_and_forecasts/Figure 2-d Race and Ethnicity of Dane County Residents .png'

import Map_2_b_2016_Employment_Density from '../assets/trends_and_forecasts/Map 2-b 2016 Employment Density.png'
import Figure_2_e_Dane_County_Employment_by_Industry from '../assets/trends_and_forecasts/Figure 2-e Dane County Employment by Industry.png'

import Map_2_c_Employment_Change_per_Acre_2016_2050 from '../assets/trends_and_forecasts/Map 2-c Employment Change per Acre 2016-2050 .png'

import Map_2_d_2015_Land_Use from '../assets/trends_and_forecasts/Map 2-d 2015 Land Use.png'
import Map_2_e_2050_Employment_and_Activity_Centers from '../assets/trends_and_forecasts/Map 2-e 2050 Employment and Activity Centers .png'

import Map_2_f_Household_Travel_Survey_Comparison_Areas from '../assets/trends_and_forecasts/Map 2-f Household Travel Survey Comparison Areas .png'
import Figure_2_f_Trips_by_Mode_by_Area from '../assets/trends_and_forecasts/Figure 2-f Trips by Mode by Area .png'

import Figure_2_g_Household_Vehicle_Availability_by_Worker from '../assets/trends_and_forecasts/Figure 2-g Household Vehicle Availability by Worker .png'
import Figure_2_i_Travel_Time_to_Work_Public_Transit from '../assets/trends_and_forecasts/Figure 2-i Travel Time to Work Public Transit.png'

import Figure_2_h_Travel_Time_to_Work_All_Modes from '../assets/trends_and_forecasts/Figure 2-h Travel Time to Work All Modes.png'

import Figure_2_j_Travel_Time_to_Work_Walk from '../assets/trends_and_forecasts/Figure 2-j Travel Time to Work Walk .png'

import Figure_2_k_Hours_of_Congestion_2020 from '../assets/trends_and_forecasts/Figure 2-k Hours of Congestion 2020.png'
import Map_2_g_County_to_County_Commuter_Flows from '../assets/trends_and_forecasts/Map 2-g County to County Commuter Flows .png'
import Map_2_h_Percentage_of_Dane_County_Workers_Commuting_into_the_City_of_Madison from
    '../assets/trends_and_forecasts/Map 2-h Percentage of Dane County Workers Commuting into the City of Madison .png'
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

                <div className="lg:w-[35vw] w-full bg-black p-2 h-fit">


                    <div id="image-section" className="object-cover scroll-section">
                        <img src={trends_and_forecasts} alt="Summary Background" />
                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="1">


                        <div className="space-y-6 p-4">
                            <span className="text-2xl font-bold">Introduction</span>
                        </div>

                        <div className="p-4">
                            <p>National and regional trends and forecasts
                                such as shifting demographics and growth
                                provide insight into how best to invest in the
                                transportation system to meet anticipated
                                future needs while accommodating current
                                travel demand. Demographic changes,
                                commuting patterns, economic shifts, and
                                land use development patterns all infuence
                                the type, location, and amount of demand
                                on transportation facilities and services. It
                                is particularly important to plan for these
                                changes in the greater Madison region—the
                                fastest growing and changing region in the
                                state. The Madison area is outpacing the rest
                                of the state in all key economic indicators,
                                including job creation, business growth, and
                                construction activity.1 The area’s population
                                is also growing more rapidly than the rest of
                                the state and becoming increasingly diverse.
                                New and emerging technologies along with
                                potential long-term impacts to travel from
                                COVID-19, which will also have an impact on
                                land use development and travel patterns,
                                are discussed in Chapter 4.</p>
                        </div>



                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="2">

                        <div className="space-y-6 p-4">
                            <span className="text-2xl font-bold">Demographics</span>
                        </div>
                        <div className="">
                            <p>
                                Demographic projections are important
                                for determining the overall growth in travel
                                and the transportation solutions needed to
                                serve the growing and changing population.
                                When coupled with commuting patterns,
                                economic forecasts, and projected future
                                land use development it is possible to prepare
                                forecasts for future travel demand, identify
                                issues and needs, and make facility and
                                service recommendations.
                            </p>
                        </div>
                        <div className="space-y-4 flex flex-col justify-start items-start  ">
                            <span className="p-2 text-xl text-orange-700">
                                POPULATION
                            </span>
                            <p className="p-2">
                                The country’s population
                                continues to grow, with
                                a majority of this growth
                                occurring in the southern and
                                western states. Wisconsin is
                                growing at a slower pace than
                                other states due to high outmigration without comparable
                                in-migration of either domestic
                                or foreign-born immigrants.
                                While Wisconsin’s population
                                grew just 4% between 2010
                                and 2020, Dane County’s
                                population grew by 15%,
                                accounting for more than 1/3
                                of the state’s total population
                                growth.
                                Although the population
                                growth rate of Dane County as
                                a whole outpaced the City of
                                Madison’s growth from 1990-
                                2010, Madison grew at about
                                the same rate as the county between 2010
                                and 2020, and its share of county population
                                held steady at 48%. The most rapid rates
                                of growth over the last decade occurred in
                                Madison’s suburban communities, which
                                grew by about 20% collectively, led by the
                                Village of Windsor (38%) and the City of
                                Verona (32%). Rural areas and smaller
                                urbanized areas in the county grew by 9%
                                and 3%, respectively. Map 2-a shows 2020
                                population density by Census Block. While
                                the greater Isthmus area has the highest

                            </p>
                            <img
                                className="object-cover w-full"
                                src={Map_2_a_2020_Population_Density_by_Census_Block}>
                            </img>
                            <p className="p-2">
                                densities, there are multi-family housing
                                developments with resulting high densities
                                spread throughout the rest of the city of
                                Madison and in suburban cities and villages.
                                Over the next three decades, Madison’s
                                outer suburbs are forecast to grow by 50%,
                                adding 58,000 new residents, while the City of
                                Madison and its closest suburban neighbors,
                                are projected to grow by 36% or 124,000
                                residents, as shown in Figure 2-a. Population
                                growth in smaller urbanized and rural areas
                                outside the Madison Metropolitan Planning
                                Area is expected to be slower, totaling about
                                12,000 new residents.

                            </p>
                        </div>
                        <div className="space-y-4 flex flex-col justify-center items-start ">


                            <div className="flex justify-start items-start">
                                <span className="text-xl p-2 text-orange-700">HOUSEHOLDS</span>
                            </div>
                            <div>
                                <p>
                                    While the population has continued to grow
                                    nationally and within the Madison region,
                                    the average household size has declined.
                                    In 1970, the average US household size was
                                    3.14. By 2020, the average US household size
                                    had fallen to 2.53. Here the trends have been similar; the average Dane County household
                                    size was 3.09 in 1970 and had dropped to
                                    2.27 by 2020. Housing and household sizes
                                    are correlated, with average house and
                                    household sizes larger in villages and towns,
                                    smaller in suburban cities, and the smallest
                                    in the City of Madison. The historic trend
                                    of shrinking household sizes is projected to
                                    continue in the future albeit at a much slower
                                    rate, with Dane County’s average household
                                    size projected to decline to 2.22 by 2050, as
                                    shown in Figure 2-b.

                                </p>
                            </div>
                            <div className="">
                                <p className="text-white font-semibold underline">
                                    Current and Forecast Population in Dane County Communities
                                </p>
                                <img
                                    className="p-4"
                                    src={Figure_2_a_Current_and_Forecast_Population_in_Dane_County_Communities}
                                ></img>
                            </div>


                        </div>
                        <div className="w-full">
                            <p className="text-white font-semibold underline">
                                Household Size in Dane County Communities
                            </p>
                            <img
                                className=" object-cover w-full"
                                src={Figure_2_b_Household_Size_in_Dane_County_Communities}
                            ></img>
                        </div>

                        <div>
                            <p className="">Figure 2-c details the projected change in households
                                in Madison area communities through 2050. While the
                                City of Madison’s percentage share of households and
                                population is projected to continue to slowly decline, it is
                                expected to contribute over 44,000 new households within
                                the Metropolitan Planning Area between 2016 and 2050.
                                Of those, over 7,500 are forecast to be located within the
                                greater Isthmus area, more than in any of the suburban
                                communities.
                                Much like the rest of the state, Dane County has a large
                                elderly population that is projected to grow in the future.
                                The percentage of Dane county’s population aged 65 and </p>
                        </div>
                        <div className="">
                            <p className="text-white font-semibold underline">
                                Current and Future Households in the MPO area
                            </p>
                            <img
                                className="p-4 object-cover w-full"
                                src={Figure_2_c_Current_and_Future_Households_in_the_MPO_area}
                            ></img>
                            <p className="p-4">
                                older is expected to climb from 13% in 2020
                                to 20% by 2040. This population will require
                                a transportation network that will allow for
                                safe and convenient transportation to grocery
                                stores and other shopping destinations,
                                entertainment, healthcare facilities, and other
                                destinations. It is important to ensure that our
                                transportation system will be able to serve
                                those who are no longer able to drive and
                                those with disabilities.

                            </p>
                        </div>



                    </div>

                    <div className="space-y-4 flex flex-col justify-center items-center ">


                        <span className="text-xl text-orange-700 p-4">
                            RACE AND ETHNICITY
                        </span>

                        <div className="">
                            <p className="p-2">
                                The United States is becoming more racially
                                and ethnically diverse. The Pew Research
                                Center has projected that more than 80% of
                                population growth between 2010 and 2050
                                will be attributable to immigrants and their US-born descendants. This, in combination
                                with the comparatively low birthrate among
                                non-Hispanic Whites, is increasing the
                                country’s racial and ethnic diversity.
                                In the Madison region these trends are
                                evident as well. Between 2010 and 2020, the
                                overall population grew by 15% while the
                                White population grew just 5%. This led Dane
                                County’s non-White population to grow from
                                15% of the population in 2010 to 22% in 2020, as
                                seen in Figure 2-d.
                                See the Environmental Justice Analysis in
                                Appendix C for more detailed information
                                on the distribution of the minority population
                                within the region and an analysis related to
                                the equitable distribution of transportation
                                resources.
                            </p>
                        </div>

                    </div>

                    <div className=" space-y-4 flex flex-col items-start justify-center">
                        <div className="">
                            <span className="text-white font-semibold underline">Race and Ethnicity of Dane County Residents </span>
                        </div>
                        <div className="w-full">
                            <img
                                className="object-cover w-full"
                                src={Figure_2_d_Race_and_Ethnicity_of_Dane_County_Residents}>
                            </img>
                        </div>
                    </div>

                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="3">
                        <div className="flex justify-center items-center font-bold text-2xl p-4">
                            <span>Economy</span>
                        </div>


                        <div className="p-3">
                            <p>
                                Dane County’s thriving and diverse economy
                                has led to one of the lowest unemployment
                                rates in Wisconsin, and to the county being a
                                net importer of employees.
                                The economic strength of the region, relative
                                to the rest of the state, is also evidenced
                                by its surging tax base and GDP growth.
                                According to the Wisconsin Department of
                                Revenue, between 2014 and 2019, Dane
                                County’s tax base grew 35%, while the state’s
                                total tax base grew by 21%. During the same
                                period, Dane County’s gross domestic
                                product (GDP) grew at an annual rate of
                                3.5%, the eighth fastest GDP growth rate in
                                the state and the fastest among counties with
                                populations over 100,000.2 The onset of COVID
                                exerted a dramatic efect on the economy
                                beginning in early 2020. While GDP returned
                                to pre-pandemic levels by mid-2021, and
                                much of the economy has largely recovered,
                                employment levels remain somewhat
                                depressed.
                                The highest concentration of the jobs in the
                                MPO area is in central Madison, with other
                                major employment clusters located along
                                the Beltline and Interstate corridors on
                                Madison’s periphery and at the Epic Systems
                                main campus in Verona. Map 2-b shows
                                employment density as of 2016.
                                Figure 2-e details Dane County employment
                                by industry. The largest of these, education
                                and health services, accounts for nearly
                            </p>

                        </div>
                        <div className="p-4 flex flex-col h-fit">
                            <img
                                className="w-full object-cover"

                                src={Map_2_b_2016_Employment_Density}></img>

                        </div>

                        <div className="p-2 flex flex-col  items-center justify-center">
                            <p>90,000 jobs, 27% of total employment, in both
                                the public and private sectors.
                                Over the coming years, the Dane County
                                economy is expected to continue its robust job
                                growth. According to MadRep, the Madison
                                region’s economic development agency, the
                                Madison region currently ranks 4th in the
                                nation in its concentration of computer and
                                mathematical occupations—behind only San
                                Jose, Washington, D.C., and Seattle. MadRep
                                forecasts that employment in this sector along with construction and
                                extraction occupations, and
                                healthcare practitioners
                                and technical occupations,
                                is expected to increase by more than 50%
                                between 2010 and 2030. A number of
                                other occupations in the areas of science,
                                engineering, personal care, food service, and
                                business, are expected to grow by at least 25%
                                during this period.
                                According to pre-COVID US Census data
                                estimates, around 50,000 workers traveled
                                into Dane County per day from surrounding
                                counties, and about 15,000 traveled from
                                Dane County to surrounding counties for
                                work. In the coming years, Dane County’s </p>


                            <img
                                className="p-4 object-cover"
                                src={Figure_2_e_Dane_County_Employment_by_Industry}>
                            </img>


                        </div>
                        <div className="p-4">
                            <p>
                                surplus of jobs relative to workers is expected
                                to continue growing.
                                Map 2-c illustrates the forecast employment
                                growth areas. While the City of Madison’s
                                share of employment is forecast to decline
                                somewhat, total employment within the city is
                                projected to grow by nearly 84,000 between
                                2016 and 2050, accounting for over 50% of
                                new employment within the Metropolitan
                                Planning Area.
                            </p>
                        </div>


                    </div>



                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="4">



                        <div className="space-y-4 ">
                            <span className="text-2xl font-bold">Land Use and Development
                            </span>
                        </div>

                        <div className="">
                            <p>Land use and transportation are inextricably
                                linked. The mix, location, and density of
                                land uses drive travel demand; interacting
                                with one another to determine the cost </p>

                            <div className="lg:flex lg:flex-col flex-col py-2">
                                <img
                                    className=""
                                    src={Map_2_c_Employment_Change_per_Acre_2016_2050}></img>

                                <img

                                    src={Map_2_d_2015_Land_Use}
                                >
                                </img>

                            </div>

                            <p className="">
                                area. Multi-family residential, commercial,
                                and institutional/governmental uses tend
                                to be concentrated in central Madison
                                and along major transportation corridors
                                throughout the area. Retail sales/services
                                and industrial uses, which depend on freight
                                accessibility, cluster in areas with easy access
                                to major roadways. Single-family homes
                                occupy much of the rest of the developed
                                area, close enough to access jobs and
                                services but usually far enough to reduce the
                                noise and trafc impacts of more intense land
                                uses.
                                A number of urban planning models have
                                been developed to determine how land use,
                                transportation facilities, and density interact.
                                One prominent contemporary model, the
                                Rural-to-Urban Transect, suggests that
                            </p>


                        </div>
                        <div className="w-full">
                            <img
                                className=" w-full object-cover"
                                src={Map_2_e_2050_Employment_and_Activity_Centers}
                            >
                            </img>

                            <p className="p-2">
                                urbanism occurs in symbiotic transects. The
                                Transect describes levels of urbanization
                                that range from a natural rural preserve to a
                                dense urban core. Each of these typologies
                                is symbolic of diferent development patterns
                                and requires diferent transportation facilities.
                                One of the benefts of this model is that it
                                demonstrates the similarity between zones
                                that may not appear to be similar, but have
                                similar characteristics and require similar
                                transportation treatments.
                                For instance, the Madison
                                neighborhood of Hill Farms
                                near University Avenue has
                                similar transportation needs
                                to that of the Schenk-AtwoodStarkweather-Yahara (SASY)
                                neighborhood. Though
                                the densest portion of Hill
                                Farms would be viewed a
                                contemporary, transit-oriented
                                development and SASY
                                is an older neighborhood
                                built around a defunct
                                streetcar line, both require
                                high-quality transit service,
                                quality pedestrian and
                                bicycle facilities, and regional
                                transportation for moving
                                residents, workers, shoppers,
                                and freight. The Transect
                                would identify them both as
                                “urban center” zones that
                                require similar facilities.
                                In the past, communities
                                generally hewed to a
                                centralized development pattern—an urban
                                core buoyed a community, with urbanity
                                transitioning into suburban and rural forms
                                gradually as one moves away from the core.
                                This confguration encourages driving in the
                                periphery and forces trafc into one dense
                                core. Contemporary confgurations retroft
                                dense activity centers into areas that have
                                been traditionally home to suburban or
                                general urban development, or build them
                                as part of new developments. This increases
                                pedestrian and bicycle activity, while making
                                transit more viable in these mixed-use activity
                                centers. The encouragement of development
                                of high-density, mixed-use activity centers,
                                primarily along existing and planned major
                                transit corridors is a central recommendation
                                of the Capital Area Regional Planning
                                Commission’s 2050 Regional Development
                                Framework, the City of Madison’s Madison
                                in Motion Transportation Plan, and this RTP.
                                Map 2-e details planned employment and
                                activity centers in 2050.
                            </p>
                        </div>

                    </div>


                    <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center" id="5">
                        <div className="">
                            <span className=" text-2xl font-bold">
                                Travel Patterns
                            </span>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <img
                                className="p-2 w-full object-cover"
                                src={Map_2_f_Household_Travel_Survey_Comparison_Areas}>

                            </img>
                        </div>


                        <div>
                            <p className="">
                                While the primary source of information
                                about travel patterns has traditionally been
                                provided by the US Census—which provides
                                information only on travel to and from work,
                                the MPO obtained local household travel
                                survey data covering trips of all types for
                                the RTP. The MPO conducted a household
                                travel survey in conjunction with the National
                                to
                                develop an updated and improved regional
                                travel forecast model. The following are some
                                general observations from the survey:
                            </p>
                            <p className="">
                                • Trips made by residents of the central
                                Madison area (see Map 2-f) tend to be
                                much shorter, for all trip purposes and
                                modes, than trips made by residents
                                of suburban communities. Trips made
                                by residents of other parts of the City of
                                Madison tend to be in the middle range in
                                terms of distance.
                                <br></br>
                                • Commute trips, those between home and
                                work, tend to be longer than other types of
                                trips.
                                <br></br>
                                • Suburban residents’ bicycle trips are more
                                often between home and school, and less
                                often for social-recreational or other trip
                                purposes, than people living elsewhere.
                                Residents of the central Madison area
                                tend to bicycle for a wider variety of trip
                                purposes compared to residents of other
                                areas.
                                <br></br>
                                • Residents of the central Madison area are
                                two to three times more likely to make trips
                                by bike, walking, or transit than are people
                                living in other areas.
                                <br></br>
                                • Respondents with annual household
                                incomes below $35,000 are much more
                                likely to make trips by foot, bike, and bus.
                                <br></br>
                                • Minority respondents report traveling by
                                bike and bus at about twice the rate of
                                White respondents.
                                <br></br>
                                • The vast majority of car trips between
                                home and work are made by drivers
                                traveling alone, while more than half of
                                other car trips to and from home involve
                                drivers transporting at least one other
                                person.
                            </p>
                            <p className="p-2">As shown in Figure 2-f, the
                                percentage of trips made
                                by bike, bus, and foot is
                                far higher in the central
                                Madison area, and declines
                                for those living in other parts
                                of Madison, and in other
                                MPO communities. Singleoccupant (SOV) and multipleoccupant (HOV) trips made
                                by personal motor vehicles
                                show the reverse pattern.
                                These disparities in travel
                                habits by area are due in
                                large part to the diferent
                                development densities and
                                design in diferent parts of
                                the region. In the central
                                area, residences, jobs, and
                                services are closer together
                                and buildings are oriented to
                                the street, enabling residents
                                in these areas to travel more easily by non-auto modes.Access to vehicles is also a critical factor in how people travel to and
                                from work. As shown in Figure 2-g, 10% of
                                Dane County households have more workers
                                than motor vehicles.
                            </p>

                            <p className="p-2">Unsurprisingly, travel time to work tends to
                                be shortest in Madison and longer in more
                                peripheral areas of Dane County. As shown
                                in Figure 2-h, about 80% of Madison residents
                                can travel from their home to their workplace
                                in 30 minutes or less, compared to 75% of
                                residents of other MPO communities, and 60%
                                of Dane County residents living outside the
                                MPO area. These percentages are virtually
                                identical when restricted to travel by car,
                                truck, or van. Commute trips by public transit
                                exhibit a similar pattern with those made by
                                City of Madison residents generally shorter
                                than those by residents of other MPO area
                                communities, see Figure 2-i.
                                As shown in Figure 2-j, walk trips to work
                                exhibit the opposite pattern, with City of
                                Madison residents making longer commutes </p>

                        </div>

                        <div className="flex flex-col space-y-4 lg:flex-col gap-x-2 w-full justify-evenly pt-4">
                            <img src={Figure_2_f_Trips_by_Mode_by_Area}></img>

                            <div className="flex flex-col">
                                <img
                                    className="p-2"
                                    src={Figure_2_g_Household_Vehicle_Availability_by_Worker}></img>

                                <img
                                    src={Figure_2_i_Travel_Time_to_Work_Public_Transit}
                                >
                                </img>
                            </div>
                        </div>
                        <div className="flex lg:flex-col flex-col w-full justify-evenly ">
                            <img
                                className="p-3"
                                src={Figure_2_h_Travel_Time_to_Work_All_Modes}
                            >
                            </img>
                            <img
                                className="p-3"
                                src={Figure_2_j_Travel_Time_to_Work_Walk}
                            >
                            </img>
                        </div>

                        <div className="p-2">
                            <p className="p-4">by foot than residents of other parts of the
                                MPO area or the rest of the County, outside of
                                the MPO area. This is likely due to the wealth
                                of pedestrian infrastructure throughout the
                                city, which makes walking more enjoyable.
                                However, whether in the City, other MPO area
                                communities, or in the rest of the County, over
                                90% of walk trips to work are less than 30
                                minutes in duration, and a majority are less
                                than 15 minutes.
                                Historically, the Madison area has had
                                two periods of peak weekday congestion
                                coinciding with commuters’ trips to and from
                                work—roughly 7:00-8:15 a.m. and 3:45-
                                5:00 p.m. The COVID pandemic, and the
                                resulting rise in telework and other changes
                                to work and travel habits, has dramatically
                                changed this long-standing pattern. As Figure
                                2-k shows, congestion (shown in shades of
                                orange) during the AM peak period virtually
                                disappeared in 2020 while PM peak period
                                congestion remained.
                                In the Madison area, the most concentrated
                                area of employment is in the downtown Madison/UW-Madison campus area;
                                however, over the last few decades most of
                                the new employment growth has occurred
                                in peripheral Madison and suburban job
                                centers. As a result, travel patterns are
                                becoming more disbursed throughout the
                                region.
                                Over the last decade, a number of new
                                apartment buildings have been constructed
                                in downtown Madison and on the Isthmus.
                                These new buildings have attracted a
                                residential population of young professionals.
                                While many of these new residents move
                                downtown to be closer to work, others do so
                                to live a more urban lifestyle while working in
                                peripheral areas. Because most commuters
                                travel from peripheral areas to centrally
                                located jobs, the opposite is known as
                                “reverse commuting.”
                                One popular reverse commute is between
                                downtown Madison and the Epic Systems
                                campus on the western edge of the City of
                                Verona. In 2012, Epic employed more than
                                6,200 employees. Understanding that many
                                Epic employees were commuting from
                                Madison to Verona, Metro Transit, the City
                                of Verona, and Epic worked to add two new
                                bus routes – one connecting the campus to
                                downtown Madison and the other connecting
                                to the West Transfer point. As of 2019, Epic had
                                grown to more than 10,000 employees.
                                Dane County is a net importer of workers
                                due to having a surplus of jobs and stronger
                                economy than surrounding counties. Map
                                2-g shows 2017 county-to-county average
                                daily commuter fows. Columbia and Rock
                                Counties each supplied Dane County with
                                over 11,000 workers per day, with every other
                                adjacent county supplying at least 4,000.
                                More than 2,000 workers per day left Dane
                                County for jobs in Rock, Columbia, Sauk, and
                                Jeferson Counties.
                                As the major employment hub, the City
                                of Madison experiences a large infux of
                                workers from other communities within the
                                county as well as from outside the county.
                                It is estimated that about 67,000 workers
                                commuted to the City from other communities
                                in Dane County in 2017. Map
                                2-h shows the percentage
                                of residents within each
                                community that commuted
                                to the City of Madison for
                                work. Communities with
                                the highest percentage of
                                their workers commuting to
                                Madison include: the Village
                                of Shorewood Hills (64%);
                                the Village of Maple Bluf (63%); the Town of Madison
                            </p>
                        </div>

                        <div className="p-2">
                            <img
                                className="p-2 object-cover w-full"
                                src={Figure_2_k_Hours_of_Congestion_2020}
                            ></img>
                        </div>

                        <div className="flex lg:flex-col flex-col justify-center items-center w-full p-2">
                            <img
                                src={Map_2_g_County_to_County_Commuter_Flows}
                                className="w-full object-cover p-4"
                            ></img>

                            <p className="p-2">
                                (56%); the City of Monona (54%); the City of
                                Middleton, and the City of Fitchburg (50%).
                                75,000 people both live and work in the City
                                of Madison, 58% of all workers living in the
                                City. With the increase in teleworking as a
                                result of the pandemic, there are likely fewer
                                commuters traveling into the county and city
                                for work on a daily basis now. However, the
                                trend of increasing numbers of commuters
                                traveling into the county for work is expected
                                to continue in the future.
                            </p>
                        </div>

                        <div className="p-4 w-full flex justify-center items-center flex-col">

                            <img
                                className="p-4 w-full object-cover"
                                src={Map_2_h_Percentage_of_Dane_County_Workers_Commuting_into_the_City_of_Madison}
                            ></img>
                            <p className="p-2">
                                One way that agency and community
                                partners in the Madison region mitigate
                                the impact of commuting is through
                                the RoundTrip transportation demand
                                management (TDM) program managed by
                                the MPO. RoundTrip provides information
                                and services for commuters and employers
                                in Dane County to promote alternatives to
                                driving alone. RoundTrip also works closely
                                with Rideshare Etc., the TDM program
                                managed by WisDOT, which serves
                                employers and workers in other parts of
                                Wisconsin, including Dane County residents
                                working elsewhere in the state. For more
                                information on the RoundTrip program and
                                TDM in the Madison region, see chapters 3
                                and 4.
                            </p>

                        </div>




                    </div>




                </div>




            </div>
        </motion.div>
    )
}

export default TrendsAndForeCasts
