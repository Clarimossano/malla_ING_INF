const ramos = [
    // 1er año
    { id: 1, nombre: "Introducción a la Programación", requisitos: [], columna: 1 },
    { id: 2, nombre: "Álgebra Lineal", requisitos: [], columna: 1 },
    { id: 3, nombre: "Organización de Computadoras", requisitos: [], columna: 1 },
    { id: 4, nombre: "Análisis Matemático I", requisitos: [], columna: 1 },
    { id: 5, nombre: "Metodología de la Programación", requisitos: [1], columna: 1 },
    { id: 6, nombre: "Análisis Matemático II", requisitos: [4], columna: 1 },
    { id: 7, nombre: "Física Mecánica", requisitos: [2,4], columna: 1 },
    { id: 8, nombre: "Estructura de Datos", requisitos: [1], columna: 1 },

    // 2do año
    { id: 9, nombre: "Matemática Discreta", requisitos: [2], columna: 2 },
    { id:10, nombre: "Teoría de la Información", requisitos: [3], columna: 2 },
    { id:11, nombre: "Desarrollo Sist. Programas", requisitos: [5,8], columna: 2 },
    { id:12, nombre: "Probabilidades y Estadística", requisitos: [2,6], columna: 2 },
    { id:13, nombre: "Electricidad y Magnetismo", requisitos: [7], columna: 2 },
    { id:14, nombre: "Bases de Datos", requisitos: [5,8], columna: 2 },
    { id:15, nombre: "Programación Concurrente", requisitos: [5,8], columna: 2 },
    { id:16, nombre: "Cálculo Numérico", requisitos: [6], columna: 2 },

    // 3er año
    { id:17, nombre: "Lógica Computacional", requisitos: [2], columna: 3 },
    { id:18, nombre: "Sistemas Operativos I", requisitos: [3,5,8], columna: 3 },
    { id:19, nombre: "Org. Empresarial y Negocios", requisitos: [5,8], columna: 3 },
    { id:20, nombre: "Modelado OO", requisitos: [15], columna: 3 },
    { id:22, nombre: "Teoría de Autómatas", requisitos: [8,17], columna: 3 },
    { id:23, nombre: "Sistemas Operativos II", requisitos: [18], columna: 3 },
    { id:24, nombre: "Métodos de Simulación", requisitos: [12,16], columna: 3 },

    // 4to año
    { id:25, nombre: "Formulación y Proyectos", requisitos: [19], columna: 4 },
    { id:26, nombre: "Calidad Software", requisitos: [20], columna: 4 },
    { id:27, nombre: "Arquitectura de Redes", requisitos: [23], columna: 4 },
    { id:28, nombre: "Ingeniería del Conocimiento", requisitos: [17,20], columna: 4 },

    // 5to año
    { id:29, nombre: "Arq. Computadoras Paralelas", requisitos: [23,27], columna: 5 },
    { id:30, nombre: "Sistemas de Información", requisitos: [20], columna: 5 },
    { id:32, nombre: "Seguridad y Auditoría", requisitos: [23], columna: 5 },
    { id:33, nombre: "Ingeniería Software I", requisitos: [30], columna: 5 },
    { id:34, nombre: "Sistemas Inteligentes", requisitos: [9,12,16], columna: 5 },
    { id:36, nombre: "Ingeniería Software II", requisitos: [33], columna: 5 },

    // Optativos (37 a 47)
    { id:37, nombre: "Compiladores", requisitos: [15], columna: 6 },
    { id:38, nombre: "Apps Bases de Datos I", requisitos: [14], columna: 6 },
    { id:39, nombre: "Apps Bases de Datos II", requisitos: [14], columna: 6 },
    { id:40, nombre: "Proc. Digital Imágenes", requisitos: [15], columna: 6 },
    { id:41, nombre: "Inteligencia Artificial", requisitos: [22], columna: 6 },
    { id:42, nombre: "Recuperación Avanzada", requisitos: [20], columna: 6 },
    { id:43, nombre: "Arq. Avanzadas Software", requisitos: [20], columna: 6 },
    { id:44, nombre: "Modelado y Negocios", requisitos: [19], columna: 6 },
    { id:45, nombre: "Taller Formación Prof.", requisitos: [12], columna: 6 },
    { id:46, nombre: "Metodología Investigación", requisitos: [12], columna: 6 },
    { id:47, nombre: "Gestión Ambiental", requisitos: [12], columna: 6 },

    // Inglés
    { id:48, nombre: "Nivel suficiencia Inglés (R1)", requisitos: [], columna: 7 },
    { id:49, nombre: "Nivel aptitud Inglés (R2)", requisitos: [], columna: 7 }
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
        crearColumna("Optativos"),
        crearColumna("Inglés")
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
            div.onclick = () => toggleRamo(ramo.id);
        }

        // Para que los aprobados también puedan desmarcarse
        if (aprobados.has(ramo.id)) {
            div.classList.add("activo");
            div.onclick = () => toggleRamo(ramo.id);
        }

        columnas[ramo.columna - 1].appendChild(div);
    });

    columnas.forEach(col => contenedor.appendChild(col));
}

function toggleRamo(id) {
    if (aprobados.has(id)) {
        aprobados.delete(id);  // desmarcar
    } else {
        aprobados.add(id);     // marcar
    }
    renderMalla();
}

renderMalla();

