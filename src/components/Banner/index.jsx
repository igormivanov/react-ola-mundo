import React from 'react'
import styles from "./Banner.module.css"
import circuloColorido from "src/assets/circulo_colorido.png"
import minhaFoto from "src/assets/minha_foto.jpeg"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo
        </h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou o Igor Ivanov, Desenvolvedor Full Stack e graduando no Instituto de Tecnologia e Educação de São Paulo. Aqui compartilho vários conhecimentos, espero que aprenda algo novo. 
        </p>
      </div>
      <div className={styles.imagens}>
        <img  className={styles.circuloColorido} src={circuloColorido} alt=""  />
        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Igor Ivanov" />
      </div>
    </div>
  )
}
