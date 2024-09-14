import React, { useState } from "react";
import { Token_backend, canisterId, createActor } from "../../../declarations/Token_backend";
import { AuthClient } from "@dfinity/auth-client";

function Faucet() {

  const [diabled, setDisabled] = useState(false);
  const [buttonText, setBtnText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisabled(true);
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });


    const result = await Token_backend.payOut();
    setBtnText(result);

  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={diabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
