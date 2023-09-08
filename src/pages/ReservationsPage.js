import React, { useReducer } from "react";
import {
    Container, Box, Typography, Divider,
} from '@mui/material';
import BookingForm from "../components/BookingForm";


const initialState = [
    '5:00', '5:30', '6:00', '6:30', '7:00', '7:30',
    '8:00', '8:30', '9:00', '9:30'
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
                        setAvailableTimes={setAvailableTimes}
                        updateTimes={updateTimes}
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default ReservationsPage;