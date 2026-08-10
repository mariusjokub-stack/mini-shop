import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function loadRecipe() {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadRecipe();
  }, [id]);

  if (!recipe) {
    return <h2>Kraunama...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{recipe.name}</h1>

      <img
        src={recipe.image}
        alt={recipe.name}
        width="400"
      />

      <h2>Ingredientai</h2>

      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instrukcijos</h2>

      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <p>
        <strong>Gaminimo laikas:</strong> {recipe.cookTimeMinutes} min.
      </p>

      <p>
        <strong>Porcijos:</strong> {recipe.servings}
      </p>

      <p>
        <strong>Sudėtingumas:</strong> {recipe.difficulty}
      </p>

      <p>
        <strong>Įvertinimas:</strong> ⭐ {recipe.rating}
      </p>
    </div>
  );
}

export default RecipeDetails;