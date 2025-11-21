window.onload = () => {
    let index = 1; // inicia centrado en el segundo elemento

    function updateCoverflow() {
        const items = document.querySelectorAll(".coverflow .slide-item");

        items.forEach((item, i) => {
            item.classList.remove("center", "side");

            if (i === index) {
                item.classList.add("center");
            } else {
                item.classList.add("side");
            }
        });

        // Tamaño base del item
        const itemWidth = 320; 
        const gap = 40;         
        const total = itemWidth + gap;

        // Nuevo offset corregido
        const offset = (index * -total) + (total);
        document.getElementById("coverflow").style.transform = `translateX(${offset}px)`;
    }

    function moveSlide(dir) {
        const items = document.querySelectorAll(".coverflow .slide-item");
        index += dir;

        if (index < 0) index = 0;
        if (index >= items.length) index = items.length - 1;

        updateCoverflow();
    }

    // global para botones
    window.moveSlide = moveSlide;

    updateCoverflow();
};
