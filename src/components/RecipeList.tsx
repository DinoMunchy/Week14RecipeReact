import { Recipe } from '../data/recipes';
import RecipeCard from './RecipeCard';

interface RecipeListProps {
  recipes: Recipe[];
}

function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          prepTime={recipe.prepTime}
          difficulty={recipe.difficulty}
        />
      ))}
    </div>
  );
}

export default RecipeList; 