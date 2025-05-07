export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  prepTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale", "black pepper"],
    instructions: "1. Cook pasta\n2. Mix eggs and cheese\n3. Combine with hot pasta",
    prepTime: "20 minutes",
    difficulty: "medium"
  },
  {
    id: 2,
    title: "Chicken Stir Fry",
    ingredients: ["chicken breast", "bell peppers", "broccoli", "soy sauce", "ginger"],
    instructions: "1. Cut chicken\n2. Stir fry vegetables\n3. Combine with sauce",
    prepTime: "30 minutes",
    difficulty: "easy"
  },
  {
    id: 3,
    title: "Greek Salad",
    ingredients: ["cucumber", "tomatoes", "red onion", "feta cheese", "olives"],
    instructions: "1. Chop vegetables\n2. Mix ingredients\n3. Add dressing",
    prepTime: "15 minutes",
    difficulty: "easy"
  }
]; 