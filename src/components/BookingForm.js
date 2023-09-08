import React, { useState } from "react";
import {
    TextField, Button, FormControl, InputLabel, Select,
    MenuItem, Grid
} from '@mui/material';


const BookingForm = ({ availableTimes, setAvailableTimes, updateTimes }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });
    const [selectedTime, setSelectedTime] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleChangeDate = (e) => {
        setAvailableTimes({ type: 'RESET_TIMES' });
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
    }

    return (
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
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
            >
                Make Your reservation
            </Button>
        </form>
    );
}

export default BookingForm;