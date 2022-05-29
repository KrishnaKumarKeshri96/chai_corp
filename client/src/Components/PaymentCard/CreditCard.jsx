import Card from "react-credit-cards";

import { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
const CreditCard = () => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState(4378 + "********" + 3453);

  return (
    <div>
      <Card
        locale={{
          valid: "Valido até",
        }}
        placeholders={{
          name: "Seu nome aqui",
        }}
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
        callback={console.log}
      />
    </div>
  );
};

export default CreditCard;
