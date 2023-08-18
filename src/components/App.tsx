import { ChangeEvent, useState } from 'react'
import { useGetRecipesQuery } from '../store/api/api'
import CreateRecipe from './create-recipe/CreateRecipe'
import Header from './header/Header'
import RecipeItem from './recipe-item/RecipeItem'

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [queryTerm, setQueryTerm] = useState('')
    const { isLoading, data } = useGetRecipesQuery(queryTerm)

    const handleSearch = () => {
        setQueryTerm(searchTerm)
    }
    return (
        <section>
            <Header />
            <CreateRecipe />
            <div style={{
                padding: 10
            }}>
                <div>
                <p>If you  wanna find: </p>
                <input type="search" value={searchTerm} 
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} 
                       placeholder='Enter search terms'/>
                <button onClick={handleSearch}>Search</button>
                </div>
                
            </div>
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : data ? (
                    data.map((recipe) => (
                        <RecipeItem key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <div>Not found</div>
                )}
            </div>
        </section>
    )
}

export default App
