import React, { useState } from "react";
import {
    Container, Box, Typography, TextField, Button, Divider,
    FormControl, InputLabel, Select, MenuItem, Grid
} from '@mui/material';


const ReservationsPage = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation Data:", formData);
    }

    return (
        <Container>
            <Box mt={5} mb={5}>
                <Typography variant="h3" align="center">
                    Make a Reservation
                </Typography>
                <Divider variant="moddle" sx={{ my: 2 }} />

                <Box mt={3}>
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
                                    onChange={handleChange}
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
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="12:00">5:00 PM</MenuItem>
                                        <MenuItem value="12:30">5:30 PM</MenuItem>
                                        <MenuItem value="13:00">6:00 PM</MenuItem>
                                        <MenuItem value="13:30">6:30 PM</MenuItem>
                                        <MenuItem value="14:00">7:00 PM</MenuItem>
                                        <MenuItem value="14:30">7:30 PM</MenuItem>
                                        <MenuItem value="15:00">8:00 PM</MenuItem>
                                        <MenuItem value="15:30">8:30 PM</MenuItem>
                                        <MenuItem value="16:00">9:00 PM</MenuItem>
                                        <MenuItem value="17:00">10:00 PM</MenuItem>
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
                </Box>
            </Box>
        </Container>
    );
}

export default ReservationsPage;