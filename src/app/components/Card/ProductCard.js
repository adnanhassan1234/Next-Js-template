import Link from "next/link";
import React from "react";


const ProductCard = (props) => {
  const { title, price, description, image, id } = props;
  
  return (
    <div className="col-lg-3 col-md-6">
      <div className="product_details">
        <div className="card my-3">
          <img src={image} className="card-img-top my-2" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.slice(0,88)}...</p>
            <p className="card-price">${price}</p>
            <Link href={`/movie/${id}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
