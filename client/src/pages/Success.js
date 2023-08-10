import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_DONATION } from "../utils/mutations";
import Jumbotron from "../components/Jumbotron";

function Success() {
  const [addDonation] = useMutation(ADD_DONATION);

  useEffect(() => {
    async function saveOrder() {
      const shelterId = window.location.pathname.split("/").pop();
      const amount = document.querySelector("input").value;
      await addDonation({
        variables: { donation: { shelter: shelterId, amount: Number(amount) } },
      });
    }
    saveOrder();
  }, [addDonation]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your Donation!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
