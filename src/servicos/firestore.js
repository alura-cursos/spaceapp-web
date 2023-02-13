import { db } from "../config/firebase"
import { collection, addDoc, doc, updateDoc, deleteDoc, query, onSnapshot, getDocs } from "firebase/firestore"
import { enviarNotificacao } from "./notificacao"

export async function salvarPost(data){
  try {
    const result = await addDoc(collection(db, 'posts'), data)
    await enviarNotificacao(data.titulo, data.descricao, data.imagemUrl)
    return result.id
  } catch(error){
    console.log('Erro add post:', error)
    return 'erro'
  }
}

export async function pegarTokens(){
  try {
    const tokensRef = query(collection(db, "tokens"))
    const querySnapshot = await getDocs(tokensRef)
    const tokens = []
    querySnapshot.forEach((doc) => {
      tokens.push(doc.data().token)
    })
    return tokens
  }
  catch(error){
    console.log(error)
  }
}

export async function pegarPostsTempoReal(setposts){
  const ref = query(collection(db, "posts"))
  onSnapshot(ref, (querySnapshot) => {
    const posts = []
    querySnapshot.forEach(( doc ) => {
      posts.push({id: doc.id, ...doc.data()})
    })
    setposts(posts)
  })
}

export async function atualizarPost(postID, data){
  try {
    const postRef = doc(db, "posts", postID);
    await updateDoc(postRef, data)
    return 'ok'
  }
  catch(error){
    console.log(error)
    return 'error'
  }
}

export async function deletarPost(postID){
  try {
    const postRef = doc(db, "posts", postID);
    await deleteDoc(postRef)
    return 'ok'
  }
  catch(error){
    console.log(error)
    return 'error'
  }
}