import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";

// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe(
  "pk_test_51NctQVGRez86EpyPtH08resX1JNyUEK1O6Ltn8LNJDOpluSGPINddE9Z2PpXh1YGPcqUeA89Dv7VZBmdey3EBzOd009NhRXFpc"
);

const Donation = (props) => {
  // useLazyQuery from apollo is the same as useQuery but for queries that need to be run on an event
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const submitCheckout = async (event) => {
    event.preventDefault();
    // get the shelter id from the url
    // const shelterId = window.location.pathname.split("/").pop();
    const shelterId = props.shelterId;
    // get the donation amount from the input
    const amount = document.querySelector("input").value;
    // run the getCheckout query
    getCheckout({
      variables: { shelterId, amount: parseFloat(amount) },
    });
  };

  // add amout to the donation and button to submit
  return (
    <div>
      <h1>Donate {props.shelterId}</h1>
      <input type="number" placeholder="Amount" />
      <button onClick={submitCheckout}>Donate</button>
    </div>
  );
};

export default Donation;
