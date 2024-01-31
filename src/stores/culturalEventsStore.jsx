import React, {useEffect, useState} from 'react';
import dispatcher from "../EX1_Dispatcher.jsx";
import eventsArray from "./culturalEventsArray.jsx"

    const CHANGE_EVENT = "change";

    let events = []

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
                getEventsByType(action.payload)
                culturalEventsStore.emitChange()
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

    dispatcher.register(handleAction);

    const getStoreEvents = () => {
        console.log('getStoreEvents ->', events)
        //return events
        return events
    }

    const addEventToMyEventsList = (id) => {
        const event = events.find(event => event.id === id)
        event.isAdded = true
    }

    const getEventsByType = (type) => {
        console.log("getEventsByType - type -", type);
        events = eventsArray.filter((event) => event.type === type);
        console.log("getEventsByType - events", events);
    };

    const culturalEventsStore = {

    addChangeEventListner: (callback) => {
        document.addEventListener(CHANGE_EVENT, callback)
    },

    removeChangeEventListner: (callback) => {
        document.removeEventListener(CHANGE_EVENT, callback)
    },

    emitChange: () => {
        console.log('emitChange ->')
        document.dispatchEvent(new Event(CHANGE_EVENT))
    },
    getStoreEvents,
    getEventsByType
}

export default culturalEventsStore;

