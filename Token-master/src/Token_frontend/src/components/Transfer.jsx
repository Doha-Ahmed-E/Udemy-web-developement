import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { Token_backend } from "../../../declarations/Token_backend";

function Transfer() {

  const [recipientId,setId] = useState("");
  const [amount,setAmount] = useState("");
  const [diasabled,setDisabled] = useState(false);
  const [feedBack,setfeedBack] = useState("");
  const [hidden,setHidden] = useState(true);


  async function handleClick() {
    setHidden(true);
    setDisabled(true);
    const recepient = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);

    const result = await Token_backend.transfer(recepient,amountToTransfer);
    setfeedBack(result);
    setHidden(false);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e)=>{setId(e.target.value);}}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e)=>{setAmount(e.target.value);}}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={diasabled} >
            Transfer
          </button>
        </p>
        <p hidden={hidden}>{feedBack}</p>
      </div>
    </div>
  );
}

export default Transfer;
