import React, {useEffect, useState} from 'react';

import Launch from "../Launch/Launch";
import './Launches.css'

const Launches = () => {
    const [launches, setLaunches] = useState([])
    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(flights => {
                setLaunches(flights.filter(flight=> flight.launch_year !== '2020'))
            });



    }, [])
    return (
        <div className={'launches__container'}>

            {
                launches.map(value => <Launch key={value.flight_number} item={value} />)

            }
            
        </div>
    );
};

export default Launches;