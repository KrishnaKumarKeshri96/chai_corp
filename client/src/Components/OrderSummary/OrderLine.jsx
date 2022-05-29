const OrderLine = ({ name, price }) => {
  return (
    <div className="order-line">
      <div>{name}</div>
      <div>{price}$</div>
    </div>
  );
};

export default OrderLine;
