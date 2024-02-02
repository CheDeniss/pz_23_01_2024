import React, {useState} from 'react';
import Favorit from "./Favorit.jsx";
import * as eventsActions from "../actions/EX1_actionCreator.jsx";
import './componentsStyles.css'
import DetailInfo from "./DetailInfo.jsx";
import {getDetailsOfEvent} from "../stores/culturalEventsStore.jsx";

const EventItem = ({props}) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)

    const [detailsData, setDetailsData] = useState(null);

    const closeDetails = () => {
        setIsDetailsOpen(false)
        setDetailsData(null)
    }

    const onDetails = async () => {
        await eventsActions.getEventDetails(props.id);
        const updatedDetailsData = getDetailsOfEvent();
        setDetailsData(updatedDetailsData);

        if (updatedDetailsData) {
            console.log('onDetails ->', updatedDetailsData);
            setIsDetailsOpen(true);
        }
    };


    return (
        <div className="event-item">
            <div>
                <h3>{props.name}</h3>
                <p>{props.type}</p>
                <p>{props.briefInfo}</p>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <Favorit isFavor={props.isFavorite} id={props.id}/>
                <button onClick={isDetailsOpen ? closeDetails : onDetails}>{isDetailsOpen ? 'Згорнути' : 'Детальніше'} </button>
            </div>
            <div className="details-part">
                <DetailInfo isOpen={isDetailsOpen} text={detailsData} id={props.id}/>
            </div>
        </div>
    );
};

export default EventItem;
