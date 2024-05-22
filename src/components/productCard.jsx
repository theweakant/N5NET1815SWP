import "./productCard.css";

export default function ProductCard({ img, text, price }) {
  return (
    <div className="product-hit">
      <div className="product-img">
        <a href="">
          <img src={img} alt="" />
        </a>
        <a href="" className="see-more-red" title="Chi tiết"></a>
      </div>
      <div className="icon-sale"></div>

      <div className="product-text">
        <p>
          <a href="">{text}</a>
        </p>
        <span>{price}</span>
      </div>
    </div>
  );
}
