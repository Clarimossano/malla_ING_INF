const ramos = [
    { id: 1, nombre: "Introducción a la Programación", requisitos: [], desbloquea: [5, 8], columna: 1 },
    { id: 2, nombre: "Álgebra Lineal", requisitos: [], desbloquea: [7, 9, 12, 17], columna: 1 },
    { id: 3, nombre: "Organización de Computadoras", requisitos: [], desbloquea: [10, 18], columna: 1 },
    { id: 4, nombre: "Análisis Matemático I", requisitos: [], desbloquea: [6, 7], columna: 1 },
    { id: 5, nombre: "Metodología de la Programación", requisitos: [1], desbloquea: [11, 14, 15, 18, 19], columna: 1 },
    { id: 6, nombre: "Análisis Matemático II", requisitos: [4], desbloquea: [12, 16], columna: 1 },
    { id: 7, nombre: "Física Mecánica", requisitos: [2, 4], desbloquea: [13], columna: 1 },
    { id: 8, nombre: "Estructura de Datos", requisitos: [1], desbloquea: [11, 14, 15, 18, 19, 22], columna: 1 },

    { id: 9, nombre: "Matemática Discreta", requisitos: [2], desbloquea: [34], columna: 2 },
    { id: 10, nombre: "Teoría de la Información y la Comunicación", requisitos: [3], desbloquea: [], columna: 2 },
    { id: 11, nombre: "Desarrollo Sistemático de Programas", requisitos: [5,8], desbloquea: [], columna: 2 },
    { id: 12, nombre: "Probabilidades y Estadística", requisitos: [2,6], desbloquea: [24,34], columna: 2 },
    { id: 13, nombre: "Electricidad y Magnetismo", requisitos: [7], desbloquea: [], columna: 2 },
    { id: 14, nombre: "Bases de Datos", requisitos: [5,8], desbloquea: [38,39], columna: 2 },
    { id: 15, nombre: "Programación Concurrente", requisitos: [5,8], desbloquea: [20,40], columna: 2 },
    { id: 16, nombre: "Cálculo Numérico", requisitos: [6], desbloquea: [24,34], columna: 2 },

    { id: 17, nombre: "Lógica Computacional", requisitos: [2], desbloquea: [22,28], columna: 3 },
    { id: 18, nombre: "Sistemas Operativos I", requisitos: [3,5,8], desbloquea: [23], columna: 3 },
    { id: 19, nombre: "Organización Empresarial y Modelos de Negocios", requisitos: [5,8], desbloquea: [25,44], columna: 3 },
    { id: 20, nombre: "Modelado Orientado a Objetos", requisitos: [15], desbloquea: [26,28,30,42,43], columna: 3 },
    { id: 22, nombre: "Teoría de Autómatas", requisitos: [8,17], desbloquea: [41], columna: 3 },
    { id: 23, nombre: "Sistemas Operativos II", requisitos: [18], desbloquea: [27,29,32], columna: 3 },
    { id: 24, nombre: "Métodos de Simulación", requisitos: [12,16], desbloquea: [], columna: 3 },

    { id: 25, nombre: "Formulación y Evaluación de Proyectos", requisitos: [19], desbloquea: [], columna: 4 },
    { id: 26, nombre: "Calidad del Software", requisitos: [20], desbloquea: [], columna: 4 },
    { id: 27, nombre: "Arquitectura de Redes", requisitos: [23], desbloquea: [29], columna: 4 },
    { id: 28, nombre: "Ingeniería del Conocimiento", requisitos: [17,20], desbloquea: [], columna: 4 },

    { id: 29, nombre: "Arquitectura de Computadoras Paralelas", requisitos: [23,27], desbloquea: [], columna: 5 },
    { id: 30, nombre: "Sistemas de Información", requisitos: [20], desbloquea: [33], columna: 5 },
    { id: 32, nombre: "Seguridad y Auditoría Informática", requisitos: [23], desbloquea: [], columna: 5 },
    { id: 33, nombre: "Ingeniería de Software I", requisitos: [30], desbloquea: [36], columna: 5 },
    { id: 34, nombre: "Sistemas Inteligentes", requisitos: [9,12,16], desbloquea: [], columna: 5 },
    { id: 36, nombre: "Ingeniería de Software II", requisitos: [33], desbloquea: [], columna: 5 },

    // Optativos + Inglés
    { id: 38, nombre: "Aplicaciones de Bases de Datos I", requisitos: [14], desbloquea: [], columna: 6 },
    { id: 39, nombre: "Aplicaciones de Bases de Datos II", requisitos: [14], desbloquea: [], columna: 6 },
    { id: 40, nombre: "Introducción al Procesamiento Digital de Imágenes", requisitos: [15], desbloquea: [], columna: 6 },
    { id: 41, nombre: "Inteligencia Artificial", requisitos: [22], desbloquea: [], columna: 6 },
    { id: 42, nombre: "Recuperación Avanzada de la Información", requisitos: [20], desbloquea: [], columna: 6 },
    { id: 43, nombre: "Desarrollo y Arquitecturas Avanzadas", requisitos: [20], desbloquea: [], columna: 6 },
    { id: 44, nombre: "Modelado y Proceso de Negocios", requisitos: [19], desbloquea: [], columna: 6 }
];

const aprobados = new Set();

function crearColumna(titulo) {
    const div = document.createElement("div");
    div.classList.add("columna");
    const h2 = document.createElement("h2");
    h2.textContent = titulo;
    div.appendChild(h2);
    return div;
}

function renderMalla() {
    const contenedor = document.getElementById("malla");
    contenedor.innerHTML = "";

    const columnas = [
        crearColumna("1er Año"),
        crearColumna("2do Año"),
        crearColumna("3er Año"),
        crearColumna("4to Año"),
        crearColumna("5to Año"),
        crearColumna("Optativos / Inglés")
    ];

    ramos.forEach(ramo => {
        const div = document.createElement("div");
        div.classList.add("ramo");
        div.textContent = `${ramo.id}. ${ramo.nombre}`;
        div.dataset.id = ramo.id;

        if (aprobados.has(ramo.id)) {
            div.classList.add("aprobado");
        } else if (ramo.requisitos.every(id => aprobados.has(id))) {
            div.classList.add("activo");
            div.onclick = () => aprobarRamo(ramo.id);
        }

        columnas[ramo.columna - 1].appendChild(div);
    });

    columnas.forEach(col => contenedor.appendChild(col));
}

function aprobarRamo(id) {
    aprobados.add(id);
    renderMalla();
}

renderMalla();
