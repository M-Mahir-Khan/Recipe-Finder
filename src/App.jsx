import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import "./App.css"

const App = () => {
  const [query, setQuery] = useState(""); 
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    if (!query) return; 
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=2266678c544640009b5a1b397de0daee`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <Header />
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
