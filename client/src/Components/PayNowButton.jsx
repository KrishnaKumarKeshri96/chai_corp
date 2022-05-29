const PayNowButton = ({ handleClick }) => {
  return (
    <div className="pay-now">
      <button onClick={handleClick}>Pay Now</button>
    </div>
  );
};

export default PayNowButton;
