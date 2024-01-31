import React, {useEffect, useState} from 'react';
import dispatcher from "../EX1_Dispatcher.jsx";
import eventsArray from "./culturalEventsArray.jsx"

const CHANGE_EVENT = "change";

const CulturalEventsStore = () => {
    const [events, setEvents] = useState([])

    const addChangeEventListner = (callback) => {
        document.addEventListener(CHANGE_EVENT, callback)
    }

    const removeChangeEventListner = (callback) => {
        document.removeEventListener(CHANGE_EVENT, callback)
    }

    const emitChange = () => {
        console.log('emitChange')
         document.dispatchEvent(new Event(CHANGE_EVENT))
    }

    const getStoreEvents = () => {
        console.log('getStoreEvents - ', events)
         return events
    }

    const addEventToMyEventsList = (id) => {
        const event = events.find(event => event.id === id)
        event.isAdded = true
    }

     const getEventsByType = (type) => {
         let tmp = eventsArray.filter(event => event.type === type)
         console.log("getEventsByType - tmp -", tmp);
         setEvents(tmp)
         console.log("getEventsByType - events", events);
         emitChange()
     }


    useEffect(() => {
        const handleAction = (action) => {
            switch (action.type) {
                case "ADD_EVENT":
                    setEvents([...events, action.payload]);
                    break;
                case "ADD_EVENT_TO_MY_EVENTSLIST":
                    addEventToMyEventsList(action.payload);
                    break;
                case "ADD_COMMENT":
                    setEvents([...events, action.payload]);
                    break;
                case "GET_EVENTS_BY_TYPE":
                    getEventsByType(action.payload);
                    break;
                case "GET_EVENT_DETAILS":
                    setEvents([...events, action.payload]);
                    break;
                case "GET_MY_EVENTLIST":
                    setEvents([...events, action.value]);
                    break;
                default:
                    break;
            }
        };

        const dispToken =  dispatcher.register(handleAction);

        return () => {
            dispatcher.unregister(dispToken);
        };
    }, []);


    return {
        addChangeEventListner,
        removeChangeEventListner,
        getStoreEvents,
        getEventsByType,

    }
};

export default CulturalEventsStore;

