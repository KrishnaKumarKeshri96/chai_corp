import OrderLine from "./OrderLine";

const OrderSummary = () => {
  return (
    <>
      <hr />
      <div className="order-summary">
        <OrderLine name={"Order"} price={"28.00"} />
        <OrderLine name={"Delivery"} price={"7.20"} />
        <OrderLine name={"Summary"} price={"35.20"} />
      </div>
    </>
  );
};

export default OrderSummary;
