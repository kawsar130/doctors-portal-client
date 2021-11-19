import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: "rgba(45, 58, 74, 0.85)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175
};

const AppointmentBanner = () => {
    return (
        <div>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: "-110px" }}
                            src={doctor}
                            alt=""
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            textAlign: "left"
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{ my: 3 }}
                                variant="h6"
                                style={{ color: "#5CE7ED" }}
                            >
                                Appointment
                            </Typography>
                            <Typography
                                sx={{ my: 3 }}
                                variant="h4"
                                style={{ color: "white" }}
                            >
                                Make an Appointment Today
                            </Typography>
                            <Typography
                                sx={{ my: 3 }}
                                variant="h6"
                                style={{
                                    color: "white",
                                    fontSize: 16,
                                    fontWeight: 300
                                }}
                            >
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at this.
                            </Typography>
                            <Button
                                sx={{ my: 3 }}
                                variant="contained"
                                style={{ backgroundColor: "#5CE7ED" }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;
