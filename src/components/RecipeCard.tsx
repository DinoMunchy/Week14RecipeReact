interface RecipeCardProps {
  title: string;
  ingredients: string[];
  instructions: string;
  prepTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

function RecipeCard({ title, ingredients, instructions, prepTime, difficulty }: RecipeCardProps) {
  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <div className="recipe-info">
        <p><strong>Prep Time:</strong> {prepTime}</p>
        <p><strong>Difficulty:</strong> {difficulty}</p>
      </div>
      <div className="recipe-ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-instructions">
        <h3>Instructions:</h3>
        <p>{instructions}</p>
      </div>
    </div>
  );
}

export default RecipeCard; 