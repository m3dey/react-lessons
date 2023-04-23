import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year, mission_patch_small} = launch;
    console.log(mission_patch_small)
    return (
        <div>
            <h3>mission_name: {mission_name}</h3>
            <p>Launch year: {launch_year}</p>
            <img src={launch.links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;