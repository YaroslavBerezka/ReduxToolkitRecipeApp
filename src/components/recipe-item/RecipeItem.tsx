import { useActions } from '../../hooks/useActions'
import useFavorites from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'
import styles from './RecipeItem.module.scss'

interface IRecipeItem {
    recipe: IRecipe
}

const RecipeItem = ({ recipe }: IRecipeItem) => {
    const { favorites } = useFavorites()
    const { toggleFavorites } = useActions()
    const isExist = favorites.some((r) => r.id === recipe.id)
    
    return (
        <div className={styles.item}>
            <img src={recipe.image} alt={recipe.name} width={200} />
            <h3>{recipe.name}</h3>
            <button onClick={() => toggleFavorites(recipe)}>
                {isExist ? 'Remove from' : 'Add to'} favorites
            </button>
        </div>
    )
}

export default RecipeItem
