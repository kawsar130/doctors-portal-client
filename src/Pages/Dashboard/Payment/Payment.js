import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
    "pk_test_51JwSXHAXiGndfKY7G8OlDKGBP2lw5kv95G2NTX5Hy2idT5j9wTGd6BWi2d6QYDV0gZv1Zc5Ljr2GlOsD7x8yEP6Y007jjxQcnJ"
);

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(
            `https://serene-harbor-15380.herokuapp.com/appointments/${appointmentId}`
        )
            .then((res) => res.json())
            .then((data) => setAppointment(data))
            .catch((err) => console.log(err));
    }, [appointmentId]);

    return (
        <div>
            <h2>
                Please Pay for: {appointment.patientName} For{" "}
                {appointment.serviceName}
            </h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && (
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment}></CheckoutForm>
                </Elements>
            )}
        </div>
    );
};

export default Payment;

/*
1. Install stripe and stripe-react
2. Set publishable key
3. Elements
4. Checkout form
------
5. Create payment method
6. Server create payment Intent API
7. Load client secret
8. ConfirmCard Payment
9. Prevent user from multiple payment/ handle user error

*/
