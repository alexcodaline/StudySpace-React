import React from "react";
import styleProduct from "./Product.modules.scss";
import iphone from "./assets/iphone.jpg";
import watch from "./assets/watch.jpg";
import noPhoto from "./assets/no-foto.jpg";
function Product(props) {
  const remove = () => {
    props.onRemove(props.id);
  };
  let productImg;
  if (props.name === "Iphone") {
    productImg = iphone;
} else if (props.name === "Watch") {
      productImg = watch;
    } else {
      productImg = noPhoto;
    }
  return (
    <div className={styleProduct.product}>
      <div className={styleProduct.img}>
        <img src={productImg} />
      </div>

      <div className={styleProduct.body}>
        <h1 className={styleProduct.title}>{props.name}</h1>
        <div className={styleProduct.price}>{props.price}</div>
      </div>
      <button onClick={remove} type="button">
        Remove
      </button>
    </div>
  );
}

export default Product;
