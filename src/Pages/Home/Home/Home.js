import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppintmentBanner";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import ExceptionalDentalCare from "../ExceptionalDentalCare/ExceptionalDentalCare";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExceptionalDentalCare></ExceptionalDentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;
