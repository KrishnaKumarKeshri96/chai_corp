import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CreditCard from "./CreditCard";

function CarouselPayment() {
  return (
    <div className="carousel-main">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        transitionTime={1000}
        width="600px"
      >
        <CreditCard />
        <CreditCard />
        <CreditCard />
        <CreditCard />
      </Carousel>
    </div>
  );
}

export default CarouselPayment;
