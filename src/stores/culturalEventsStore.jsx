import React, {useEffect, useState} from 'react';
import dispatcher from "../EX1_Dispatcher.jsx";
import eventsArray from "./culturalEventsArray.jsx"
import {addComment, getMyEventsList} from "../actions/EX1_actionCreator.jsx";

    const CHANGE_EVENT = "change";

    let events = []
    let details
    let comments = []


const handleAction = (action) => {
        switch (action.type) {
            case "ADD_NEW_EVENT":
                console.log('ADD_EVENT ->', action.payload)
                eventsArray.push(action.payload)
                break;
            case "ADD_EVENT_TO_MY_EVENTSLIST":
                console.log('ADD_EVENT_TO_MY_EVENTSLIST ->', action.payload)
                addEventToMyEventsList(action.payload);
                culturalEventsStore.emitChange()
                break;
            case "ADD_COMMENT":
                addCommentById(action.payload.id, action.payload.comment)
                culturalEventsStore.emitChange()
                break;
            case "GET_COMMENTS":
                getCommentsById(action.payload)
                culturalEventsStore.emitChange()
                break;
            case "GET_EVENTS_BY_TYPE":
                getEventsByType(action.payload)
                culturalEventsStore.emitChange()
                break;
            case "GET_EVENT_DETAILS":
                takeDetails(action.payload)
                culturalEventsStore.emitChange()
                break;
            case "GET_MY_EVENTLIST":
                createMyEventsList()
                culturalEventsStore.emitChange()
                break;
            default:
                break;
        }
    };

    dispatcher.register(handleAction)

    const addCommentById = (id, comment) => {
        console.log('addComment ->', id, comment)
        let tmp = eventsArray.find(event => event.id === id)
        tmp.comments.push(comment)
        console.log('addComment ->', tmp.comments)
    }

   const getCommentsById = (id) => {
        console.log('getCommentsById ->', id)
        let tmp = eventsArray.find(event => event.id === id)
        console.log('getCommentsById ->', tmp.comments)
        comments = tmp.comments
    }

    export const getCommentsOfEvent = () => {
        console.log('getCommentsOfEvent ->', comments)
        return comments
    }

    export const getStoreEvents = () => {
        console.log('getStoreEvents ->', events)
        //return events
        return events
    }

    const takeDetails = (id) => {
        console.log('takeDetails ->', id)
        let tmp = eventsArray.find(event => event.id === id)
        console.log('takeDetails ->', tmp.details)
        details = tmp.details
    }

    export const getDetailsOfEvent = () => {
        console.log('getEventDetails ->', details)
        return details
    }

    const addEventToMyEventsList = (id) => {
        const event = events.find(event => event.id === id)
        event.isFavorite = !event.isFavorite
        console.log('addEventToMyEventsList ->', event)
    }

    const getEventsByType = (type) => {
        console.log("getEventsByType - type -", type);
        events = eventsArray.filter((event) => event.type === type);
        console.log("getEventsByType - events", events);
    };

    const createMyEventsList = () => {
        console.log("createMyEventsList - events", events);
        events = eventsArray.filter((event) => event.isFavorite === true);
        console.log("createMyEventsList - events", events);
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
    getStoreEvents, getDetailsOfEvent, getCommentsOfEvent
}

export default culturalEventsStore;

