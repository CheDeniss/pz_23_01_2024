import React, {useEffect, useState} from 'react';
import {addComment, getComments} from "../actions/EX1_actionCreator.jsx";
import {getCommentsOfEvent} from "../stores/culturalEventsStore.jsx";
import './componentsStyles.css'

const Comments = ({props}) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        console.log('Comments ->', props)
        getComments(props)
        const updateCommentsData = getCommentsOfEvent()
        setComments(updateCommentsData)

    }, [props])

    const handleInputChange = (event) => {
        const value = event.target.value;
        setComment(value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addComment(props, comment)
        setComment('')
    };

    return (
        <div className="comments-comtainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">
                    Коментарів: {comments.length} <button type="submit">Add Comment</button>
                    <textarea id="comment" name="comment" value={comment} onChange={handleInputChange} />
                </label>
                <br />

                {comments.length > 0 && (
                    <div>
                        {comments.map((comment, index) => (
                            <div key={index}>
                                <span> · · · {comment}</span>
                            </div>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );

};

export default Comments;

