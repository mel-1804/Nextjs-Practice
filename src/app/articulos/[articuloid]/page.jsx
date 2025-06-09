import React from "react";

const petRest = async (id) => {
  try {
    const peticion = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await peticion.json();
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un retraso de 2 segundos
    return data;
  } catch (e) {
    console.log(e);
  }
};

const Articulo = async ({ params }) => {
  const articulo = await petRest(params.articuloid);
  return (
    <>
      <div className="mx-4 grid grid-cols-3 gap-7">
        <div
          className="my-4 bg-amber-200 rounded-lg hover:bg-amber-100"
          key={articulo.id}
        >
          <h2 className="font-bold text-center">{articulo.title}</h2>
          <div className="flex p-2">
            <p className="text-xs">{articulo.description}</p>
            <img
              className="opacity-90 rounded-3xl"
              width={80}
              height={50}
              src={articulo.image}
              alt={articulo.tittle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Articulo;
