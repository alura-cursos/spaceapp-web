import { useEffect, useState } from 'react'
import { CartaoPost } from '../componentes/CartaoPost'
import { NovoPostBotao } from '../componentes/NovoPostBotao'
import { pegarPostsTempoReal } from '../servicos/firestore'
import styles from '../styles/Home.module.css'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    pegarPostsTempoReal(setPosts)
  }, [])

  return (
    <div>
      <img src='/logo.png' className={styles.logo} alt="Logo SpaceApp" />

      <div className={styles.postsArea}>
        {
          posts?.map(post => (
            <CartaoPost 
                key={post.id}
                id={post.id}
                titulo={post.titulo}
                fonte={post.fonte}
                descricao={post.descricao}
                imagem={post.imagemUrl}
              />
          ))
        }
      </div>

      <NovoPostBotao />
    </div>
  )
}