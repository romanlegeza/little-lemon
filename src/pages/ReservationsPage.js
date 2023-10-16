import React, { useReducer, useState, useEffect } from "react";
import {
    Container, Box, Typography, Divider,
} from '@mui/material';
import BookingForm from "../components/BookingForm";
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const initialState = [
    '5:00', '5:30', '6:00', '6:30', '7:00', '7:30',
];

const timeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TIME':
            return [...new Set([...state, action.time])].sort();
        case 'REMOVE_TIME':
            return state.filter((time) => time !== action.time);
        case 'RESET_TIMES':
            return initialState;
        default:
            return state;
    }
}

const ReservationsPage = () => {
    const [availableTimes, setAvailableTimes] = useReducer(timeReducer, initialState);

    const updateTimes = (action) => {
        setAvailableTimes(action);
    }
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    const [bookingData, setBookingData] = useState(() => {
        const savedData = localStorage.getItem('bookingData');
        return savedData ? JSON.parse(savedData) : [];
    });

    // Save the bookingData to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem('bookingData', JSON.stringify(bookingData));
        } catch (error) {
            console.error("Failed to save bookingData to localStorage:", error);
        }
    }, [bookingData]);

    const navigate = useNavigate();

    function submitAPI(formData) {
        // Log the form data and return true for demonstration purposes
        console.log("Reservation Data:", formData);
        return true;
    }

    const submitForm = (e) => {
        const response = submitAPI(formData);
        if (response) {
            // Handle successful submission
            console.log("Reservation successfully submitted!");

            // Directly update localStorage for debugging purposes
            const currentData = JSON.parse(localStorage.getItem('bookingData')) || [];
            const updatedData = [...currentData, formData];
            localStorage.setItem('bookingData', JSON.stringify(updatedData));

            // Add the formData to the bookingData array
            setBookingData(prevData => [...prevData, formData]);

            // Reset the form data or navigate the user to another page, etc.
            setFormData({
                date: '',
                time: '',
                guests: '',
                occasion: '',
            });
            navigate('/confirmed-booking');
        } else {
            // Handle failed submission
            console.error("Failed to submit reservation.");
        }
    }

    return (
        <Container>
            <Box mt={5} mb={5}>
                <Typography variant="h3" align="center">
                    Make a Reservation
                </Typography>
                <Divider variant="moddle" sx={{ my: 2 }} />

                <Box mt={3}>
                    <BookingForm
                        availableTimes={availableTimes}
                        updateTimes={updateTimes}
                        submitForm={submitForm}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </Box>
            </Box>
            {/* Display the booking data */}
            {bookingData.length > 0 && (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Number of Guests</TableCell>
                            <TableCell>Occasion</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookingData.map((booking, index) => (
                            <TableRow key={index}>
                                <TableCell>{booking.date}</TableCell>
                                <TableCell>{booking.time}</TableCell>
                                <TableCell>{booking.guests}</TableCell>
                                <TableCell>{booking.occasion}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </Container>
    );
}

export default ReservationsPage;