
import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguienteImagen } from "./cargarImagen";
import carousel from "./carousel";

const galeria = document.getElementById('galeria')

galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');
    if (boton?.dataset?.accion === 'cerrar-galeria') {
        cerrarGaleria();
    }

    if (e.target.dataset.id) {
        slideClick(e)
    }

    if (boton?.dataset?.accion === 'siguiente-imagen') {
        cargarAnteriorSiguienteImagen('siguiente')
    }

    if (boton?.dataset?.accion === 'anterior-imagen') {
        cargarAnteriorSiguienteImagen('anterior')
    }

    if (boton?.dataset?.accion === 'siguiente-slide') {
        carousel('adelante')
    }

    if (boton?.dataset?.accion === 'anterior-slide') {
        carousel('atras')
    }
})