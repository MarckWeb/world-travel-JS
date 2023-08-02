const galeria = document.getElementById("galeria");

const carousel = (direccion) => {
    const opciones = {
        root: document.querySelector(".galeria__carousel"),
        rootMargin: "0px",
        threshold: 0.9,
    };
    const observer = new IntersectionObserver((entradas) => {
        const slidesVisible = entradas.filter((entrada) => {
            if (entrada.isIntersecting === true) {
                return entrada;
            }
        });

        if (direccion === "atras") {
            const primerSlideVisible = slidesVisible[0];
            const indexPrimerSlidesVisible = entradas.indexOf(primerSlideVisible);
            if (indexPrimerSlidesVisible >= 1) {
                entradas[indexPrimerSlidesVisible - 1].target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                });
            }
        } else if (direccion === "adelante") {
            const ultimaSlidesVisible = slidesVisible[slidesVisible.length - 1];

            const indexUltimoSlidesVisible = entradas.indexOf(ultimaSlidesVisible);
            if (entradas.length - 1 > indexUltimoSlidesVisible) {
                entradas[indexUltimoSlidesVisible + 1].target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                });
            }
        }
        const slides = galeria.querySelectorAll(".galeria__carousel-slide");
        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, opciones);

    const slides = galeria.querySelectorAll(".galeria__carousel-slide");
    slides.forEach((slide) => {
        observer.observe(slide);
    });
};
export default carousel;
