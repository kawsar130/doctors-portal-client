import React, { useState } from "react";
import { TextField, Input, Button, Typography } from "@mui/material";

const AddDoctor = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("image", image);

        fetch("https://serene-harbor-15380.herokuapp.com/doctors", {
            method: "POST",
            body: formData
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setSuccess("Doctor Added Successfully");
                    console.log("Doctor Added Successfully");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <h3>Add a Doctor</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: "50%" }}
                    required
                    label="Name"
                    variant="standard"
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <TextField
                    sx={{ width: "50%" }}
                    type="email"
                    required
                    label="Email"
                    variant="standard"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <Input
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    sx={{ mt: 2 }}
                />
                <br />
                <Button variant="contained" type="submit" sx={{ mt: 1 }}>
                    Add Doctor
                </Button>
            </form>
            {success.length > 0 && (
                <Typography color="success">{success}</Typography>
            )}
        </div>
    );
};

export default AddDoctor;
