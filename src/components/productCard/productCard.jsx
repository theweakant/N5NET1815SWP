

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./productCard.css";

export default function ProductCard({ img, text, price, salePrice, salePercent, rating }) {
  return (
    <div className={`product-hit ${pageType}`}>
      <div className="product-img">
        <Link to='/san-pham'>
          <img src={img} alt="" />
        </Link>
        <Link to='/san-pham' className="see-more-red" title="Chi tiết"></Link>
      </div>
      {/* <div className="icon-sale"></div> */}
      <div className="product-text">
        <p>
          <Link to='/san-pham'>{text}</Link>
        </p>
        {salePrice ? (
          <div className="price-info">
            <span className="sale-price">{salePrice}</span>
            <div>
              <span className="retail-price">{price}</span>
              <span className="sale-percent">(-{salePercent})</span>
            </div>
          </div>
        ) : (
          <span>{price}</span>
        )}
        {rating && (
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} />
            <span>{rating}</span>
          </div>
        )}
      </div>
    </div>
  );
}

