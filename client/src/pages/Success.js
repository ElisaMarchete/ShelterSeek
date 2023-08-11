import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_DONATION } from "../utils/mutations";

const Success = () => {
  const [addDonation] = useMutation(ADD_DONATION);
  // get query from url
  let [searchParams] = useSearchParams();

  // console.log(searchParams.get("shelterId"));
  // console.log(searchParams.get("amount"));

  // shelterId and amount from the callback url stripe sends back
  const shelterId = searchParams.get("shelterId");
  const amount = searchParams.get("amount");

  // add the donation to the database
  useEffect(() => {
    addDonation({
      variables: { shelterId, amount: parseFloat(amount) },
    });
  }, []);

  return (
    <div className="Success">
      <Hero />
      <h1>Thank you</h1>
      <div>We received {amount}</div>
    </div>
  );
};

export default Success;
