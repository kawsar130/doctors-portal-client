import React from "react";
import Grid from "@mui/material/Grid";
import treatment from "../../../images/treatment.png";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const ExceptionalDentalCare = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={{ marginTop: "100px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} sx={{ mr: 3 }}>
                    <img
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                        src={treatment}
                        alt=""
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ textAlign: "left" }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Grid sx={{ mt: -5 }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 500, py: 5 }}
                        >
                            Exceptional Dental Care, on your Terms
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 400, fontSize: "1.2em", pb: 5 }}
                            style={{ color: "#329da8" }}
                        >
                            In our cheerful dental practice, we offer
                            high-quality dental care. Spearwood Dentist Dr
                            Alexis Ong and her team provide gentle dentistry to
                            all ages. Exceptional Dental Care is a full-service
                            dental office. Therefore, you won't have to run all
                            over town to get the dental treatments you want and
                            need. Plus, our care is affordable.
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExceptionalDentalCare;
