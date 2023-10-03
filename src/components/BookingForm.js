import React, { useEffect, useState } from "react";
import {
    TextField, Button, FormControl, InputLabel, Select,
    MenuItem, Grid, Table, TableBody, TableCell, TableHead, TableRow
} from '@mui/material';


const BookingForm = ({ availableTimes, setAvailableTimes, updateTimes }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });
    const [selectedTime, setSelectedTime] = useState('');
    const [bookingData, setBookingData] = useState([]);

    // const fetchAPI = window.fetchAPI;
    // Mock version of the API functions
    function fetchAPI(date) {
        // Return a static array of times for demonstration purposes
        return ["12:00", "1:00", "2:00", "3:00"];
    }

    function submitAPI(formData) {
        // Log the form data and return true for demonstration purposes
        console.log(formData);
        return true;
    }

    useEffect(() => {
        if (formData.date) {
            try {
                const apiTimes = fetchAPI(formData.date);

                // Reset current available times
                updateTimes({ type: 'RESET_TIMES' });

                // Update the state with the new available times from the API
                apiTimes.forEach(time => {
                    updateTimes({ type: 'ADD_TIME', time });
                });
            } catch (error) {
                console.error("Failed to fetch available times:", error);
            }
        }
    }, [formData.date, updateTimes]);

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
        console.log("availableTimes:", availableTimes);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation Data:", formData);

        const response = submitAPI(formData);
        if (response) {
            // Handle successful submission
            console.log("Reservation successfully submitted!");

            // Add the formData to the bookingData array
            setBookingData(prevData => [...prevData, formData]);

            // Optionally, you can reset the form data or navigate the user to another page, etc.
            setFormData({
                date: '',
                time: '',
                guests: '',
                occasion: '',
            });
        } else {
            // Handle failed submission
            console.error("Failed to submit reservation.");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="date"
                            name="date"
                            label="Date"
                            type="date"
                            value={formData.date}
                            onChange={handleChangeDate}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="time-label">Time</InputLabel>
                            <Select
                                labelId="time-label"
                                label="Time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChangeTime}
                            >
                                {[...new Set([...availableTimes, selectedTime].filter(Boolean).sort())].map((time, index) => (
                                    <MenuItem key={index} value={time}>
                                        {time} PM
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="guests"
                            name="guests"
                            label="Number of Guests"
                            type="number"
                            value={formData.guests}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ min: 1, max: 10, step: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="occasion-label">Occasion</InputLabel>
                            <Select
                                labelId="occasion-label"
                                label="Occasion"
                                id="occasion"
                                name="occasion"
                                value={formData.occasion}
                                onChange={handleChange}
                            >
                                <MenuItem value="birthday">Birthday</MenuItem>
                                <MenuItem value="anniversary">Anniversary</MenuItem>
                                <MenuItem value="business">Business</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    data-testid="submit-button"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Make Your reservation
                </Button>
            </form>

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
        </div>
    );
}

export default BookingForm;