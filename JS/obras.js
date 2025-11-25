/*Obras */
const carrusel = document.getElementById('carouselExampleCaptions');
const sinopsisDiv = document.getElementById('sinopsis-texto');

function actualizarSinopsis() {
    // A. Encontrar el título del libro actualmente ACTIVO
    // Buscar el elemento con la clase 'active' dentro del carrusel, y luego su h5
    const tituloElemento = document.querySelector('.carousel-item.active h5');
    
    // B. Extraer el texto del título (ej: "Orgullo y prejuicio")
    const titulo = tituloElemento ? tituloElemento.textContent.trim() : ""; // .trim() quita espacios extra
    
    // C. Lógica IF/ELSE/THEN
    if (titulo === "Orgullo y prejuicio") {
        sinopsisDiv.textContent = "Orgullo y Prejuicio narra la historia de Elizabeth Bennet, una joven inteligente y perspicaz que forma parte de una familia de clase media con cinco hermanas. La vida de Elizabeth se complica cuando conoce al adinerado y orgulloso Sr. Darcy. Inicialmente, ambos se sienten repelidos por los defectos del otro: Elizabeth por su orgullo y Darcy por sus prejuicios hacia su familia y posición social. A medida que se enfrentan a malentendidos, diferencias sociales y rivalidades familiares, aprenden a superar sus errores y prejuicios. La novela explora temas como el matrimonio, la posición social, el amor verdadero y la importancia de la introspección.";
    } else if (titulo === "Emma") {
        sinopsisDiv.textContent = "Emma narra la vida de Emma Woodhouse, una joven adinerada, hermosa y confiada en su propio juicio, que disfruta organizando la vida amorosa de quienes la rodean. Aunque se considera una experta casamentera, Emma se enfrenta a malentendidos, errores de percepción y lecciones sobre orgullo, prejuicio y autoconocimiento. Su relación con el reservado y sensato Sr. Knightley se desarrolla gradualmente, llevándola a reconocer sus propios sentimientos y limitaciones. La novela explora el crecimiento personal, la amistad, el amor y las sutilezas de la sociedad inglesa del siglo XIX.";
    } else if (titulo === "Sentido y sentimiento") {
        sinopsisDiv.textContent = "Sentido y Sensibilidad cuenta la historia de las hermanas Dashwood, Elinor y Marianne, que enfrentan la pérdida de su hogar y la precariedad económica tras la muerte de su padre. Mientras Elinor encarna la prudencia y la razón, Marianne se deja guiar por la pasión y la emoción. Sus vidas amorosas se ven puestas a prueba: Marianne se enamora de un joven atractivo pero engañoso, mientras que Elinor lidia con un afecto secreto y complicado hacia Edward Ferrars. La novela explora cómo la sensatez y la sensibilidad influyen en el amor, la familia y las decisiones en la Inglaterra rural del siglo XIX.";
    } else {
        sinopsisDiv.textContent = "Selecciona una obra para ver la sinopsis.";
    }
}

carrusel.addEventListener('slid.bs.carousel', actualizarSinopsis);

actualizarSinopsis();