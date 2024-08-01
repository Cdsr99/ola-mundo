import Post from "Components/PostCard"
import Banner from "../../Components/Banner"
import styles from './Inicio.module.css'

import posts from 'json/posts.json'
import Rodape from "Components/Rodape"

const Home = () => {
    return (

        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    )
}

export default Home