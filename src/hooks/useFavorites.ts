import { useTypedSelector } from './useTypedSelector'

const useFavorites = () => {
    const favorites = useTypedSelector((state) => state.favorites)

    return { favorites }
}

export default useFavorites
