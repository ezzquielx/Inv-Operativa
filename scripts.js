/* =====================================================================
   CONTENIDO DE LA PÁGINA
   Editá solo este objeto: títulos, textos e imágenes.
   - Para agregar una actividad: copiá un bloque { ... } dentro de "actividades".
   - Para borrar una: eliminá su bloque.
   - Imágenes: poné los archivos en una carpeta "imagenes/" junto a este
     archivo y escribí la ruta, ej: "imagenes/captura1.png".
     (También sirven links https://...). Si la imagen no existe, se
     muestra un recuadro "Imagen aquí".
   - Para dejar una actividad sin imágenes: imagenes: []
   - En "texto" podés usar saltos de línea con \n.
   ===================================================================== */
const CONTENIDO = {
    materia: {
        etiqueta: "Materia",
        titulo: "Nombre de la materia",
        descripcion: "Breve descripción de la materia y de lo que se trabajó durante el cursado. Reemplazá este texto por el tuyo.",
        datos: [
            { clave: "Profesor", valor: "Nombre del profesor" },
            { clave: "Ciclo", valor: "2026" },
            { clave: "Integrantes", valor: "Nombre 1, Nombre 2" }
        ]
    },

    actividades: [
        {
            titulo: "Título de la actividad 1",
            fecha: "Fecha o semana",
            texto: "Descripción de la actividad: qué se pidió, cómo se resolvió y qué se aprendió.\nPodés escribir varios párrafos separándolos con un salto de línea.",
            puntos: [
                "Punto o consigna importante",
                "Otro punto o resultado"
            ],
            imagenes: [
                { src: "imagenes/actividad1-a.png", descripcion: "Descripción de la imagen 1" },
                { src: "imagenes/actividad1-b.png", descripcion: "Descripción de la imagen 2" }
            ]
        },
        {
            titulo: "Título de la actividad 2",
            fecha: "Fecha o semana",
            texto: "Descripción de la segunda actividad.",
            puntos: [],
            imagenes: [
                { src: "imagenes/actividad2-a.png", descripcion: "Descripción de la imagen" }
            ]
        },
        {
            titulo: "Título de la actividad 3",
            fecha: "Fecha o semana",
            texto: "Descripción de la tercera actividad.",
            puntos: [],
            imagenes: []
        }
    ],

    pie: "Nombre de la materia · Institución · 2026"
};

/* =====================================================================
   A partir de acá no hace falta tocar nada.
   ===================================================================== */
(function () {
    const $ = (id) => document.getElementById(id);
    const crear = (tag, clase, texto) => {
        const el = document.createElement(tag);
        if (clase) el.className = clase;
        if (texto !== undefined) el.textContent = texto;
        return el;
    };

    // Encabezado
    const m = CONTENIDO.materia;
    $("materia-etiqueta").textContent = m.etiqueta;
    $("materia-titulo").textContent = m.titulo;
    $("materia-descripcion").textContent = m.descripcion;
    document.title = m.titulo;

    m.datos.forEach((d) => {
        const li = crear("li");
        li.append(crear("strong", "", d.clave + ": "), document.createTextNode(d.valor));
        $("materia-datos").appendChild(li);
    });

    // Actividades + índice
    CONTENIDO.actividades.forEach((a, i) => {
        const id = "actividad-" + (i + 1);
        const num = String(i + 1).padStart(2, "0");

        const link = crear("a", "", num + " · " + a.titulo);
        link.href = "#" + id;
        $("indice").appendChild(link);

        const sec = crear("section", "actividad");
        sec.id = id;

        const cab = crear("div", "actividad__cabecera");
        cab.append(
            crear("span", "actividad__numero", "ACTIVIDAD " + num),
            crear("h2", "actividad__titulo", a.titulo),
            crear("span", "actividad__meta", a.fecha || "")
        );
        sec.appendChild(cab);

        if (a.texto) sec.appendChild(crear("p", "actividad__texto", a.texto));

        if (a.puntos && a.puntos.length) {
            const ul = crear("ul", "actividad__lista");
            a.puntos.forEach((p) => ul.appendChild(crear("li", "", p)));
            sec.appendChild(ul);
        }

        if (a.imagenes && a.imagenes.length) {
            const gal = crear("div", "galeria");
            a.imagenes.forEach((img) => {
                const fig = crear("figure", "figura");
                const marco = crear("div", "figura__marco");

                const tag = document.createElement("img");
                tag.src = img.src;
                tag.alt = img.descripcion || "";
                tag.loading = "lazy";
                tag.addEventListener("error", () => {
                    marco.replaceChildren(crear("span", "figura__vacia", "Imagen aquí\n(" + img.src + ")"));
                    marco.style.cursor = "default";
                    marco.onclick = null;
                });
                marco.appendChild(tag);
                marco.onclick = () => abrirVisor(img);

                fig.append(marco, crear("figcaption", "", img.descripcion || ""));
                gal.appendChild(fig);
            });
            sec.appendChild(gal);
        }

        $("actividades").appendChild(sec);
    });

    $("pie").textContent = CONTENIDO.pie;

    // Visor de imágenes
    const visor = $("visor");
    function abrirVisor(img) {
        $("visor-img").src = img.src;
        $("visor-img").alt = img.descripcion || "";
        $("visor-pie").textContent = img.descripcion || "";
        visor.hidden = false;
    }
    function cerrarVisor() { visor.hidden = true; }
    $("visor-cerrar").addEventListener("click", cerrarVisor);
    visor.addEventListener("click", (e) => { if (e.target === visor) cerrarVisor(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarVisor(); });
})();