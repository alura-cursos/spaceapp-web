import React from "react";
import { PostForms } from "../PostForms";
import styles from '../../styles/componentes/CartaoPost.module.css'

export function CartaoPost({ id, imagem, titulo, fonte, descricao }) {

  return (
    <div className={styles.cartaoPostContainer} onClick={() => PostForms({
      id,
      titulo,
      fonte,
      descricao,
      imagem
    })}>
      {imagem !== "" && <img src={imagem} className={styles.cartaoPostImagem} />}
      {imagem === "" && <div className={styles.cartaoPostImagem} />}
      <div className={styles.cartaoPostTextoContainer}>
        <h1 className={styles.cartaoPostTitulo}>{titulo}</h1>
        <h2 className={styles.cartaoPostFonte}>{fonte}</h2>
      </div>
    </div>
  );
}