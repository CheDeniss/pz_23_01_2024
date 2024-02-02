import React, { useState } from 'react';
import heart_no from "../assets/heart-no.png";
import heart_yes from "../assets/heart-yes.png";
import { addEventToMyEventsList } from "../actions/EX1_actionCreator.jsx";

const Favorit = ({ isFavor, id }) => {
    const [isFavorite, setIsFavorite] = useState(isFavor);

    const changeState = () => {
        setIsFavorite(!isFavorite);
        addEventToMyEventsList(id);
    };

    return (
        <div>
            <img
                onClick={changeState}
                height={25}
                src={isFavorite ? heart_yes : heart_no}
                alt={isFavorite ? 'yes' : 'no'}
            />
        </div>
    );
};

export default Favorit;
