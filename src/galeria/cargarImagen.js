import data from "../data/fotos";
const galeria = document.getElementById("galeria");
const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria.querySelector(".galeria__imagen").src = ruta;
    galeria.querySelector(".galeria__imagen").dataset.idImagen = id;
    galeria.querySelector(".galeria__titulo").innerText = nombre;
    galeria.querySelector(".galeria__descripcion-imagen-activa").innerText =
        descripcion;
    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    let indexImagenActual;
    fotos.forEach((foto, i) => {
        if (foto.id === id) {
            indexImagenActual = i;
        }
    });
    const imagenesPintar = galeria.querySelectorAll(".galeria__carousel-slide");
    if (imagenesPintar.length > 0) {
        galeria
            .querySelector(".galeria__carousel-slide--active")
            .classList.remove("galeria__carousel-slide--active");
        imagenesPintar[indexImagenActual].classList.add(
            "galeria__carousel-slide--active"
        );
    }
};

const cargarAnteriorSiguienteImagen = (direccion) => {
    const categoriaActual = galeria.dataset.categoria; //
    const fotos = data.fotos[categoriaActual];
    const idImagenActual = parseInt(
        galeria.querySelector(".galeria__imagen").dataset.idImagen
    );
    let indexImagenActual;

    fotos.forEach((foto, index) => {
        if (foto.id === idImagenActual) {
            indexImagenActual = index;
        }
    });

    if (direccion === "siguiente") {
        if (fotos[indexImagenActual + 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    } else if (direccion === "anterior") {
        if (fotos[indexImagenActual - 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
};
export { cargarImagen, cargarAnteriorSiguienteImagen };
