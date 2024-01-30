import dispatcher from "../EX1_Dispatcher.jsx"
import actionTypes from "../actions/EX1_actionTypes.jsx"

export function addEvent(event) {
    dispatcher.dispatch({
        type: actionTypes.ADD_NEW_EVENT,
        payload: event
    })
}

export function addEventToMyEventsList(id) {
    dispatcher.dispatch({
        type: actionTypes.ADD_EVENT_TO_MY_EVENTSLIST,
        payload: id
    })
}

export function addComment(id, comment) {
    dispatcher.dispatch({
        type: actionTypes.ADD_COMMENT,
        payload: {id, comment}
    })
}

export function getEventsByType(type) {
    dispatcher.dispatch({
        type: actionTypes.GET_EVENTS_BY_TYPE,
        payload: type
    })
}

export function getEventDetails(id) {
    dispatcher.dispatch({
        type: actionTypes.GET_EVENT_DETAILS,
        payload: id
    })
}

export function getMyEventsList() {
    dispatcher.dispatch({
        type: actionTypes.GET_MY_EVENTLIST,
    })
}