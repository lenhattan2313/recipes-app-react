import React, { useEffect, useState } from "react";
import Recipes from "./components/Recipes/Recipes";
const App = () => {
  //const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const res = await response.json();
      setRecipes(res.hits);
    };
    getData();
  }, [query]);

  const APP_ID = "3aa836a5";
  const APP_KEY = "e77c6df57c981e57670f32371f235f5c";

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getQuery}>
        <input
          type="text"
          placeholder="Search recipes"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipes
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
