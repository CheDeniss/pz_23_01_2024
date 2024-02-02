import React, {useEffect, useState} from 'react';
import {useLocation } from "react-router-dom";
import culturalEventsStore from "../stores/culturalEventsStore.jsx";
import * as eventsActions from "../actions/EX1_actionCreator.jsx";
import EventItem from "./EventItem.jsx";

const Events = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type');

    const [selectedEvents, setSelectedEvents] = useState([]);
    let eventType;

    switch (type) {
        case "ФІЛЬМИ":
            eventType = "Фільм";
            break;
        case "СПЕКТАКЛІ":
            eventType = "Спектакль";
            break;
        case "КОНЦЕРТИ":
            eventType = "Концерт";
            break;
        case "МОЇ ПОДІЇ":
            eventType = "Обране";
            break;
        default:
            eventType = "No such type";
    }

    useEffect(() => {
        console.log('useEffect Events')

        culturalEventsStore.addChangeEventListner(onChange);
        eventType === "Обране" ? eventsActions.getMyEventsList() : eventsActions.getEventsByType(eventType)
        return () => {
            culturalEventsStore.removeChangeEventListner(onChange);
        };
    }, [type]);

    function onChange() {
        console.log('onChange start ->', culturalEventsStore.getStoreEvents())
        setSelectedEvents(culturalEventsStore.getStoreEvents() || [])
        console.log('onChange - result', selectedEvents)
    }

    return (
        <div>
            <h1>{type}</h1>
            <div className="flex-outlet">
                {selectedEvents.map(event =>
                <div key={event.id}>
                    <EventItem props={event}/>
                </div>)}
            </div>
        </div>
    )
};

export default Events;
