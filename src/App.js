import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import RecipeList from "./Recipe/RecipeList";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
// import Home from "./Homepage";
import Signup from "./components/signup";
import About from "./components/About";
import ViewRecipes from "./Recipe/MyRecipe";

import CreateRecipe from "./Recipe/CreateRecipe";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <Navbar setUser={setUser} user={user} />
      <Routes>
      <Route path="/" element={<About user={user} />} />
      <Route path ="/view" element={<ViewRecipes/>} />
      <Route path="/recipelist" element={<RecipeList />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/post-recipe" element={<CreateRecipe user={user}/>} />
      </Routes>
      </div>
    
  );
}