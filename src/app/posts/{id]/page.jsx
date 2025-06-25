import React from "react";

const cargarUnPost = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/api/posts/${id}`);
  const datos = await respuesta.json();
  return datos;
};

const PostEdit = async ({ params }) => {
  const id = await params.id;
  const post = await cargarUnPost(id);
  return (
    <div>
      <div className="bg-red-200 p-2 m-2">
        <h1 className="text-xl text-black">{post.titulo}</h1>
        <p className="text-sm text-black">{post.contenido}</p>
      </div>
      <Ingresar edit={true} />
    </div>
  );
};

export default PostEdit;
