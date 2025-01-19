import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tabs } from '../../Constants/Tabs';

function Tabs() {
    const [selected, setSelected] = useState('Summary'); // Matches tabName in the array

    return (
        <div className="lg:flex flex-wrap gap-y-2 sm:hidden md:hidden">
            {tabs.map((tab) => (
                <Link
                    key={tab.id}
                    to={tab.to || '#'} // Fallback if `to` is undefined
                    onClick={() => setSelected(tab.tabName)}
                    className={`text-white py-2 px-2 mx-2 
                        rounded-t-lg cursor-pointer
                        hover:bg-[#33a8cb] hover:text-white
                        ${selected === tab.tabName ? "bg-[#33a8cb]" : "bg-[#61788a]"}`}
                >
                    {tab.tabName}
                </Link>
            ))}
        </div>
    );
}

export default Tabs;
