import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(prevInCart => !prevInCart);
  };

  const liClass = inCart ? "in-cart" : "";

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";



  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
