document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let origen = document.getElementById("origen").value;
        let comentario = document.getElementById("comentario").value;

        let mensaje = `Hola Angel! 👋%0A
Nombre: ${encodeURIComponent(nombre)}%0A
Correo: ${encodeURIComponent(correo)}%0A
Lugar de origen: ${encodeURIComponent(origen)}%0A
Comentario: ${encodeURIComponent(comentario)}`;

        let numero = "+526623299469"; // Agrega tu número aquí

        let url = `https://wa.me/${numero}?text=${mensaje}`;

        window.open(url, "_blank");
    });