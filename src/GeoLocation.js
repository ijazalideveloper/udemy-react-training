import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const GeoLocation = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    console.log(props.lat, season);

    const text = season === 'winter' ? 'Burr, it is chilly' : 'Let hit the beach';

    const icon = season === 'winter' ? 'snowflate' : 'sun';

    return (
        <div>
            <i className={`${icon} icon`} />
            <h1>{text}</h1>
            <i className={`${icon} icon`} />
        </div>
    )
}

export default GeoLocation;