const ramos = [
    { id: 1, nombre: "Introducción a la Programación", requisitos: [], desbloquea: [5, 8] },
    { id: 2, nombre: "Álgebra Lineal", requisitos: [], desbloquea: [7, 9, 12, 17] },
    { id: 3, nombre: "Organización de Computadoras", requisitos: [], desbloquea: [10, 18] },
    { id: 4, nombre: "Análisis Matemático I", requisitos: [], desbloquea: [6, 7] },
    { id: 5, nombre: "Metodología de la Programación", requisitos: [1], desbloquea: [11, 14, 15, 18, 19] },
    { id: 6, nombre: "Análisis Matemático II", requisitos: [4], desbloquea: [12, 16] },
    { id: 7, nombre: "Física Mecánica", requisitos: [2, 4], desbloquea: [13] },
    { id: 8, nombre: "Estructura de Datos", requisitos: [1], desbloquea: [11, 14, 15, 18, 19, 22] },
    { id: 9, nombre: "Matemática Discreta", requisitos: [2], desbloquea: [34] },
    { id: 10, nombre: "Teoría de la Información y la Comunicación", requisitos: [3], desbloquea: [] },
    { id: 11, nombre: "Desarrollo Sistemático de Programas", requisitos: [5, 8], desbloquea: [] },
    { id: 12, nombre: "Probabilidades y Estadística", requisitos: [2, 6], desbloquea: [24, 34] },
    { id: 13, nombre: "Electricidad y Magnetismo", requisitos: [7], desbloquea: [] },
    { id: 14, nombre: "Bases de Datos", requisitos: [5, 8], desbloquea: [38, 39] },
    { id: 15, nombre: "Programación Concurrente", requisitos: [5, 8], desbloquea: [20, 40] },
    { id: 16, nombre: "Cálculo Numérico", requisitos: [6], desbloquea: [24, 34] },
    { id: 17, nombre: "Lógica Computacional", requisitos: [2], desbloquea: [22, 28] },
    { id: 18, nombre: "Sistemas Operativos I", requisitos: [3, 5, 8], desbloquea: [23] },
    { id: 19, nombre: "Organización Empresarial y Modelos de Negocios", requisitos: [5, 8], desbloquea: [25, 44] },
    { id: 20, nombre: "Modelado Orientado a Objetos", requisitos: [15], desbloquea: [26, 28, 30, 42, 43] },
    { id: 22, nombre: "Teoría de Autómatas", requisitos: [8, 17], desbloquea: [41] },
    { id: 23, nombre: "Sistemas Operativos II", requisitos: [18], desbloquea: [27, 29, 32] },
    { id: 24, nombre: "Métodos de Simulación", requisitos: [12, 16], desbloquea: [] },
    { id: 25, nombre: "Formulación y Evaluación de Proyectos", requisitos: [19], desbloquea: [] },
    { id: 26, nombre: "Calidad del Software", requisitos: [20], desbloquea: [] },
    { id: 27, nombre: "Arquitectura de Redes", requisitos: [23], desbloquea: [29] },
    { id: 28, nombre: "Ingeniería del Conocimiento", requisitos: [17, 20], desbloquea: [] },
    { id: 29, nombre: "Arquitectura de Computadoras Paralelas", requisitos: [23, 27], desbloquea: [] },
    { id: 30, nombre: "Sistemas de Información", requisitos: [20], desbloquea: [33] },
    { id: 32, nombre: "Seguridad y Auditoría Informática", requisitos: [23], desbloquea: [] },
    { id: 33, nombre: "Ingeniería de Software I", requisitos: [30], desbloquea: [36] },
    { id: 34, nombre: "Sistemas Inteligentes", requisitos: [9, 12, 16], desbloquea: [] },
    { id: 36, nombre: "Ingeniería de Software II", requisitos: [33], desbloquea: [] }
];

// Guarda qué ramos están aprobados
const aprobados = new Set();

// Render inicial
function renderMalla() {
    const contenedor = document.getElementById("malla");
    contenedor.innerHTML = "";

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

        contenedor.appendChild(div);
    });
}

function aprobarRamo(id) {
    aprobados.add(id);
    renderMalla();
}

renderMalla();

