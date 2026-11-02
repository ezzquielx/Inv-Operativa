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
        etiqueta: "Investigación Operativa",
        titulo: "Actividades",
        descripcion: "Resúmenes teóricos y resolución de modelos de optimización: Unidad 1 (Introducción y Modelización), Unidad 2 (Programación Lineal) y Unidad 3 (Problema del Transporte y Modelos de Stock) con Solver en Excel.",
        datos: [
            { clave: "Profesor", valor: "Juarez, Luis" },
            { clave: "Ciclo", valor: "2026" },
            { clave: "Integrantes", valor: "Zarate Alfredo, Frias Santiago, Gomez Ariel, Sangenis Jose Luis" }
        ]
    },

    actividades: [
        {
            titulo: "U1 - Introducción a la Investigación Operativa y Modelización",
            fecha: "Unidad 1",
            texto: "Resumen conceptual de la Investigación Operativa: definición, origen histórico, evolución en el tiempo, metodología sistemática en 7 pasos, clasificación de modelos determinísticos y estocásticos, toma de decisiones y ejemplos resueltos de aplicación.",
            secciones: [
                {
                    subtitulo: "¿Qué es la IO?",
                    texto: "Es la ciencia de tomar mejores decisiones usando métodos matemáticos y análisis de datos. Transforma problemas complejos de la vida real en modelos matemáticos para encontrar la solución óptima."
                },
                {
                    subtitulo: "Origen Histórico",
                    texto: "Nació en la Segunda Guerra Mundial, en Inglaterra. Equipos de matemáticos, físicos e ingenieros optimizaron la ubicación de radares, los convoyes de barcos, los bombardeos y la logística, con mejoras de entre 20 y 30% en eficiencia."
                },
                {
                    subtitulo: "Evolución",
                    items: [
                        "<strong>1950-1960:</strong> se extiende a la industria (producción, inventarios, transporte).",
                        "<strong>1970-1980:</strong> aparece el software especializado y se resuelven modelos de gran escala.",
                        "<strong>1990 hasta hoy:</strong> se integra con las tecnologías de la información, el Big Data y la IA."
                    ]
                },
                {
                    subtitulo: "Metodología en 7 Pasos",
                    pasos: [
                        { paso: 1, titulo: "Definir el problema", desc: "Identificar los objetivos del sistema, las variables y el alcance." },
                        { paso: 2, titulo: "Formular el modelo", desc: "Definir variables de decisión, función objetivo y restricciones." },
                        { paso: 3, titulo: "Obtener datos", desc: "Recolectar información cuantitativa precisa para los parámetros." },
                        { paso: 4, titulo: "Resolver el modelo", desc: "Aplicar algoritmos matemáticos para hallar la solución óptima." },
                        { paso: 5, titulo: "Validar el modelo", desc: "Verificar con datos históricos, pruebas de sensibilidad y opinión de expertos." },
                        { paso: 6, titulo: "Implementar la solución", desc: "Llevar la solución matemática a la práctica operativa de la organización." },
                        { paso: 7, titulo: "Seguimiento y mantenimiento", desc: "Control continuo para asegurar que el modelo se adapte a cambios del entorno." }
                    ]
                },
                {
                    subtitulo: "Tipos de Modelos",
                    tabla: {
                        encabezados: ["", "Estático (un solo período)", "Dinámico (varios períodos)"],
                        filas: [
                            ["<strong>Determinístico</strong><br><small>(datos ciertos)</small>", "Asignación de tareas a servidores", "Planificación de backups"],
                            ["<strong>Estocástico</strong><br><small>(con incertidumbre)</small>", "Diseño de un balanceador de carga", "Gestión adaptativa de caché"]
                        ]
                    }
                },
                {
                    subtitulo: "Toma de Decisiones Basada en Modelos",
                    texto: "Reemplaza la intuición por datos y análisis. Es objetiva, reproducible y cuantifica riesgos. Incluye <strong>análisis de sensibilidad</strong> (¿qué pasa si la demanda sube 20%?)."
                },
                {
                    subtitulo: "Ejemplos Resueltos",
                    ejemplos: [
                        {
                            badge: "Redes y Rutas",
                            tema: "Camino más corto",
                            detalle: "Casa→A→Universidad y Casa→B→Universidad dan <strong>13 min</strong>, contra <strong>15 min</strong> por la ruta directa."
                        },
                        {
                            badge: "Inventarios",
                            tema: "Inventario (EOQ)",
                            detalle: "Con D=200/mes, K=$50 y h=$2:<br><code>Q* = √(2·200·50/2) = 100 unidades</code><br>Es decir, pedir cada 2 semanas con un costo total de <strong>$200/mes</strong>."
                        },
                        {
                            badge: "Asignación",
                            tema: "Asignación de programadores",
                            detalle: "La mejor asignación es <code>P1→A</code>, <code>P2→B</code>, <code>P3→C</code>, con un total de <strong>16 días</strong>. La asignación \"intuitiva\" falla porque dos programadores quieren el mismo proyecto."
                        }
                    ]
                }
            ],
            imagenes: []
        },
        {
            titulo: "U2 - Programación Lineal",
            fecha: "Unidad 2",
            texto: "Formulación y resolución de modelos de Programación Lineal mediante Solver en Excel para maximizar la función objetivo sujeta a restricciones de capacidad y recursos.",
            puntos: [
                "Ejemplo: Modelo de maximización de ganancia total con 2 variables (P y V) y 3 restricciones técnicas (Z = 3600).",
                "Punto 1: Maximización de utilidades con variables M y S sujeto a tres restricciones de recursos (Z = 16000).",
                "Punto 2: Optimización de producción con variables M y T sujeto a restricciones de insumos y tiempo (Z = 34000).",
                "Punto 3: Maximización de beneficios con variables C y P sujeto a límites de insumos y capacidad (Z = 1600).",
                "Punto 4: Asignación óptima de producción con variables A y B sujeto a capacidad de planta (Z = 6000).",
                "Punto 5: Optimización de ingresos con variables C y M con coeficientes técnicos continuos (Z = 900)."
            ],
            imagenes: [
                { src: "imagenes/a/1.png", descripcion: "Ejemplo - Programación Lineal (Z = 3600)" },
                { src: "imagenes/a/2.png", descripcion: "Punto 1 - Maximización de Ganancia (Z = 16000)" },
                { src: "imagenes/a/3.png", descripcion: "Punto 2 - Maximización de Ganancia (Z = 34000)" },
                { src: "imagenes/a/4.png", descripcion: "Punto 3 - Maximización de Ganancia (Z = 1600)" },
                { src: "imagenes/a/5.png", descripcion: "Punto 4 - Maximización de Ganancia (Z = 6000)" },
                { src: "imagenes/a/6.png", descripcion: "Punto 5 - Maximización de Ganancia (Z = 900)" }
            ]
        },
        {
            titulo: "U3 - Problema del Transporte y Modelos de Stock",
            fecha: "Unidad 3",
            texto: "Modelado matricial y resolución del Problema del Transporte mediante Solver en Excel, optimizando la asignación de envíos desde fuentes u orígenes hacia almacenes o destinos para minimizar el costo total logístico satisfaciendo la oferta y la demanda.",
            puntos: [
                "Ejemplo: Matriz de 3 fuentes y 3 almacenes (3x3), minimizando el costo total logístico a $2040.",
                "Punto 1: Matriz de 4 fuentes a 3 almacenes (4x3), con costo total mínimo de $1740.",
                "Punto 2: Matriz de distribución de 2 fuentes a 4 almacenes (2x4), con costo total mínimo de $1780.",
                "Punto 3: Modelo de transporte de 3 fuentes a 4 almacenes (3x4), alcanzando un costo óptimo de $1070.",
                "Punto 4: Red logística de 2 fuentes a 3 almacenes (2x3), con costo de distribución de $3090.",
                "Punto 5: Asignación de 3 fuentes a 4 almacenes (3x4), con costo logístico óptimo de $5300.",
                "Punto 6: Distribución de 2 fuentes a 3 almacenes (2x3), alcanzando un costo mínimo de $4140.",
                "Punto 7: Problema de 3 fuentes a 4 almacenes (3x4), con costo total optimizado de $5140.",
                "Punto 8: Asignación de 2 fuentes hacia 3 almacenes (2x3), con costo total de transporte de $2420."
            ],
            imagenes: [
                { src: "imagenes/b/1.png", descripcion: "Ejemplo - Problema del Transporte (Costo Total: $2040)" },
                { src: "imagenes/b/2.png", descripcion: "Punto 1 - Problema del Transporte (Costo Total: $1740)" },
                { src: "imagenes/b/3.png", descripcion: "Punto 2 - Problema del Transporte (Costo Total: $1780)" },
                { src: "imagenes/b/4.png", descripcion: "Punto 3 - Problema del Transporte (Costo Total: $1070)" },
                { src: "imagenes/b/5.png", descripcion: "Punto 4 - Problema del Transporte (Costo Total: $3090)" },
                { src: "imagenes/b/6.png", descripcion: "Punto 5 - Problema del Transporte (Costo Total: $5300)" },
                { src: "imagenes/b/7.png", descripcion: "Punto 6 - Problema del Transporte (Costo Total: $4140)" },
                { src: "imagenes/b/8.png", descripcion: "Punto 7 - Problema del Transporte (Costo Total: $5140)" },
                { src: "imagenes/b/9.png", descripcion: "Punto 8 - Problema del Transporte (Costo Total: $2420)" }
            ]
        }
    ],

    pie: "Investigación Operativa · Ciclo Lectivo 2026"
};

/* =====================================================================
   A partir de acá no hace falta tocar nada.
   ===================================================================== */
(function () {
    const $ = (id) => document.getElementById(id);
    const crear = (tag, clase, texto, esHtml = false) => {
        const el = document.createElement(tag);
        if (clase) el.className = clase;
        if (texto !== undefined) {
            if (esHtml) el.innerHTML = texto;
            else el.textContent = texto;
        }
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

        if (a.secciones && a.secciones.length) {
            const contSecciones = crear("div", "secciones");
            a.secciones.forEach((s) => {
                const sEl = crear("div", "seccion");

                if (s.subtitulo) {
                    const cab = crear("div", "seccion__cabecera");
                    cab.append(crear("h3", "seccion__titulo", s.subtitulo));
                    sEl.appendChild(cab);
                }

                if (s.texto) {
                    sEl.appendChild(crear("p", "seccion__texto", s.texto, true));
                }

                if (s.items && s.items.length) {
                    const ul = crear("ul", "seccion__lista");
                    s.items.forEach((it) => ul.appendChild(crear("li", "", it, true)));
                    sEl.appendChild(ul);
                }

                if (s.pasos && s.pasos.length) {
                    const pGrid = crear("div", "pasos-grid");
                    s.pasos.forEach((p) => {
                        const card = crear("div", "paso-card");
                        const num = crear("span", "paso-card__num", String(p.paso));
                        const info = crear("div", "paso-card__contenido");
                        info.append(
                            crear("strong", "", p.titulo),
                            crear("p", "", p.desc)
                        );
                        card.append(num, info);
                        pGrid.appendChild(card);
                    });
                    sEl.appendChild(pGrid);
                }

                if (s.tabla) {
                    const wrap = crear("div", "tabla-contenedor");
                    const table = crear("table", "tabla-io");
                    if (s.tabla.encabezados) {
                        const thead = crear("thead");
                        const tr = crear("tr");
                        s.tabla.encabezados.forEach((th) => tr.appendChild(crear("th", "", th, true)));
                        thead.appendChild(tr);
                        table.appendChild(thead);
                    }
                    if (s.tabla.filas) {
                        const tbody = crear("tbody");
                        s.tabla.filas.forEach((fila) => {
                            const tr = crear("tr");
                            fila.forEach((td) => tr.appendChild(crear("td", "", td, true)));
                            tbody.appendChild(tr);
                        });
                        table.appendChild(tbody);
                    }
                    wrap.appendChild(table);
                    sEl.appendChild(wrap);
                }

                if (s.ejemplos && s.ejemplos.length) {
                    const eGrid = crear("div", "ejemplos-grid");
                    s.ejemplos.forEach((ej) => {
                        const card = crear("div", "ejemplo-card");
                        if (ej.badge) card.appendChild(crear("span", "ejemplo-card__badge", ej.badge));
                        if (ej.tema) card.appendChild(crear("h4", "ejemplo-card__titulo", ej.tema));
                        if (ej.detalle) card.appendChild(crear("p", "ejemplo-card__detalle", ej.detalle, true));
                        eGrid.appendChild(card);
                    });
                    sEl.appendChild(eGrid);
                }

                contSecciones.appendChild(sEl);
            });
            sec.appendChild(contSecciones);
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