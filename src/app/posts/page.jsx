import React from "react";
import Link from "next/link";

const cargarPosts = async () => {
  const respuesta = await fetch("http://localhost:3000/api/posts");
  const datos = await respuesta.json();
  return datos;
};

const Posts = async () => {
  const listaPosts = await cargarPosts();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {listaPosts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li className="bg-red-200 p-2 m-2">
              <h2 className="text-xl text-black">{post.titulo}</h2>
              <p className="text-sm text-black">{post.contenido}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
