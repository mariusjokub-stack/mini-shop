import { memo } from "react";

const ProductCard = memo(function ProductCard({ product }) {
  console.log("ProductCard render:", product.name);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Kaina: {product.price} €</p>
    </div>
  );
});

export default ProductCard;