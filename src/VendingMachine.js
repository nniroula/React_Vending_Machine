import React from 'react';
import { NavLink } from 'react-router-dom';
// import Chips from './Chips';


const VendingMachine = () => {
    return (
        <>
            <div>
                <NavLink to="/chips">Chips </NavLink>
            </div>
            <div>
                <NavLink to="/soda">Soda </NavLink>
            </div>
            <div>
                <NavLink to="/sardines">Sardines </NavLink>
            </div>
        </>
    )
}

export default VendingMachine;