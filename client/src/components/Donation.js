import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";

// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe(
  "pk_test_51NctQVGRez86EpyPtH08resX1JNyUEK1O6Ltn8LNJDOpluSGPINddE9Z2PpXh1YGPcqUeA89Dv7VZBmdey3EBzOd009NhRXFpc"
);

const Donation = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const handleClick = async (event) => {
    event.preventDefault();
    getCheckout();
  };

  // add amout to the donation and button to submit
  return (
    <div>
      <h1>Donate</h1>
      <input type="number" placeholder="Amount" />
      <button onClick={handleClick}>Donate</button>
    </div>
  );
};

export default Donation;
