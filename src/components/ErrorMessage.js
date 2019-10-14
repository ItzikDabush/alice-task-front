import React from 'react';
import Button from './Button';
import './ErrorMessage.css';
const ErrorMessage = ({ currentCity, getWeather }) => {
    return (
        <React.Fragment>
            <p className='ErrorMessage-text'>הייתה תקלה ... אולי ננסה שוב?</p>
            <Button currentCity={currentCity} getWeather={getWeather} />
        </React.Fragment>
    )
}

export default ErrorMessage;
