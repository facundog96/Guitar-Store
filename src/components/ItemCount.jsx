import React, { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count <= 4) setCount(count + 1);
  };

  const handleClickdecrease = () => {
    if (count >= 1) setCount(count - 1);
  };

  return (
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <p>Tienes {count} objetos en el carrito</p>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleClick}
      >
        Aumentar
      </button>
      <button type="button" className="btn btn-outline-primary">
        Agregar al carrito
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleClickdecrease}
      >
        Disminuir
      </button>
    </div>
  );
}

export default ItemCount;
