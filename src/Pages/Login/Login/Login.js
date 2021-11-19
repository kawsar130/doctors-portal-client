import React, { useState } from "react";
import {
    Container,
    Typography,
    Button,
    CircularProgress,
    Alert
} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import login from "../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } =
        useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />

                        <Button
                            sx={{ width: "75%", m: 1 }}
                            type="submit"
                            variant="contained"
                        >
                            Login
                        </Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register"
                        >
                            <Button variant="text">
                                New User? Please Register
                            </Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && (
                            <Alert severity="success">Login Successful!</Alert>
                        )}
                        {authError && (
                            <Alert severity="error">{authError}</Alert>
                        )}
                    </form>
                    <p>----------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">
                        Google Sign-In
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: "100%" }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
