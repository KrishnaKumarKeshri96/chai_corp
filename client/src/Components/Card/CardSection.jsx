import ring from "../../Images/ring.jpg";
const CardSection = () => {
  return (
    <>
      <hr />
      <div className="card-flex">
        <div className="left-side">
          <div>Metal Earings</div>
          <div>Special Design</div>
          <div>
            <div>$12</div>
            <div>In Stock</div>
          </div>
        </div>
        <div className="right-side">
          <img src={ring} alt="" />
        </div>
      </div>
    </>
  );
};

export default CardSection;
