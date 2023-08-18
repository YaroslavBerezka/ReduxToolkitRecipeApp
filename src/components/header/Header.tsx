import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import useFavorites from '../../hooks/useFavorites'
import styles from './Header.module.scss'

const Header = () => {
    const { favorites } = useFavorites()
    
    return (
        <header className={styles.header}>
            <BsFillBookmarkHeartFill fontSize={20} />
            <span>{favorites.length}</span>
        </header>
    )
}

export default Header
