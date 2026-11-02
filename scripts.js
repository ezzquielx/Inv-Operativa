/* =====================================================================
   CONTENIDO DE LA PÁGINA
   Investigación Operativa - Portafolio de Actividades y Resúmenes
   ===================================================================== */
const CONTENIDO = {
  materia: {
    etiqueta: "Investigación Operativa",
    titulo: "Actividades",
    descripcion: "Resúmenes teóricos y resolución de modelos de optimización: Unidad 1 (Introducción y Modelización), Unidad 2 (Programación Lineal), Unidad 3 (Problema del Transporte y Modelos de Stock) y Unidad 4 (Teoría de Colas).",
    datos: [
      { clave: "Profesor", valor: "Juarez, Luis" },
      { clave: "Ciclo", valor: "2026" },
      { clave: "Integrantes", valor: "Zarate Alfredo, Frias Santiago, Gomez Ariel, Sangenis Jose Luis" }
    ]
  },

  actividades: [
    /* ============ UNIDAD 1 ============ */
    {
      id: "u1",
      numero: "01",
      titulo: "U1 – Introducción a la Investigación Operativa y Modelización",
      unidad: "Unidad 1",
      intro: "Resumen conceptual de la Investigación Operativa: definición, origen histórico, evolución en el tiempo, metodología sistemática en 7 pasos, clasificación de modelos determinísticos y estocásticos, toma de decisiones y ejemplos resueltos de aplicación.",
      bloques: [
        {
          titulo: "¿Qué es la IO?",
          html: "<p>Es la ciencia de tomar mejores decisiones usando métodos matemáticos y análisis de datos. Transforma problemas complejos de la vida real en modelos matemáticos para encontrar la solución óptima.</p>"
        },
        {
          titulo: "Origen histórico",
          html: `<p>Nació en la Segunda Guerra Mundial (1939-1945), en Inglaterra. Equipos de matemáticos, físicos e ingenieros aplicaron métodos científicos a problemas militares con recursos limitados:</p>
<ul>
  <li>Ubicación de radares para detectar aviones enemigos.</li>
  <li>Organización de convoyes de barcos frente a submarinos.</li>
  <li>Dónde y cuándo bombardear para el máximo impacto.</li>
  <li>Logística de tropas y suministros.</li>
</ul>
<p>El resultado fueron mejoras de entre 20% y 30% en eficiencia.</p>`
        },
        {
          titulo: "Evolución",
          html: `<ul>
  <li><strong>1950-1960:</strong> las empresas adoptan la IO en producción, inventarios y transporte.</li>
  <li><strong>1970-1980:</strong> aparece el software especializado y se resuelven modelos de gran escala.</li>
  <li><strong>1990 hasta hoy:</strong> integración con tecnologías de la información, optimización en tiempo real, Big Data e IA.</li>
</ul>`
        },
        {
          titulo: "Metodología en 7 pasos",
          html: `<ol>
  <li><strong>Definición del problema:</strong> objetivo, decisiones y restricciones.</li>
  <li><strong>Formulación del modelo:</strong> variables de decisión, función objetivo y restricciones.</li>
  <li><strong>Obtención de datos:</strong> costos, tiempos, capacidades y demandas.</li>
  <li><strong>Resolución del modelo:</strong> programación lineal, entera, no lineal, teoría de colas o simulación.</li>
  <li><strong>Validación:</strong> datos históricos, pruebas de sensibilidad y opinión de expertos.</li>
  <li><strong>Implementación:</strong> algoritmo, sistema, programa de planificación o dashboard.</li>
  <li><strong>Seguimiento y mantenimiento:</strong> controlar que el modelo siga siendo válido.</li>
</ol>`
        },
        {
          titulo: "Tipos de modelos",
          html: `<div class="tabla">
  <table>
    <thead>
      <tr><th></th><th>Estático (un solo período)</th><th>Dinámico (varios períodos)</th></tr>
    </thead>
    <tbody>
      <tr><td>Determinístico (datos ciertos)</td><td>Asignación de tareas a servidores</td><td>Planificación de backups</td></tr>
      <tr><td>Estocástico (con incertidumbre)</td><td>Diseño de un balanceador de carga</td><td>Gestión adaptativa de caché</td></tr>
    </tbody>
  </table>
</div>
<p class="nota">Los modelos determinísticos usan datos conocidos con certeza (misma entrada, misma salida). Los estocásticos incluyen variables aleatorias con distribuciones de probabilidad.</p>`
        },
        {
          titulo: "Toma de decisiones basada en modelos",
          html: "<p>Reemplaza la intuición y las corazonadas por datos y análisis. Es objetiva, reproducible, considera múltiples escenarios y cuantifica riesgos y beneficios. Incluye análisis de sensibilidad, por ejemplo, qué pasa si la demanda aumenta 20%.</p>"
        },
        {
          titulo: "Ejemplos resueltos",
          html: `<ul>
  <li><strong>Camino más corto:</strong> Casa → A → Universidad y Casa → B → Universidad tardan 13 min, contra 15 min por la ruta directa.</li>
  <li><strong>Inventario (EOQ):</strong> con D = 200 unidades/mes, K = $50 y h = $2, la cantidad óptima es Q* = √(2·200·50 / 2) = 100 unidades, es decir, pedir cada 2 semanas con un costo total de $200/mes.</li>
  <li><strong>Asignación de programadores:</strong> la mejor asignación es P1 → A, P2 → B y P3 → C, con un total de 16 días. La asignación "intuitiva" falla porque dos programadores prefieren el mismo proyecto.</li>
</ul>`
        }
      ],
      imagenes: []
    },

    /* ============ UNIDAD 2 ============ */
    {
      id: "u2",
      numero: "02",
      titulo: "U2 – Programación Lineal",
      unidad: "Unidad 2",
      intro: "Formulación de problemas de programación lineal, método gráfico, método simplex, análisis de sensibilidad y dualidad, y aplicaciones en sistemas informáticos, con ejercicios resueltos.",
      bloques: [
        {
          titulo: "Formulación",
          html: `<p>Convertir un problema del mundo real en un modelo con una función objetivo (maximizar o minimizar), restricciones lineales y condición de no negatividad.</p>
<p>Ejemplo: una fábrica produce sillas (x) y mesas (y).</p>
<code class="formula">Max Z = 50x + 80y &nbsp; sujeto a &nbsp; 2x + 4y ≤ 40 &nbsp; x, y ≥ 0</code>`
        },
        {
          titulo: "Método gráfico",
          html: "<p>Sirve para problemas de 2 variables. Se grafican las restricciones, se identifica la región factible y se evalúa la función objetivo en los vértices. En el ejemplo anterior, los vértices (0,0), (20,0) y (0,10) dan $0, $1.000 y $800. La solución óptima es producir 20 sillas y 0 mesas, con $1.000 de ganancia.</p>"
        },
        {
          titulo: "Método simplex",
          html: `<p>Algoritmo algebraico que recorre sistemáticamente los vértices de la región factible, mejorando la función objetivo en cada paso hasta llegar al óptimo. Sirve para problemas con muchas variables.</p>
<p>Ejemplo de la panadería (pan, tortas y galletas): Max 3x₁ + 5x₂ + 4x₃ con restricciones de harina y azúcar. El óptimo es x₁ = 0, x₂ = 20, x₃ = 20, con una ganancia de $180.</p>`
        },
        {
          titulo: "Sensibilidad y dualidad",
          html: `<ul>
  <li><strong>Sensibilidad:</strong> estudia cómo cambia la solución si se modifican los datos (más recursos, cambios de precios).</li>
  <li><strong>Dualidad:</strong> cada problema tiene un problema "gemelo" que informa el valor de los recursos escasos (precios sombra).</li>
</ul>`
        },
        {
          titulo: "Aplicaciones en sistemas informáticos",
          html: `<ul>
  <li><strong>Asignación de recursos:</strong> distribuir CPU, memoria o ancho de banda entre procesos.</li>
  <li><strong>Planificación de tareas:</strong> organizar trabajos en servidores minimizando tiempo o costos.</li>
  <li><strong>Optimización de rendimiento:</strong> balanceo de carga, consultas en bases de datos y CDN con costos y capacidades por centro de datos.</li>
</ul>`
        },
        {
          titulo: "Ejercicios resueltos",
          html: `<div class="tabla">
  <table>
    <thead>
      <tr><th>Problema</th><th>Solución óptima</th></tr>
    </thead>
    <tbody>
      <tr><td>Fábrica de muebles</td><td class="num">36 mesas y 12 sillas, $16.800</td></tr>
      <tr><td>Granja agrícola</td><td class="num">80 ha de maíz y 20 ha de trigo, $34.000</td></tr>
      <tr><td>Fábrica de ropa</td><td class="num">40 camisas y 20 pantalones, $1.800</td></tr>
      <tr><td>Compañía de transporte</td><td class="num">20 viajes tipo A y 0 tipo B, $6.000</td></tr>
      <tr><td>Fábrica de juguetes</td><td class="num">120 carros y 180 muñecas, $3.600</td></tr>
      <tr><td>Alimento para mascotas</td><td class="num">0,83 kg de harina de pescado y 0,17 kg de maíz, $4,66 por kg</td></tr>
      <tr><td>Fábrica de pinturas</td><td class="num">40 L de base blanca y 64 L de pigmento, $1.088</td></tr>
      <tr><td>Dieta de mínimo costo</td><td class="num">12 kg de alimento X y 14 kg de alimento Y, $348</td></tr>
      <tr><td>Combustible Premium</td><td class="num">5.000 L de componente A y 5.000 L de B, $70.000</td></tr>
    </tbody>
  </table>
</div>
<p class="nota">En el problema de transporte con camiones, la solución A = 30 necesitaría 30 conductores y solo hay 20, por eso el óptimo factible es A = 20. En la dieta, la combinación (0, 20) no alcanza la vitamina C, por eso el óptimo es (12, 14).</p>`
        }
      ],
      imagenes: [
        { src: "imagenes/a/1.png", descripcion: "Ejemplo · Programación Lineal (Z = 3600)" },
        { src: "imagenes/a/2.png", descripcion: "Punto 1 · Maximización de Ganancia (Z = 16000)" },
        { src: "imagenes/a/3.png", descripcion: "Punto 2 · Maximización de Ganancia (Z = 34000)" },
        { src: "imagenes/a/4.png", descripcion: "Punto 3 · Maximización de Ganancia (Z = 1600)" },
        { src: "imagenes/a/5.png", descripcion: "Punto 4 · Maximización de Ganancia (Z = 6000)" },
        { src: "imagenes/a/6.png", descripcion: "Punto 5 · Maximización de Ganancia (Z = 900)" }
      ]
    },

    /* ============ UNIDAD 3 ============ */
    {
      id: "u3",
      numero: "03",
      titulo: "U3 – Problema del Transporte y Modelos de Stock",
      unidad: "Unidad 3",
      intro: "Formulación y resolución del problema del transporte, y modelos de inventario deterministas y estocásticos con sus aplicaciones en gestión de recursos de TI.",
      bloques: [
        {
          titulo: "Problema del transporte",
          html: `<p>Busca minimizar el costo de enviar mercadería desde orígenes (oferta) hacia destinos (demanda). Para obtener una solución inicial se usan los métodos de esquina noroeste, costo mínimo y Vogel. La esquina noroeste da una solución factible, no necesariamente óptima, y debe mejorarse (por ejemplo con MODI).</p>
<p>También se estudian los problemas de asignación (método húngaro) y el transporte con restricciones.</p>`
        },
        {
          titulo: "Modelos de inventario: conceptos básicos",
          html: `<p>Un modelo de inventario decide <strong>cuánto pedir</strong> (tamaño del lote) y <strong>cuándo pedir</strong> (punto de reorden).</p>
<ul>
  <li><strong>Demanda (D):</strong> cuánto se vende o usa.</li>
  <li><strong>Lead time (L):</strong> tiempo que tarda el proveedor en entregar.</li>
  <li><strong>Costo de pedido (S):</strong> costo fijo por cada pedido.</li>
  <li><strong>Costo de almacenamiento (H):</strong> costo de mantener una unidad en stock.</li>
  <li><strong>Costo del producto (C):</strong> precio de compra por unidad.</li>
  <li><strong>Costo de faltante (B):</strong> costo de no tener stock cuando hay demanda.</li>
</ul>`
        },
        {
          titulo: "Modelo EOQ (lote económico)",
          html: `<code class="formula">Q* = √(2DS / H) &nbsp;&nbsp; N = D / Q* &nbsp;&nbsp; ROP = d × L &nbsp;&nbsp; TC = (D/Q)·S + (Q/2)·H + D·C</code>
<p>Ejemplo: D = 1.200 unidades/año, S = $50, H = $2 por unidad/año, L = 7 días y 300 días de trabajo. Resultado: pedir Q* ≈ 245 unidades, unos 4,9 pedidos al año, y hacer el pedido cuando el inventario llegue a 28 unidades.</p>`
        },
        {
          titulo: "Variantes del EOQ",
          html: `<ul>
  <li><strong>Con faltantes permitidos:</strong> Q* = √(2DS/H · (H+B)/B), con faltante máximo S* = Q* · H/(H+B).</li>
  <li><strong>Con descuentos por cantidad:</strong> se compara el costo total en cada tramo de precio.</li>
</ul>`
        },
        {
          titulo: "Modelos estocásticos",
          html: `<p>Se usan cuando la demanda es incierta. Se trabaja con demanda probabilística, nivel de servicio y stock de seguridad.</p>
<code class="formula">ROP = dL + zσ√L</code>`
        },
        {
          titulo: "Aplicaciones en TI",
          html: "<p>Gestión de caché en bases de datos y de recursos en la nube (RAM, CPU, almacenamiento), aplicando los principios del EOQ por analogía.</p>"
        }
      ],
      imagenes: [
        { src: "imagenes/b/1.png", descripcion: "Ejemplo · Problema del Transporte (Costo: $2040)" },
        { src: "imagenes/b/2.png", descripcion: "Punto 1 · Matriz 4x3 (Costo: $1740)" },
        { src: "imagenes/b/3.png", descripcion: "Punto 2 · Matriz 2x4 (Costo: $1780)" },
        { src: "imagenes/b/4.png", descripcion: "Punto 3 · Matriz 3x4 (Costo: $1070)" },
        { src: "imagenes/b/5.png", descripcion: "Punto 4 · Matriz 2x3 (Costo: $3090)" },
        { src: "imagenes/b/6.png", descripcion: "Punto 5 · Matriz 3x4 (Costo: $5300)" },
        { src: "imagenes/b/7.png", descripcion: "Punto 6 · Matriz 2x3 (Costo: $4140)" },
        { src: "imagenes/b/8.png", descripcion: "Punto 7 · Matriz 3x4 (Costo: $5140)" },
        { src: "imagenes/b/9.png", descripcion: "Punto 8 · Matriz 2x3 (Costo: $2420)" }
      ]
    },

    /* ============ UNIDAD 4 ============ */
    {
      id: "u4",
      numero: "04",
      titulo: "U4 – Teoría de Colas y Aplicaciones en Sistemas Informáticos",
      unidad: "Unidad 4",
      intro: "Estructura de un sistema de colas, notación de Kendall, modelos markovianos y medidas de desempeño, con ejemplos aplicados a sistemas informáticos.",
      bloques: [
        {
          titulo: "Definición",
          html: "<p>Es el estudio matemático de las líneas de espera. Busca el equilibrio entre filas demasiado largas, que frustran al cliente, y capacidad ociosa, que genera costos.</p>"
        },
        {
          titulo: "Estructura de un sistema de colas",
          html: `<ol>
  <li><strong>Fuente de entrada:</strong> población de clientes potenciales, finita o infinita.</li>
  <li><strong>Proceso de llegada:</strong> cómo llegan los clientes en el tiempo, generalmente Poisson.</li>
  <li><strong>Cola:</strong> capacidad y disciplina de atención, normalmente FIFO.</li>
  <li><strong>Mecanismo de servicio:</strong> servidores con tiempos de servicio generalmente exponenciales.</li>
</ol>`
        },
        {
          titulo: "Notación de Kendall",
          html: `<code class="formula">A / B / c / K / N / D</code>
<ul>
  <li><strong>A:</strong> distribución de llegadas (M = markoviana, D = determinista, G = general).</li>
  <li><strong>B:</strong> distribución del servicio.</li>
  <li><strong>c:</strong> número de servidores.</li>
  <li><strong>K:</strong> capacidad del sistema (por defecto, infinita).</li>
  <li><strong>N:</strong> tamaño de la población (por defecto, infinita).</li>
  <li><strong>D:</strong> disciplina de la cola (por defecto, FIFO).</li>
</ul>
<p>Ejemplo: M/M/2/10/∞/FIFO describe un soporte técnico con 2 ingenieros y capacidad máxima de 10 tickets simultáneos; si llega un ticket más, se rechaza.</p>`
        },
        {
          titulo: "Modelo M/M/1",
          html: `<code class="formula">ρ = λ/µ &nbsp;&nbsp; W = 1/(µ − λ) &nbsp;&nbsp; Lq = λ² / [µ(µ − λ)]</code>
<div class="tabla">
  <table>
    <thead>
      <tr><th>Caso</th><th>λ</th><th>µ</th><th>ρ</th><th>W</th></tr>
    </thead>
    <tbody>
      <tr><td>Servidor web</td><td class="num">5 req/s</td><td class="num">8 req/s</td><td class="num">62,5%</td><td class="num">0,33 s</td></tr>
      <tr><td>Cajero automático</td><td class="num">20/h</td><td class="num">30/h</td><td class="num">66,7%</td><td class="num">6 min</td></tr>
      <tr><td>Línea de ayuda</td><td class="num">4/h</td><td class="num">6/h</td><td class="num">66,7%</td><td class="num">30 min</td></tr>
      <tr><td>Impresora en red</td><td class="num">2/min</td><td class="num">3/min</td><td class="num">66,7%</td><td class="num">1 min</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          titulo: "Modelo M/M/c (varios servidores)",
          html: `<p>Ejemplo: soporte técnico con 4 operadores, λ = 12 llamadas/h y µ = 4 llamadas/h por operador.</p>
<ul>
  <li>Utilización ρ = λ/(c·µ) = 75%.</li>
  <li>Probabilidad de sistema vacío P₀ ≈ 3,77%.</li>
  <li>Longitud de cola Lq ≈ 1,53 llamadas, con un tiempo en cola Wq ≈ 7,65 min.</li>
  <li>Tiempo en el sistema W ≈ 22,65 min y clientes en el sistema L ≈ 4,53 llamadas.</li>
</ul>
<p>El programa incluye también M/M/s y M/M/1/K, este último con capacidad limitada, donde se pierden los clientes que llegan con el sistema lleno.</p>`
        },
        {
          titulo: "Medidas de desempeño",
          html: "<p>Tiempo en el sistema (W), tiempo en cola (Wq), longitud de cola (Lq), clientes en el sistema (L) y utilización (ρ).</p>"
        },
        {
          titulo: "Aplicaciones en sistemas informáticos",
          html: `<ul>
  <li>Planificación de procesos (CPU scheduling).</li>
  <li>Redes de comunicaciones y tráfico de datos.</li>
  <li>Diseño de centros de datos y sistemas distribuidos.</li>
  <li>Simulación de colas en entornos informáticos.</li>
</ul>`
        }
      ],
      imagenes: []
    }
  ],

  pie: "Investigación Operativa · Ciclo 2026 · Juarez, Luis"
};

/* =====================================================================
   RENDERIZADOR DINÁMICO
   Genera el HTML en el orden y jerarquía del diseño
   ===================================================================== */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  // 1. Cargar Cabecera
  const m = CONTENIDO.materia;
  if ($("materia-etiqueta")) $("materia-etiqueta").textContent = m.etiqueta;
  if ($("materia-titulo")) $("materia-titulo").textContent = m.titulo;
  if ($("materia-descripcion")) $("materia-descripcion").textContent = m.descripcion;
  document.title = `${m.etiqueta} - ${m.titulo}`;

  const metaContenedor = $("materia-datos");
  if (metaContenedor && m.datos) {
    m.datos.forEach((d) => {
      const p = document.createElement("p");
      p.className = "chip";
      p.innerHTML = `<b>${d.clave}:</b> ${d.valor}`;
      metaContenedor.appendChild(p);
    });
  }

  // 2. Cargar Índice y Actividades
  const indice = $("indice");
  const main = $("actividades");

  CONTENIDO.actividades.forEach((act) => {
    // Enlace en el nav
    if (indice) {
      const a = document.createElement("a");
      a.href = `#${act.id}`;
      a.textContent = `${act.numero} · ${act.titulo}`;
      indice.appendChild(a);
    }

    // Sección de la actividad
    if (main) {
      const sec = document.createElement("section");
      sec.className = "actividad";
      sec.id = act.id;

      // Cabecera de la actividad
      const head = document.createElement("div");
      head.className = "actividad-head";
      head.innerHTML = `
        <div>
          <p class="eyebrow">Actividad ${act.numero}</p>
          <h2>${act.titulo}</h2>
        </div>
        <span class="unidad-tag">${act.unidad}</span>
      `;
      sec.appendChild(head);

      // Intro
      if (act.intro) {
        const introP = document.createElement("p");
        introP.className = "intro";
        introP.textContent = act.intro;
        sec.appendChild(introP);
      }

      // Bloques de contenido
      if (act.bloques && act.bloques.length) {
        act.bloques.forEach((b) => {
          const divB = document.createElement("div");
          divB.className = "bloque";
          divB.innerHTML = `<h3>${b.titulo}</h3>${b.html}`;
          sec.appendChild(divB);
        });
      }

      // Galería de imágenes (si posee)
      if (act.imagenes && act.imagenes.length) {
        const divGal = document.createElement("div");
        divGal.className = "bloque";
        divGal.innerHTML = "<h3>Resolución práctica en Excel (Solver)</h3><p>Capturas de los ejercicios resueltos en planilla:</p>";

        const gal = document.createElement("div");
        gal.className = "galeria";

        act.imagenes.forEach((img) => {
          const fig = document.createElement("figure");
          fig.className = "figura";

          const marco = document.createElement("div");
          marco.className = "figura__marco";

          const tag = document.createElement("img");
          tag.src = img.src;
          tag.alt = img.descripcion || "";
          tag.loading = "lazy";

          marco.appendChild(tag);
          marco.onclick = () => abrirVisor(img.src, img.descripcion);

          const cap = document.createElement("figcaption");
          cap.textContent = img.descripcion || "";

          fig.appendChild(marco);
          fig.appendChild(cap);
          gal.appendChild(fig);
        });

        divGal.appendChild(gal);
        sec.appendChild(divGal);
      }

      main.appendChild(sec);
    }
  });

  // 3. Pie de página
  if ($("pie")) $("pie").textContent = CONTENIDO.pie;

  // 4. Visor Modal de Imágenes
  const visor = $("visor");
  const visorImg = $("visor-img");
  const visorPie = $("visor-pie");
  const visorCerrar = $("visor-cerrar");

  function abrirVisor(src, desc) {
    if (!visor || !visorImg || !visorPie) return;
    visorImg.src = src;
    visorImg.alt = desc || "";
    visorPie.textContent = desc || "";
    visor.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function cerrarVisor() {
    if (!visor) return;
    visor.hidden = true;
    if (visorImg) visorImg.src = "";
    document.body.style.overflow = "";
  }

  if (visorCerrar) visorCerrar.onclick = cerrarVisor;
  if (visor) {
    visor.onclick = (e) => {
      if (e.target === visor) cerrarVisor();
    };
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && visor && !visor.hidden) cerrarVisor();
  });
})();