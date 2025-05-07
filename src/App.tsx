import { useState } from 'react'
import { recipes as initialRecipes, Recipe } from './data/recipes'
import Header from './components/Header'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState(initialRecipes)

  const handleAddRecipe = (newRecipe: Omit<Recipe, 'id'>) => {
    const recipe: Recipe = {
      ...newRecipe,
      id: recipes.length + 1
    }
    setRecipes([...recipes, recipe])
  }

  return (
    <div className="app-container">
      <Header title="Recipe Manager" />
      <div className="main-content">
        <AddRecipeForm onAddRecipe={handleAddRecipe} />
        <RecipeList recipes={recipes} />
      </div>
    </div>
  )
}

export default App 