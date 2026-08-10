import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function RecipeCard({ recipe }) {
  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useFavorites();

  const isFavorite = favorites.some(
    (favorite) => favorite.id === recipe.id
  );

  function handleFavorite() {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  }

  return (
    <div>
      {/* NUOTRAUKOS KONTEINERIS */}
      <div
        style={{
          position: "relative",
          width: "250px",
          margin: "0 auto",
        }}
      >
        <img
          src={recipe.image}
          alt={recipe.name}
          width="250"
          style={{
            display: "block",
          }}
        />



        {/* ŽVAIGŽDUTĖ */}
        <button
          onClick={handleFavorite}
          style={{
            position: "absolute",
            top: "9px",
            left: "9px",
            fontSize: "28px",
            background: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            padding: "0",
            lineHeight: "1",
          }}
        >
          {isFavorite ? "⭐" : "☆"}
          </button>

          <div
  style={{
    position: "absolute",
    top: "9px",
    right: "9px",
    background: "white",
    padding: "4px 7px",
    borderRadius: "12px",
    fontWeight: "bold",
  }}
>
  ⭐ {recipe.rating}
</div>
        
      </div>

      <h2>{recipe.name}</h2>

      <p>Virtuvė: {recipe.cuisine}</p>

      <p>
        Gaminimo laikas: {recipe.cookTimeMinutes} min.
      </p>

      <Link to={`/recipes/${recipe.id}`}>
        Peržiūrėti receptą
      </Link>
    </div>
  );
}

export default RecipeCard;