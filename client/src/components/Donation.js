import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe(
  "pk_test_51NctQVGRez86EpyPtH08resX1JNyUEK1O6Ltn8LNJDOpluSGPINddE9Z2PpXh1YGPcqUeA89Dv7VZBmdey3EBzOd009NhRXFpc"
);

const Donation = (props) => {
  console.log(props);
  // useLazyQuery from apollo is the same as useQuery but for queries that need to be run on an event
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const [amount, setAmount] = useState("");

  function handleChange(event) {
    setAmount(event.target.value);
  }

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const submitCheckout = async (event) => {
    event.preventDefault();
    // get the shelter id from the props
    const shelterId = props.shelterId;

    if (!amount) {
      alert("Please enter an amount");
    } else if (amount < 1) {
      alert("Please enter an amount greater than $1.00");
    } else if (isNaN(amount)) {
      alert("Please enter a valid amount");
    } else {
      getCheckout({
        variables: { shelterId, amount: parseFloat(amount) },
      });
    }
  };

  return (
    <div className="donation" id="donate">
      <TextField
        id="outlined-basic"
        label="Amount"
        variant="outlined"
        type="text"
        placeholder="CAD"
        size="small"
        value={amount}
        onChange={handleChange}
        style={{
          height: "39px",
          width: "100px",
        }}
      />
      <Button
        onClick={submitCheckout}
        variant="contained"
        endIcon={<SendIcon />}
        size="large"
        style={{
          height: "39px",
          width: "110px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Donate
      </Button>
    </div>
  );
};

export default Donation;
