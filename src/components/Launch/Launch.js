import React from 'react';

import './Launch.css'

const Launch = ({item}) => {
    return (
        <div className={'launch'}>

            <div className={'name__year_div'}>

                <h2>{item.mission_name}</h2>
                <h3>Year: {item.launch_year}</h3>

            </div>

            <img src={item.links.mission_patch_small} alt="mission_patch_small"/>

        </div>
    );
};

export default Launch;