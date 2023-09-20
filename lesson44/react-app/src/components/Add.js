import React from "react";

function Add({ onChangeName, onChangePrice, onAddProducts, name, price }) {
  return (
    <div className="add">
      <label>Product name</label>
      <input onChange={onChangeName} type="text" value={name} />
      <label>Product price</label>
      <input onChange={onChangePrice} type="number" value={price} />
      <button onClick={onAddProducts} type="button">
        Add
      </button>
    </div>
  );
}

export default Add;