import "./App.css";
import BtnArrow from "./Components/BtnArrow";
import Card from "./Components/Card/Card";
import CheckOut from "./Components/CheckOut";
import CarouselPayment from "./Components/PaymentCard/Carrasol";
import PaymentHeading from "./Components/PaymentHeading";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import PayNowButton from "./Components/PayNowButton";
import { useEffect, useState } from "react";

function App() {
  const [stripePaymentKey, setStripePaymentKey] = useState("");
  console.log(stripePaymentKey);
  useEffect(() => {
    fetch("https://chai-corp-backend.herokuapp.com/stripeapikey")
      .then((res) => res.json())
      .then((data) => setStripePaymentKey(data));
  }, []);

  return (
    <>
      <BtnArrow />
      <CheckOut />
      <Card />
      <PaymentHeading />
      <CarouselPayment />
      <OrderSummary />
      <PayNowButton />
    </>
  );
}

export default App;
