import { useAppDispatch, useAppSelector } from '../../store/configure-store'
import { IngredientsState } from '../../store/ingredients-slice'
import {
  addRecipeServings,
  RecipeServingState,
  updateRecipeServings,
} from '../../store/recipe-servings-slice'

export function useGetServings(recipeId: string, servings?: number) {
  const recipes = useAppSelector(state => state.recipeServings)
  const recipe = recipes.find(item => item.recipeId === recipeId)
  const dispatch = useAppDispatch()
  let defaultServings = servings ? servings : 1
  const newRecipe = { recipeId, servings: defaultServings }
  if (!recipe) {
    dispatch(addRecipeServings(newRecipe))
    return newRecipe
  }
  return recipe
}

export function useUpdateServings(recipeId: string, servings: number) {
  // const recipe=useGetServings(recipeId,servings)
  const dispatch = useAppDispatch()
  dispatch(updateRecipeServings({ recipeId, servings }))
}
