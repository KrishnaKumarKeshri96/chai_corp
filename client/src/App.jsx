import "./App.css";
import BtnArrow from "./Components/BtnArrow";
import Card from "./Components/Card/Card";
import CheckOut from "./Components/CheckOut";
import CarouselPayment from "./Components/PaymentCard/Carrasol";
import PaymentHeading from "./Components/PaymentHeading";
import OrderSummary from "./Components/OrderSummary/OrderSummary";

function App() {
  return (
    <>
      <BtnArrow />
      <CheckOut />
      <Card />
      <PaymentHeading />
      <CarouselPayment />
      <OrderSummary />
    </>
  );
}

export default App;
