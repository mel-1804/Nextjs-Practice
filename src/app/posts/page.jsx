import React from "react";

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
          <li className="bg-red-200 p-2 m-2" key={post.id}>
            <h2 className="text-xl text-black">{post.titulo}</h2>
            <p className="text-sm text-black">{post.contenido}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
