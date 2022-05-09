import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


// import { WrappedLoginScreen } from './LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllRecipes } from "./components/AllRecipes";
import { SearchRecipe } from './components/SearchRecipe';
import { FullRecipe, WrappedFullRecipe } from './components/FullRecipe';
import { MainPage } from './components/MainPage';
import { DrinksRecipes } from './components/DrinksRecipes';


export class App extends React.Component {
  render() {
    return(
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/allrecipes" element={<AllRecipes />} />
      <Route path="/fullrecipe/:recipe_id" element={<WrappedFullRecipe />} />
      <Route path="/searchrecipe" element={<SearchRecipe />} />
      <Route path="/RecipeReviews/:recipe_id" element={<WrappedFullRecipe />} />
      <Route path="/drinks_recipes" element={<DrinksRecipes />} />
      {/* <Route path="/login" element={<WrappedLoginScreen />} /> */}
    </Routes>
    )
  }
}

export default App;