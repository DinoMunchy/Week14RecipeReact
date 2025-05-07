import { useState } from 'react';
import { Recipe } from '../data/recipes';

interface AddRecipeFormProps {
  onAddRecipe: (recipe: Omit<Recipe, 'id'>) => void;
}

function AddRecipeForm({ onAddRecipe }: AddRecipeFormProps) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddRecipe({
      title,
      ingredients: ingredients.split(',').map(i => i.trim()),
      instructions,
      prepTime,
      difficulty
    });
    // Reset form
    setTitle('');
    setIngredients('');
    setInstructions('');
    setPrepTime('');
    setDifficulty('easy');
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <h2>Add New Recipe</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients (comma-separated):</label>
        <input
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="prepTime">Prep Time:</label>
        <input
          type="text"
          id="prepTime"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="difficulty">Difficulty:</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
          required
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm; 