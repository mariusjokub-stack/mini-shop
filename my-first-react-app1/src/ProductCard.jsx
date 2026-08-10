function ProductCard(props) {
  return (
    <div>
      <h2>{props.pavadinimas}</h2>
      <p>Kaina: {props.kaina} €</p>
    </div>
  );
}

export default ProductCard;

