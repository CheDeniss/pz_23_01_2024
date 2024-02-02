import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'
import {addEvent} from "../actions/EX1_actionCreator.jsx";
import './componentsStyles.css'

const NewEvent = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('Фільм');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [briefInfo, setBriefInfo] = useState('');
    const [details, setDetails] = useState('');
    const IsFavorite = false;
    const comments = [];
    const id = uuidv4();



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit ->', id, comments, name, type, date, time, briefInfo, details, IsFavorite);
        addEvent({id, comments, name, type, date, time, briefInfo, details, IsFavorite});
    }


    return (
        <div>
            <h1>Нова подія</h1>
            <form>
                <div className="form-part">
                    <label htmlFor="name">Назва події</label>
                    <input type="text" id="name" name="name"  onChange={(e) => setName(e.target.value)} required/>
                </div><br/>
                <div className="form-part">
                    <label htmlFor="type">Тип події</label>
                    <select id="type" name="type" onChange={(e) => setType(e.target.value)} required>
                        <option value="Фільм">Фільм</option>
                        <option value="Спектакль">Спектакль</option>
                        <option value="Концерт">Концерт</option>
                    </select>
                </div><br/>
                <div className="form-part">
                    <label htmlFor="date">Дата</label>
                    <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)} required/>
                </div><br/>
                <div className="form-part">
                    <label htmlFor="time">Час</label>
                    <input type="time" id="time" name="time" onChange={(e) => setTime(e.target.value)} required/>
                </div><br/>
                <div className="form-part">
                    <label htmlFor="place">Інфо</label>
                    <textarea id="briefInfo" name="briefInfo" onChange={(e) => setBriefInfo(e.target.value)} required/>
                </div><br/>
                <div className="form-part">
                    <label htmlFor="description">Опис</label>
                    <textarea id="description" name="description" onChange={(e) => setDetails(e.target.value)} required/>
                </div><br/>
                <button type="submit" onClick={handleSubmit}>Додати</button>
            </form>
        </div>
    );
};

export default NewEvent;
