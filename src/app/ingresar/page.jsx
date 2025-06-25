"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Ingresar = () => {
  const router = useRouter();
  const enviarForm = async (e) => {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    const contenido = e.target.contenido.value;
    try {
      const respuesta = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          titulo,
          contenido,
        }),
      });

      const datos = await respuesta.json();
      router.push("/posts");
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <>
      <h1 className="text-2xl font-bold m-5 text-center">
        Ingresar Nuevo Post
      </h1>
      <div className="flex justify-center">
        <form className="p-5 bg-red-300 w-1/4" onSubmit={enviarForm}>
          <input
            type="text"
            id="titulo"
            className="w-full mb-3 bg-white text-black"
            placeholder="Titulo"
          />
          <textarea
            className="w-full bg-white text-black"
            rows={3}
            id="contenido"
            placeholder="Contenido"
          />
          <input
            type="submit"
            className="bg-pink-700 text-white rounded p-2 hover:bg-rose-400"
            value={"Insertar"}
          />
        </form>
      </div>
    </>
  );
};

export default Ingresar;
