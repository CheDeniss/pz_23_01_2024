// import React, {useState} from 'react';
// import {Link, useLocation} from "react-router-dom";
// import './index.css'
//
// const Menu = () => {
//     const currentLocation = useLocation()
//     const types = ["ФІЛЬМИ", "СПЕКТАКЛІ", "КОНЦЕРТИ", "МОЇ ПОДІЇ"]
//     return (
//         <div className='nav-container'>
//             <nav>
//                 <ul className="menu-ul">
//                     <li><Link className={`menu-li ${currentLocation.pathname === '/podiya/kino' ? 'selected-menu' : ''}`} to={`/podiya/${types[0]}`}>Фільми</Link></li>
//                     <li><Link className={`menu-li ${currentLocation.pathname === '/podiya/spectacl' ? 'selected-menu' : ''}`} to ={`/podiya/${types[1]}`}>Спектаклі</Link></li>
//                     <li><Link className={`menu-li ${currentLocation.pathname === '/podiya/koncert' ? 'selected-menu' : ''}`}  to={`/podiya/${types[2]}`}>Концерти</Link></li>
//                     <li><Link className={`menu-li ${currentLocation.pathname === '/podiya/my' ? 'selected-menu' : ''}`}  to={`/podiya/${types[3]}`}>Мої події</Link></li>
//                     <li><Link className={`menu-li ${currentLocation.pathname === '/podiya/new' ? 'selected-menu' : ''}`}  to="/podiya/new">Нова подія</Link></li>
//                     <li><Link className={`menu-li ${currentLocation.pathname === '/calc' ? 'selected-menu' : ''}`}  to="/calc">Калькулятор</Link></li>
//                     <li><Link className={`menu-li ${currentLocation.pathname === '/XO' ? 'selected-menu' : ''}`}  to="/XO">Хрестики-нолики</Link></li>
//
//
//                 </ul>
//             </nav>
//         </div>
//     );
// };
//
// export default Menu;


import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './index.css';

const Menu = () => {
    const currentLocation = useLocation();
    const types = ["ФІЛЬМИ", "СПЕКТАКЛІ", "КОНЦЕРТИ", "МОЇ ПОДІЇ"];

    return (
        <div className='nav-container'>
            <nav>
                <ul className="menu-ul">
                    {types.map(type => (
                        <li key={type}>
                            <Link
                                className={`menu-li ${currentLocation.search === (`?type=${encodeURIComponent(type)}`) ? 'selected-menu' : ''}`}
                                to={`/podiya?type=${type}`}
                            >
                                {type}
                            </Link>
                        </li>
                    ))}
                    <li><Link className={`menu-li ${currentLocation.pathname === '/podiya/new' ? 'selected-menu' : ''}`} to="/podiya/new">Нова подія</Link></li>
                    <li><Link className={`menu-li ${currentLocation.pathname === '/calc' ? 'selected-menu' : ''}`} to="/calc">Калькулятор</Link></li>
                    <li><Link className={`menu-li ${currentLocation.pathname === '/XO' ? 'selected-menu' : ''}`} to="/XO">Хрестики-нолики</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
