import { Carousel } from "antd";
import "./banner.css";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const ProductGallery = ({ pic1, pic2, pic3, pic4 }) => (
  <>
    <Carousel arrows infinite={false}>
      <div className="slide">
        <img src={pic1} alt="" className="slide-img" />
      </div>
      <div className="slide">
        <img src={pic2} alt="" className="slide-img" />
      </div>
      <div className="slide">
        <img src={pic3} alt="" className="slide-img" />
      </div>
      <div className="slide">
        <img src={pic4} alt="" className="slide-img" />
      </div>
    </Carousel>
  </>
);
export default ProductGallery;
