
import React from "react";

function Add({ onChangeName, onChangePrice, onAddProducts }) {
  return (
    <div className="add">
      <label>Product name</label>
      <input onChange={onChangeName} type="text" />
      <label>Product price</label>
      <input onChange={onChangePrice} type="number" />
      <button onClick={onAddProducts} type="button">
        Add
      </button>
    </div>
  );
}

export default Add;