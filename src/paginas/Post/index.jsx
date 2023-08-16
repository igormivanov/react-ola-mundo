import "./Post.css"

import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom'
import PostModelo from 'src/components/PostModelo';
import posts from "src/json/posts.json";


export default function Post() {

  const parametros = useParams();
  
  const post = posts.find(post => {
    return post.id === Number(parametros.id)
  })
  
  if(!post){
    return <div>Página não encontrada</div>
  }
  
  return (
    <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
    </PostModelo>

  )
}
