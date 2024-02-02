import React from 'react';
import './componentsStyles.css'
import Comments from "./Comments.jsx";

const DetailInfo = ({ isOpen, text, id }) => {
    return (
        <div className={`detail-${isOpen ? 'show' : 'hide'}`}>
            <p>{text}</p>
            <hr/>
            <Comments props={id}/>
        </div>
    );
};

export default DetailInfo;
