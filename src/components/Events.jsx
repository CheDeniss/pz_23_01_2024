import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CulturalEventsStore from "../stores/culturalEventsStore.jsx";
import * as eventsActions from "../actions/EX1_actionCreator.jsx";
import {getEventsByType} from "../actions/EX1_actionCreator.jsx";

const Events = () => {

    const culturalEventsStore = CulturalEventsStore();

const {type} = useParams()


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

    const [selectedEvents, setSelectedEvents] = useState([]);

    useEffect(() => {
        culturalEventsStore.addChangeEventListner(onChange);
        eventsActions.getEventsByType(eventType);

        return () => {
            culturalEventsStore.removeChangeEventListner(onChange);
        };
    }, [eventType]);

    function onChange() {
        setSelectedEvents(culturalEventsStore.getStoreEvents())
        console.log('onChange')
        console.log(selectedEvents);
    }

    return (
        <div>
            <h1>{type}</h1>
            <div>
                {selectedEvents.map(event =>
                <div key={event.id}>
                    <h3>{event.name}</h3>
                    <p>{event.type}</p>
                    <p>{event.briefInfo}</p>
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <button onClick={() => eventsActions.addEventToMyEventsList(event.id)}>Додати до моїх подій</button>
                </div>)}
            </div>
        </div>
    )
};

export default Events;
