import React, { useEffect, useState, useRef } from "react";
import { validateBookingForm } from "./BookingFormValidation";
import './BookingForm.css';


const BookingForm = ({ availableTimes, updateTimes, submitForm, formData, setFormData }) => {
    const [selectedTime, setSelectedTime] = useState('');

    function fetchAPI(date) {
        return ["12:00", "1:00", "2:00", "3:00"];
    }

    const prevDateRef = useRef();

    useEffect(() => {
        if (formData.date && formData.date !== prevDateRef.current) {
            try {
                const apiTimes = fetchAPI(formData.date);
                updateTimes({ type: 'RESET_TIMES' });
                apiTimes.forEach(time => {
                    updateTimes({ type: 'ADD_TIME', time });
                });
                // Update the ref to the current date
                prevDateRef.current = formData.date;
            } catch (error) {
                console.error("Failed to fetch available times:", error);
            }
        }
    }, [formData.date, updateTimes]);

    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        let errors = validateBookingForm(formData);
        setFormErrors(errors);
        return Object.keys(errors).length === 0; // return true if no errors
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleChangeDate = (e) => {
        handleChange(e);
    }

    const handleChangeTime = (e) => {
        if (selectedTime) {
            updateTimes({ type: 'ADD_TIME', time: selectedTime });
        }
        setSelectedTime(e.target.value);
        updateTimes({ type: 'REMOVE_TIME', time: e.target.value });
        handleChange(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitForm(formData);
        }
    }

    return (
        <div className="booking-container" aria-label="Booking Form">
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="booking-input-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        required
                        id="date"
                        name="date"
                        type="date"
                        data-testid="date"
                        value={formData.date}
                        onChange={handleChangeDate}
                        className="booking-input"
                        aria-label="Select Date"
                    />
                    <label htmlFor="time">Time:</label>
                    <select
                        required
                        id="time"
                        name="time"
                        data-testid="time"
                        value={formData.time || ''}
                        onChange={handleChangeTime}
                        className="booking-input"
                        aria-label="Select Time"
                    >
                        <option value="" disabled>Select a time</option>
                        {[...new Set([...availableTimes, selectedTime].filter(Boolean).sort())].map((time, index) => (
                            <option key={index} value={time}>
                                {time} PM
                            </option>
                        ))}
                    </select>
                    <label htmlFor="guests">Number of Guests:</label>
                    <input
                        required
                        id="guests"
                        name="guests"
                        type="number"
                        data-testid="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        max="10"
                        step="1"
                        className="booking-input"
                    />
                    <label htmlFor="occasion">Occasion:</label>
                    <select
                        id="occasion"
                        name="occasion"
                        data-testid="occasion"
                        value={formData.occasion || ''}
                        onChange={handleChange}
                        className="booking-input"
                    >
                        <option value="" disabled>Select an occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="business">Business</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                {formErrors.date && <div className="error">{formErrors.date}</div>}
                {formErrors.time && <div className="error">{formErrors.time}</div>}
                {formErrors.guests && <div className="error">{formErrors.guests}</div>}
                {formErrors.occasion && <div className="error">{formErrors.occasion}</div>}
                <button
                    type="submit"
                    data-testid="submit-button"
                    className="booking-button"
                    aria-label="Make Your reservation On Click"
                >
                    Make Your reservation
                </button>
            </form>
        </div>
    );
}

export default BookingForm;
