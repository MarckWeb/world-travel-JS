import dataCategorias from "./data/categorias";
const { categorias } = dataCategorias;
const contendedorCategorias = document.getElementById("categorias");

categorias.forEach((categoria) => {
  const containerCategoria = document.createElement("a");
  const plantilla = `<img class="categoria__img" src="${categoria.imagenPortada}" alt="imagen pokemon tipo de ${categoria.nombre}" />
    <div class="categoria__datos">
      <p class="categoria__nombre">${categoria.nombre}</p>
      <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
    </div>`;

  containerCategoria.innerHTML = plantilla;
  containerCategoria.classList.add("categoria");
  containerCategoria.href = "#";
  containerCategoria.dataset.categoria = categoria.id;
  contendedorCategorias.append(containerCategoria);
});
