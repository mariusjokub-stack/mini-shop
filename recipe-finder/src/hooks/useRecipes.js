import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipeService";

function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  return {
    recipes,
    loading,
    error,
  };
}

export default useRecipes;