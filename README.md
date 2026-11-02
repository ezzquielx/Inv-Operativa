# Investigación Operativa - Portafolio de Actividades

Sitio web y portafolio de resúmenes teóricos y resolución de modelos de optimización correspondiente a la materia **Investigación Operativa**.

---

## Datos de la Cátedra y Grupo

* **Materia:** Investigación Operativa
* **Ciclo Lectivo:** 2026
* **Profesor:** Juarez, Luis
* **Integrantes:**
  * Zarate Alfredo
  * Frias Santiago
  * Gomez Ariel
  * Sangenis Jose Luis

---

## Contenido del Proyecto

El sitio documenta los conceptos clave, fórmulas, metodologías y ejercicios resueltos de las siguientes unidades:

1. **Unidad 1: Introducción a la Investigación Operativa y Modelización**
   * Definición y origen histórico de la IO (Segunda Guerra Mundial).
   * Evolución cronológica (décadas de 1950 a la actualidad, integración con TI, Big Data e IA).
   * Metodología sistemática en 7 pasos.
   * Tipos de modelos: Determinísticos vs. Estocásticos (Estáticos y Dinámicos).
   * Toma de decisiones cuantitativas y análisis de sensibilidad.
   * Ejemplos resueltos (Camino más corto, EOQ, Asignación de programadores).

2. **Unidad 2: Programación Lineal**
   * Formulación matemática de modelos (función objetivo, restricciones, no negatividad).
   * Método gráfico (2 variables) y Método Simplex (multivariable).
   * Análisis de sensibilidad y teoría de dualidad (precios sombra).
   * Aplicaciones en informática (asignación de recursos CPU/RAM, planificación de tareas, balanceo y CDN).
   * Tabla de ejercicios resueltos y capturas de comprobación mediante Solver en Excel.

3. **Unidad 3: Problema del Transporte y Modelos de Stock**
   * Modelado matricial de transporte (métodos de inicio y optimización).
   * Conceptos fundamentales de inventario (demanda, lead time, costos de orden, posesión y faltante).
   * Modelo EOQ (lote económico) y sus variantes (con faltantes, descuentos por volumen y estocástico con stock de seguridad).
   * Aplicaciones en almacenamiento y caché de bases de datos.
   * Resoluciones matriciales prácticas con Solver en Excel.

4. **Unidad 4: Teoría de Colas y Aplicaciones en Sistemas Informáticos**
   * Estructura general de una línea de espera (llegadas, disciplina FIFO, servidores).
   * Notación de Kendall (`A / B / c / K / N / D`).
   * Modelos markovianos: M/M/1 y M/M/c (casos de servidores web, cajeros, helpdesk).
   * Medidas de desempeño ($W, W_q, L, L_q, \rho$).
   * Aplicaciones en sistemas distribuidos, planificación de procesos en CPU y redes de datos.

---

## Estructura del Repositorio

```text
├── index.html        # Estructura HTML semántica del portafolio
├── styles.css        # Hoja de estilos (Paleta Kemuri Koke, tipografía IBM Plex Mono, diseño responsive)
├── scripts.js        # Objeto de datos (CONTENIDO), renderizador dinámico y visor modal
├── imagenes/
│   ├── a/            # Capturas de resoluciones en Excel / Solver para Unidad 2
│   └── b/            # Capturas de resoluciones en Excel / Solver para Unidad 3
└── README.md         # Documentación general del repositorio
```

