import RecipeCard from "../components/RecipeCard";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>Mėgstamų receptų nėra.</p>
      ) : (
        <div>
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;