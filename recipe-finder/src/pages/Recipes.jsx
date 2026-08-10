import { useState } from "react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "../components/RecipeCard";
import { useFavorites } from "../context/FavoritesContext";

function Recipes() {
  const { favorites } = useFavorites();

  const { recipes, loading, error } = useRecipes();

  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const filteredRecipes = recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((recipe) =>
      cuisine === "" ? true : recipe.cuisine === cuisine
    )
    .filter((recipe) =>
      onlyFavorites
        ? favorites.some((favorite) => favorite.id === recipe.id)
        : true
    )
    .sort((a, b) => {
      if (sortBy === "time") {
        return a.cookTimeMinutes - b.cookTimeMinutes;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Recipes</h1>

      {/* PAIEŠKA */}
      <input
        type="text"
        placeholder="Ieškoti recepto..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {/* VIRTUVĖS FILTRAS */}
      <select
        value={cuisine}
        onChange={(event) => setCuisine(event.target.value)}
      >
        <option value="">Visos virtuvės</option>

        {[...new Set(recipes.map((recipe) => recipe.cuisine))].map(
          (cuisineName) => (
            <option key={cuisineName} value={cuisineName}>
              {cuisineName}
            </option>
          )
        )}
      </select>

      {/* RŪŠIAVIMAS */}
      <select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value="">Rūšiuoti pagal...</option>
        <option value="time">Gaminimo laiką</option>
        <option value="rating">Įvertinimą</option>
      </select>

      {/* TIK MĖGSTAMI */}
      <button onClick={() => setOnlyFavorites(!onlyFavorites)}>
        {onlyFavorites ? "Rodyti visus" : "Tik mėgstami"}
      </button>

      {/* RECEPTAI */}
      <div>
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;