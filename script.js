document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('nextBtn');

    btn.addEventListener('click', () => {
        // Efecto de parpadeo al hacer clic
        document.body.style.opacity = '0.5';
        
        setTimeout(() => {
            alert("El próximo capítulo de Graco y René se está escribiendo en las estrellas... ¡Vuelve pronto! ✨");
            document.body.style.opacity = '1';
        }, 300);
    });

    console.log("Novela de Graco & René cargada correctamente. Yia.");
});
