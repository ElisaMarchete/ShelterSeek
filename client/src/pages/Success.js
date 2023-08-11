import React, { useEffect } from "react";
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
    <div className="Successpage">
      <h1 className="success-text">
        Thank you for being a hero to our furry friends. Your generosity fills
        their lives with joy and gratitude.
        <br />
        We are so grateful for your donation of ${amount}!
      </h1>
      <img src="/assets/successpage/Thank-You-Dog-and-Cat.jpg" alt="dog" />
    </div>
  );
};

export default Success;
