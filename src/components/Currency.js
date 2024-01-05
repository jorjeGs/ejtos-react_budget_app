import React, { useState, useContext } from "react";
import { AppContext } from '../context/AppContext';

//TASK 3
const Currency = () => {

    const {currency, dispatch} = useContext(AppContext)

    const [localcurrency, setCurrency] = useState(currency)

    const handleCurrency = (newCurrency) => {
        setCurrency(newCurrency)
        //use dispatch CHG_CURRENCY
        dispatch({
            type: "CHG_CURRENCY",
            payload: newCurrency,
        })
    }
    return (
        <div className="dropdown">
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Currency {localcurrency}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" onClick={event => handleCurrency('$')}>$ Dollar</a></li>
                <li><a className="dropdown-item" onClick={event => handleCurrency('£')}>£ Pound</a></li>
                <li><a className="dropdown-item" onClick={event => handleCurrency('€')}>€ Euro </a></li>
                <li><a className="dropdown-item" onClick={event => handleCurrency('₹')}>₹ Rupee </a></li>
            </ul>
        </div>
    )
}

export default Currency;