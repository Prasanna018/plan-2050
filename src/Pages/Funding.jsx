import React, { useEffect, useState } from 'react'

import { motion } from 'motion/react'
import funding_bg from '../assets/funding/funding_bg.png'
import road_bikes from '../assets/funding/road_bikes.png'
import Figure_5_a_Historical_County_and_Municipal_Street_Roadway
    from '../assets/funding/Figure 5-a Historical County and Municipal StreetRoadway Expenses ($1,000’s) within the Madison Metropolitan Planning Area .png'

import Figure_5_f_Estimated_Transportation_Revenue_2022_2050
    from '../assets/funding/Figure 5-f Estimated Transportation Revenue, 2022 - 2050.png'

import Figure_5_g_Estimated_Transportation_Expenses_2022_2050
    from '../assets/funding/Figure 5-g Estimated Transportation Expenses, 2022 - 2050.png'

import Figure_5_h_Pavement_Condition_by_Roadway_Type_in_the_Madison_Metropolitan_Planning_Area from '../assets/funding/Figure 5-h Pavement Condition by Roadway Type in the Madison Metropolitan Planning Area.png'
const links = [
    { id: '1', text: 'Introduction ' },
    { id: '2', text: 'Funding Trends in the Metropolitan Planning Area' },
    { id: '3', text: 'Projected Revenues through 2050' },
    { id: '4', text: 'Projected Expenses through 2050' },
    { id: '5', text: 'Conclusion' },

];


function Funding() {
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
            className="lg:h-[80vh] h-[90vh] flex w-full sm:w-[100vw] space-x-2  scroll-smooth overflow-y-auto sm:h-fit bg-[#e7eaeb] "
        >

            {/* left */}
            <div className="hidden md:w-[50vw] sm:w-[40vw] sm:items-center sm:justify-center sm:flex-col lg:flex  text-blue-500 lg:space-y-10 text-center   lg:justify-center lg:items-start lg:pl-2 lg:pt-2
            ">

                {links.map((link, index) => (
                    <div
                        className='flex'
                        key={index}>
                        <a
                            className={`cursor-pointer scroll-smooth rounded-xl p-2 bg-[#008CBA] text-white ${activeSection === link.id ? 'text-blue-900 font-bold' : ''}`}
                            onClick={() => handleSmoothScroll(link.id)}
                        >
                            {link.text}
                        </a>
                    </div>
                ))}
            </div>


            {/* right */}



            <div className="w-full relative sm:w-full sm:h-fit pt-32 sm:pt-0 overflow-y-auto no-scrollbar md:w-full lg:h-full lg:flex lg:justify-center">

                <div className='lg:w-[35vw] h-fit bg-black p-2 '>


                    <div id="image-section" className="object-cover w-full scroll-section">
                        <img src={funding_bg} alt="Summary Background" />
                    </div>

                    <div className='py-3 flex justify-center items-center text-center w-full'>
                        <span className='text-white pt-2 text-center text-2xl '>Funding the Plan:
                            Financial Capacity
                            Analysis </span>
                    </div>




                    <div className='py-3'>
                        <div className=" text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center w-full" id="1">
                            <p>Federal transportation planning rules require
                                that regional transportation plans include a
                                fnancial capacity analysis to demonstrate
                                that the plan is fscally constrained. That is,
                                it must be demonstrated that the estimated
                                costs of recommended capital projects in
                                the federally recognized, fscally constrained
                                plan and maintenance of the transportation
                                system can be covered using available and
                                projected revenue sources. If projected
                                funding shortfalls exist, new sources of
                                revenue must be identifed. While projecting
                                revenue and project costs out for such a
                                long period is very difcult, the purpose of
                                the analysis is to ensure the plan doesn’t
                                just include a wish list of projects. Rather,
                                potential projects need to be prioritized,
                                realistically assessing the ability to fund them,
                                and balancing the needs of new facilities
                                or capacity expansion projects with system
                                preservation needs.
                                The plan may identify recommended
                                or needed projects, but if it cannot be
                                demonstrated that funding is reasonably likely
                                to be available for the projects or the scope
                                and cost of projects is uncertain, they cannot
                                be included in the federally recognized plan.
                                For example, later phases of the planned
                                Bus Rapid Transit (BRT) system are not part
                                of the fscally constrained plan. The currently
                                budgeted East-West Route and the planned
                                North/South route are included. The major
                                state highway projects that will come out
                                of the current Beltline and Stoughton Road
                                studies are also not included due to the
                                uncertain scope and cost of those projects.
                                The same is true of project(s) to come out of
                                the Interstate study, although as an inter-city
                                project it would not need to be part of the
                                MPO’s fscally constrained plan.
                                The fnancial capacity analysis takes into
                                account recent trends in sources and uses of
                                funds and currently programmed projects,
                                and estimates the ability of anticipated
                                funding sources to meet the maintenance,
                                preservation, and capacity expansion needs
                                of the transportation system. Average annual
                                program funding amounts were estimated
                                based on recent trends. The analysis also
                                accounts for the large increase in federal
                                transportation formula program funding in
                                federal fscal years (FFY) 2022-2026 under
                                the recently passed Infrastructure Investment
                                & Jobs Act (IIJA), also known as the Bipartisan
                                Infrastructure Law (BIL).
                                The IIJA included the reauthorization of the
                                federal surface transportation legislation.
                                The law maintains the same basic formula </p>


                            <img
                                src={road_bikes}
                                className='object-cover w-full '
                            >
                            </img>
                            <p className='py-2'>
                                funding programs, but also includes some
                                new formula and discretionary grant
                                programs that allow states, MPOs, and local
                                governments to apply directly to USDOT for
                                funding. The Federal Highway Administration
                                (FHWA) recently released the state and
                                MPO federal formula program allocations
                                for FFY 2022. For the two existing programs
                                for which the MPO receives a suballocation
                                of funding – Surface Transportation Block
                                Grant (STBG) Urban and Transportation
                                Alternatives Program (TAP) — those FFY
                                2022 amounts were assumed as average
                                annual funding moving forward. For the two
                                programs allocated to states — National
                                Highway Performance Program (NHPP)
                                and Highway Safety Improvement Program
                                (HSIP) — the same percentage increase in
                                program funding for Wisconsin was assumed
                                for the Madison Metropolitan Area. A 2.0%
                                annual infationary increase in these funding
                                amounts was assumed into the future. No
                                additional funding was assumed from the
                                new discretionary program funding.
                                The IIJA provides the federal transportation
                                funding program and planning framework
                                for the next fve years. While the IIJA and
                                other recent transportation bills have made
                                some changes in programs, the current basic
                                formula program framework has been in
                                place since 1991 when the landmark ISTEA
                                legislation was passed. Therefore, it is safe
                                to assume that this basic framework will
                                continue. As noted, IIJA added numerous
                                discretionary grant programs. While it is safe
                                to assume at least some of those will continue
                                in the future and the greater Madison region
                                will be able to secure some of those funds, this
                                hasn’t been factored into the analysis. While
                                short-term funding methods using general
                                revenue were employed to provide the
                                necessary funding for the IIJA, it is assumed
                                that a long-term solution will be developed
                                to maintain those funding levels with the
                                assumed infationary increases.
                                The fnancial capacity analysis assumes
                                that state funding will increase around 2%
                                annually. This has not been the trend for
                                highway construction funding. From 2006 —
                                the last year the state gas tax was increased
                                — to 2021 highway construction funding
                                (including state highways and local road
                                and bridge assistance) actually decreased
                                15% or an average of 1% per year in constant
                                dollars. In contrast, highway operations
                                (maintenance) funding increased 32% or
                                2.1% per year. Transit aids decreased almost
                                24% or 1.6% per year.1 This plan assumes that
                                in the long term, the state transportation
                                funding situation will be addressed and that
                                infationary increases to recent spending
                                levels in the Metropolitan Planning Area will
                                be provided.
                                In the long run, additional or alternative
                                transportation funding source(s) to the gas
                                tax will be needed at both the state and
                                federal levels with the electrifcation of the
                                feet. The most logical is some sort of road
                                1 Transportation Budget Trends: 2000-2021, WisDOT
                                Bureau of Budget (https://wisconsindot.gov/
                                Documents/about-wisdot/performance/budget/
                                TransportationBudgetTrends2020-21.pdf).
                                user charge. While the future source(s)
                                of revenue is uncertain, an assumed
                                continuation of current federal funding levels
                                under the IIJA and recent state funding levels
                                with future infationary increases to both is
                                reasonable.
                                Estimated project costs must be in year-ofexpenditure dollars, refecting an assumed
                                infationary factor. An infationary factor of
                                1.74% was used for project costs. As noted, a
                                2.0% infationary factor was used for program
                                funding in accordance with WisDOT and
                                USDOT guidance
                            </p>

                        </div>
                    </div>


                    <div>
                        <div className="py-3 text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center  w-full" id="2">


                            <span className='text-orange-700 text-xl py-2 '>
                                COUNTY AND MUNICIPAL STREETS/
                                ROADWAYS
                            </span>


                            <p className='py-2'>
                                Municipal streets are mostly fnanced by
                                local funding sources. These include general
                                revenues (mostly from the property tax) and
                                bonds and, in the case of municipalities,
                                also special assessments, impact fees,
                                and tax increment fnancing. Counties cost
                                share with municipalities on some projects.
                                WisDOT distributes state funding to counties
                                and municipalities through the state’s
                                General Transportation Aids and Connecting
                                Highway Aids programs, and through other
                                local programs such as the Local Road
                                Improvement Program.
                                Figure 5-a, Historical County and Local Street/
                                Roadway Expenses, shows the expenditures
                                for operations and maintenance, construction,
                                and other street related facilities (e.g., lighting,
                                sidewalks, storm sewers) by municipalities
                                in the Metropolitan Planning Area from 2015
                                to 2019, the last year for which data was
                                available.2 The expenses include those from
                                local revenues as well as state and federal
                                programs. Total annual costs for Dane County
                                and all municipalities within the Metropolitan
                                Planning Area increased signifcantly over
                                this 5-year period from $117.9 million in 2015
                                to $181.4 million in 2019 with the largest
                                increases in 2018-‘19. This was due in part
                                2
                                Source: County and Municipal Revenues and
                                Expenditures by Wisconsin Cities, Villages & Towns reports
                                published by the Wisconsin Department of Revenue.
                                to sharp increases in the cost of roadway
                                construction materials. The annual average
                                over the 5-year period was $149.5 million.
                                This includes an average of $88.1 million for
                                construction and $61.4 million for operations
                                and maintenance
                            </p>
                        </div>
                        <div className='w-full flex justify-center flex-col items-center'>
                            <div className='flex justify-center text-center items-center'>

                                <span className='text-orange-700 text-xl '>
                                    FEDERAL AND STATE FUNDING FOR
                                    STREETS/ROADWAYS
                                </span>
                            </div>
                            <p className='text-lg'>
                                Federal and state funding accounts for
                                25.5% and 64.7% of revenues, respectively,
                                in the WisDOT 2021-‘23 biennial budget with
                                bond funds (3.6%) and other funds (3.5%)
                                accounting for the remainder. Federal
                                funding is derived primarily from the federal
                                motor fuel tax and then allocated to the states
                                and large urban areas. Federal program
                                funding sources under the current surface
                                transportation legislation, the IIJA, that are
                                used for roadway improvements include the
                                following:
                                • National Highway Performance Program
                                (NHPP);
                                • Surface Transportation Program Block
                                Grant (STBG) Program (formerly Surface
                                Transportation Program) – includes three
                                categories of funding (Urban, Rural/Small
                                Urban, and State Flexibility); and
                                • Highway Safety Improvement Program
                                (HSIP) – also includes three categories.
                                The NHPP and STBG – State Flexibility
                                programs have been used exclusively for
                                state highway projects, while the HSIP
                                program is available for funding both
                                state and local projects. The STBG – Urban
                                and Rural/Small Urban programs are for
                                county and local roadway projects. For the
                                Metropolitan Planning Area, the STBG Urban
                                Program is the most signifcant of these
                                federal programs for local projects. Most of
                                the funding has been used for county and
                                local road projects, but the program has
                                also been used for other capital projects
                                such Metro Transit bus purchases and an
                                ITS project. A bicycle/pedestrian project was
                                approved in the last application cycle. The
                                MPO also funds its Transportation Demand
                                Management (TDM) program primarily with
                                this funding.
                                The Greater Madison MPO receives an
                                allocation of STBG – Urban Program funding
                                and selects county and local projects for
                                funding based on approved policies and
                                project evaluation criteria. The MPO’s annual
                                allocation had been $6.86 million in the recent
                                past, but will increase to $8.99 million in FFY
                                2022 under the IIJA. A further small increase
                                is expected in FFY 2023 and beyond once
                                2020 Census urban area population data is
                                factored into the funding allocations. That has
                                not been factored into the revenue estimate.

                                State transportation funding is derived
                                primarily from the state motor fuel tax, driver
                                license fees, and vehicle registration fees.
                                Funding for state highways is distributed
                                through several programs, including the
                                following:
                                <br></br>
                            </p>
                            <img
                                src={Figure_5_a_Historical_County_and_Municipal_Street_Roadway}
                                className='object-cover w-full '
                            >
                            </img>
                            <p className='text-lg py-2'>
                                • State Highway Rehabilitation (SHR)
                                program, which funds maintenance work
                                on existing state highways along with
                                safety and minor capacity improvements;
                                <br></br>
                                • Highway System Management and
                                Operations (HSMO) program, which
                                funds activities to ensure the proper
                                functioning and safety of the state highway
                                system, including trafc operations
                                and management of the State Trafc
                                Operations Center; and
                                <br></br>
                                • Majors program, which funds the most
                                complex and costly projects, often involving
                                capacity expansion, to address the most
                                serious defciencies on the most important
                                state highways.
                                <br></br>
                                Figure 5-b shows the annual federal and
                                state funding program revenue estimates
                                (in current dollars), in most cases based on
                                recent funding levels over the past 5-6 years
                                (2016-2021), but modifed by the federal
                                program funding increases provided by the
                                IIJA, which are assumed to continue moving
                                forward. WisDOT provided the data on recent
                                federal and state program funding. For state
                                highway construction, estimated annual
                                funding for Majors program, backbone and
                                non-backbone highway projects, and bridge
                                projects is $52.7 million, while estimated
                                funding for state highway maintenance and
                                operations is $9.1 million, for a total of $61.8
                                million. Estimated annual federal funding
                                for local roadway and bridge construction
                                projects is $13 million, including $9 million
                                in STBG Urban funding through the MPO.

                            </p>
                        </div>


                    </div>



                    <div className="py-3 text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center w-full" id="3">
                        <div className=''>
                            <p className=''>Figure 5-f shows the projected total
                                transportation revenues for state highway,
                                local roadway, transit, and bicycle/pedestrian
                                facility projects for the next 28-year period
                                from 2022 to 2050. The estimated revenues
                                are based on the average annual estimates
                                in Figures 5-b, 5-d, and 5-e, which, as noted,
                                are based on recent and programmed
                                funding levels, as well as the federal funding
                                program increases in IIJA. Infationary
                                increases to the revenue sources are
                                assumed. It is estimated that a total of almost </p>
                        </div>
                        <img
                            src={Figure_5_f_Estimated_Transportation_Revenue_2022_2050}
                            className=' w-full object-cover'
                        >
                        </img>
                        <p className=''>
                            $13 billion will available to fnance projects over the 28-year planning
                            period. This includes $6.4 billion for roadway construction, $3.3 billion for
                            roadway operations and maintenance, $2.9 billion for transit, and $343
                            million for multi-use path construction.
                            The average annual federal and state roadway revenue estimates are
                            based on a 6-year rolling average5
                            of expended funds between 2016 and
                            2021 obtained from WisDOT. A percentage increase in the federal funding
                            was applied based on the percentage increase in federal programs
                            (NHPP, HSIP) funding under the IIJA. Local roadway revenue estimates are
                            based on the 5-year average of expended funds from 2015-2019 obtained
                            from State Department of Revenue reports, subtracting out federal and
                            state funding received. An additional 2% annual increase beyond the 2%
                            infationary factor (4% total) was assumed for local construction funding
                            and 1.5% for operations and maintenance funding, refecting additional
                            property tax revenue from new growth. The increases were necessary to
                            provide sufcient revenues to cover estimated expenses accounting for the
                            growth in street lane miles.
                            Metro Transit capital (federal and local) and operating (federal, state,
                            local) revenues are based on programmed expenditures for years 2022-
                            2026 due to the unique nature of these years with the East-West BRT
                            project. Revenues are based on the 4-year average from 2015-2019 in the
                            agency’s National Transit Database (NTD) reports for remaining years,
                            with an adjustment to the federal funding to account for increases under
                            IIJA.6 As noted above, federal funding for of-street bicycle and pedestrian
                            facilities is based on the MPO’s FY 2022 allocation of TAP funding under
                            IIJA and estimated amount of statewide TAP funding the region will receive
                            with the increase under IIJA and recent experience with local projects
                            receiving grants. State, local, and other funding is based on the average
                            funding programmed from 2018-2022 for bicycle path projects.
                            Average annual funding levels were extrapolated to 2050 using an
                            infation rate of two percent. Funds were then divided into three time
                            5
                            5-year rolling average period for the General Transportation Aids and Connecting Highway
                            Aids programs. Local Bridge program funding is based on average annual project funding
                            programmed for FY 2021-‘25. Majors program funding is based on average annual amount
                            enumerated for projects from FY 2022-2026.
                            6 Year 2020 data was excluded due to the unique budget situation that year due to COVID-19.periods (2022-2026, 2027-2035, and 2036-
                            2050) refecting programmed projects over
                            the next fve years, the following eight (8)
                            years to 2035, and the fnal ffteen (15) years
                            to 2050. A larger increment was used for the
                            fnal 15 years due to the greater uncertainty
                            that far out into the future.
                        </p>
                    </div>

                    <div className="py-3 text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center w-full" id="4">
                        <div>
                            <p className=''>Figure 5-g shows projected transportation
                                expenses. Expenses are estimated at $12.5
                                billion for the planning period. Separate
                                methodologies, detailed below, were
                                developed to determine future expenses
                                for roadway construction, maintenance,
                                and operations; Metro Transit capital and
                                operating costs; and of-street multi-use path
                                and grade-separated bicycle/pedestrian
                                crossing facilities. </p>
                        </div>

                        <div className='w-full py-4'>
                            <img
                                src={Figure_5_g_Estimated_Transportation_Expenses_2022_2050}
                                className=' w-full object-cover'
                            ></img>
                        </div>
                        <div className='w-full '>
                            <p className=''>Figure 5-h shows the pavement condition of
                                state highways by type and local roadways
                                by functional classifcation in 2015 and 2019.
                                Next, average per lane mile roadway
                                construction and maintenance and
                                operations costs were calculated for local
                                roadways within the City of Madison, other
                                metropolitan area cities and villages, area
                                towns, and county highways by taking the
                                total lane miles and dividing that by the
                                annual costs in 2015, 2017, and 2019 and
                                then averaging the cost per mile for those
                                years. Average construction cost was highest
                                for Dane County at $29,360 per lane mile.
                                City of Madison and suburban city/village
                                costs were similar at $20,750 and $22,290
                                respectively while town costs were much
                                cheaper at $3,800. Dane County also spent
                                the most per lane mile on maintenance and
                                operations at $19,020 followed by Madison at
                                $16,160, suburban cities and villages at $12,170,
                                and towns at $5,940. The much lower town
                                costs refect the rural nature of those roads
                                FUNDING THE PLAN: FINANCIAL CAPACITY ANALYSIS
                                without pedestrian and bicycle facilities, street in the City of Madison and 2.99% in suburban
                                lights, etc. cities and villages, refecting the faster
                                percentage growth in the suburbs and in A lane mileage growth factor was calculated particular peripheral growth with new street by comparing year-over-year growth of the construction. The growth rates, lane mileage local roadway network (arterials, collectors, costs, and infation factor of 2 percent were local streets) for Dane County, City of
                                Madison, suburban cities and villages, and applied for construction and operations and
                                maintenance and extrapolated out to 2050. towns. The mileage in towns actually showed
                                a declining trend due to annexations. The Using these assumptions, it is projected that
                                number of lane-miles grew at a rate of 0.88% $4.4 billion will be needed for local roadway </p>

                            <img
                                src={Figure_5_h_Pavement_Condition_by_Roadway_Type_in_the_Madison_Metropolitan_Planning_Area}
                                className=' object-cover w-full'
                            >
                            </img>
                            <p className=''>construction over the 28-year planning period
                                to 2050, while $2.9 billion will be needed
                                for maintenance and operations. As noted,
                                local roadway revenue will need to increase
                                4% annually (including a 2% infationary
                                factor) for construction and 3.5% annually
                                for operations and maintenance from the
                                recent annual average in order to provide
                                sufcient revenue to cover expenses. With
                                this assumption, projected local roadway
                                revenues are $4.4 billion for construction and
                                $2.9 billion for maintenance and operations.
                                However, this would result in a continued slow
                                deterioration of local roadway conditions
                                based on recent trends. Revenue and
                                spending would need to be increased in
                                order to improve or even maintain current
                                roadway conditions. That increased spending
                                would help ensure that roadways receive
                                preventive maintenance before signifcant
                                deterioration, which can add 15-20 years of
                                useful life at a substantial cost savings over
                                reconstruction. Even with timely maintenance,
                                streets eventually need to be reconstructed
                                and utilities replaced.
                                Figures A-c and A-d in Appendix A include
                                lists of programmed, planned, and other
                                potential needed future local arterial
                                reconstruction projects based on current
                                roadway condition, the year a roadway was
                                originally constructed (where that data was
                                available), and assumed future development.
                                The fgures also include some programmed
                                and planned projects to improve trafc
                                operations and safety. The total infation
                                adjusted cost of these local roadway projects
                                over the planning period is $441 million. This
                                includes some programmed and planned
                                intersection and bridge projects. Some of the
                                identifed potential roadway reconstruction
                                projects are in peripheral developing or
                                planned development areas that will need
                                to be reconstructed to urban standards, but
                                many are in existing older already developed
                                areas. </p>
                        </div>
                    </div>

                    <div className="py-3 text-white sm:text-xl text-sm md:text-white scroll-section flex flex-col items-center w-full" id="5">
                        <div className=''>
                            <p className=''>The fnancial capacity analysis for the
                                RTP assumes a 2% annual infationary
                                increase in federal, state, and local funding.
                                However, the state gasoline tax rate will
                                need to be increased and eventually other
                                new revenue sources (e.g., mileage based
                                registration fee) created in order to ofset
                                lost gas tax revenue from electrifcation
                                of the feet and infationary increases
                                in project costs and address long-term
                                system preservation needs. The state gas
                                tax hasn’t been increased since 2006 when
                                the automatic indexing of the gas tax and
                                vehicle registration fees to the infation rate
                                was eliminated. The State Commission on
                                Transportation Finance and Policy’s report,
                                Keep Wisconsin Moving — Smart Investments,
                                Measurable Results, published back in 2013,
                                provided recommendations for generating
                                additional revenue, but thus far the state
                                legislature has not addressed the long-term
                                solvency of the state transportation fund.
                                While the IIJA provided historic levels of new
                                federal transportation program funding for
                                the next fve years, the bill is being funded
                                with general revenues, which is neither wise
                                nor sustainable.
                                An increase in funding levels is necessary to
                                maintain and gradually improve the existing
                                condition of the region’s roadway system,
                                which based on recent trends has been
                                declining. Increased funding is also needed to
                                fully implement the planned regional transit
                                system, in particular the latter two phases of
                                the BRT system and most of the additional
                                service hours from frequency improvements,
                                new service to developing areas, and
                                commuter express service to suburban
                                communities.
                                The fnancial analysis indicates that projected
                                revenues will be sufcient to implement the
                                local arterial roadway capacity expansion
                                projects identifed in Figure 4-d in Chapter 4
                                and listed in Figures A-a and A-b in Appendix
                                A while at the same time funding identifed
                                potential arterial street reconstruction
                                needs identifed in Figures A-c and A-d in
                                Appendix A and addressing other roadway
                                preservation needs in a manner similar to
                                recent trends. However, this means that local
                                roadway conditions will continue to slowly
                                deteriorate. Major capacity improvements in
                                two state highway corridors (Stoughton Road,
                                Beltline) may or may not be able to be fully
                                funded based on the funding for currently
                                programmed Major Program projects carried
                                forward into the future. This would depend
                                upon the scope of those projects. It is forecast
                                that $1 billion would be available for those
                                projects beyond the needs for other state
                                highway construction projects, if currently
                                programmed spending was carried forward
                                into the future.
                                Signifcant new transit funding will be needed
                                to implement the recommended regional
                                transit plan, including the latter two phases
                                of BRT, new regional commuter service, and
                                increased local service frequencies. The
                                largest gap is in operating funding. Based
                                on recent trends from 2010-2019 in terms of
                                service hour increases, only about 18% of the
                                recommended service hours in the regional
                                plan could be funded. Implementation of the
                                plan would require a new regional funding
                                mechanism, such as a regional transit
                                authority, with the ability to levy a sales tax.
                                Increases in the current City of Madison
                                vehicle registration fee would not be sufcient.
                                Estimated future revenues for multi-use path
                                projects based on recent funding levels would
                                be more than sufcient to fund the major
                                regional priority path projects illustrated in
                                Map 4-l in Chapter 4 and listed in Figure A-e
                                in Appendix A. These projects were identifed
                                as needed to address key missing links and
                                complete key segments of the planned
                                regional bikeway network illustrated in Map
                                4-j in Chapter 4. On-street facilities are
                                assumed to be included as part of roadway
                                projects. </p>
                        </div>
                    </div>
                </div>

            </div>



        </motion.div >
    )
}

export default Funding
