import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Booking from "../Booking/Booking";
import { Alert, Typography } from "@mui/material";

const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "8.00 AM - 9.00 AM",
        price: 20,
        space: 7
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: "10.05 AM - 11.30 AM",
        price: 30,
        space: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "5.00 PM - 6.30 PM",
        price: 25,
        space: 5
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "7.00 AM - 8.30 AM",
        price: 35,
        space: 20
    },
    {
        id: 5,
        name: "Teeth Orthodontics",
        time: "8.00 AM - 9.00 AM",
        price: 40,
        space: 10
    },
    {
        id: 6,
        name: "Teeth Orthodontics",
        time: "8.00 AM - 9.00 AM",
        price: 45,
        space: 10
    }
];

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: "info.main", my: 3 }}>
                Available Appointment: {date.toDateString()}
            </Typography>
            {bookingSuccess && (
                <Alert severity="success">
                    Appointment Booked Successfully
                </Alert>
            )}
            <Grid container spacing={2}>
                {bookings.map((booking) => (
                    <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>
                ))}
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;
