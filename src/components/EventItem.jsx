import React from 'react';

const EventItem = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.date}</p>
            <p>{props.time}</p>
            <hr/>
        </div>
    );
};

export default EventItem;
