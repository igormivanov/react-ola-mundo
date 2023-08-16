import React from 'react'
import styles from "./Inicio.module.css"
import posts from "src/json/posts.json"
import Post from 'src/components/PostCard'


export default function Inicio() {
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
