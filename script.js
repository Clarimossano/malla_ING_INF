const ramos = [
    // 1er año
    { id: 1, nombre: "Introducción a la Programación", requisitos: [], columna: 1, cuatrimestre: 1 },
    { id: 2, nombre: "Álgebra Lineal", requisitos: [], columna: 1, cuatrimestre: 1 },
    { id: 3, nombre: "Organización de Computadoras", requisitos: [], columna: 1, cuatrimestre: 1 },
    { id: 4, nombre: "Análisis Matemático I", requisitos: [], columna: 1, cuatrimestre: 1 },
    { id: 5, nombre: "Metodología de la Programación", requisitos: [1], columna: 1, cuatrimestre: 2 },
    { id: 6, nombre: "Análisis Matemático II", requisitos: [4], columna: 1, cuatrimestre: 2 },
    { id: 7, nombre: "Física Mecánica", requisitos: [2,4], columna: 1, cuatrimestre: 2 },
    { id: 8, nombre: "Estructura de Datos", requisitos: [1], columna: 1, cuatrimestre: 2 },

    // 2do año
    { id: 9, nombre: "Matemática Discreta", requisitos: [2], columna: 2, cuatrimestre: 1 },
    { id:10, nombre: "Teoría de la Información", requisitos: [3], columna: 2, cuatrimestre: 1 },
    { id:11, nombre: "Desarrollo Sist. Programas", requisitos: [5,8], columna: 2, cuatrimestre: 1 },
    { id:12, nombre: "Probabilidades y Estadística", requisitos: [2,6], columna: 2, cuatrimestre: 1 },
    { id:13, nombre: "Electricidad y Magnetismo", requisitos: [7], columna: 2, cuatrimestre: 2 },
    { id:14, nombre: "Bases de Datos", requisitos: [5,8], columna: 2, cuatrimestre: 2 },
    { id:15, nombre: "Programación Concurrente", requisitos: [5,8], columna: 2, cuatrimestre: 2 },
    { id:16, nombre: "Cálculo Numérico", requisitos: [6], columna: 2, cuatrimestre: 2 },

    // 3er año
    { id:17, nombre: "Lógica Computacional", requisitos: [2], columna: 3, cuatrimestre: 1 },
    { id:18, nombre: "Sistemas Operativos I", requisitos: [3,5,8], columna: 3, cuatrimestre: 1 },
    { id:19, nombre: "Org. Empresarial y Negocios", requisitos: [5,8], columna: 3, cuatrimestre: 1 },
    { id:20, nombre: "Modelado OO", requisitos: [15], columna: 3, cuatrimestre: 1 },
    { id:22, nombre: "Teoría de Autómatas", requisitos: [8,17], columna: 3, cuatrimestre: 2 },
    { id:23, nombre: "Sistemas Operativos II", requisitos: [18], columna: 3, cuatrimestre: 2 },
    { id:24, nombre: "Métodos de Simulación", requisitos: [12,16], columna: 3, cuatrimestre: 2 },

    // 4to año
    { id:25, nombre: "Formulación y Proyectos", requisitos: [19], columna: 4, cuatrimestre: 1 },
    { id:26, nombre: "Calidad Software", requisitos: [20], columna: 4, cuatrimestre: 1 },
    { id:27, nombre: "Arquitectura de Redes", requisitos: [23], columna: 4, cuatrimestre: 1 },
    { id:28, nombre: "Ingeniería del Conocimiento", requisitos: [17,20], columna: 4, cuatrimestre: 1 },
    { id:29, nombre: "Arq. Computadoras Paralelas", requisitos: [23,27], columna: 4, cuatrimestre: 2 },
    { id:30, nombre: "Sistemas de Información", requisitos: [20], columna: 4, cuatrimestre: 2 },
    { id:32, nombre: "Seguridad y Auditoría", requisitos: [23], columna: 4, cuatrimestre: 2 },

    // 5to año
    { id:33, nombre: "Ingeniería Software I", requisitos: [30], columna: 5, cuatrimestre: 1 },
    { id:34, nombre: "Sistemas Inteligentes", requisitos: [9,12,16], columna: 5, cuatrimestre: 1 },
    { id:35, nombre: "Legislación, Ética y Ejercicio Profesional", requisitos: [48, 37,38,39,40,41,42,43,44,45,46,47], columna: 5, cuatrimestre: 2 }, 
    { id:36, nombre: "Ingeniería Software II", requisitos: [33], columna: 5, cuatrimestre: 2 },

    // Optativos (37 a 47)
    { id:37, nombre: "Compiladores", requisitos: [15], columna: 6, cuatrimestre: 1 },
    { id:38, nombre: "Apps Bases de Datos I", requisitos: [14], columna: 6, cuatrimestre: 1 },
    { id:39, nombre: "Apps Bases de Datos II", requisitos: [14], columna: 6, cuatrimestre: 2 },
    { id:40, nombre: "Proc. Digital Imágenes", requisitos: [15], columna: 6, cuatrimestre: 2 },
    { id:41, nombre: "Inteligencia Artificial", requisitos: [22], columna: 6, cuatrimestre: 2 },
    { id:42, nombre: "Recuperación Avanzada", requisitos: [20], columna: 6, cuatrimestre: 2 },
    { id:43, nombre: "Arq. Avanzadas Software", requisitos: [20], columna: 6, cuatrimestre: 2 },
    { id:44, nombre: "Modelado y Negocios", requisitos: [19], columna: 6, cuatrimestre: 2 },
    { id:45, nombre: "Taller Formación Prof.", requisitos: [12], columna: 6, cuatrimestre: 1 },
    { id:46, nombre: "Metodología Investigación", requisitos: [12], columna: 6, cuatrimestre: 1 },
    { id:47, nombre: "Gestión Ambiental", requisitos: [12], columna: 6, cuatrimestre: 1 },

    // Inglés
    { id:48, nombre: "Nivel suficiencia Inglés (R1)", requisitos: [], columna: 7, cuatrimestre: 1 },
    { id:49, nombre: "Nivel aptitud Inglés (R2)", requisitos: [], columna: 7, cuatrimestre: 2 }
];

let aprobados = new Set();

// Cargar desde localStorage
function cargarAprobados() {
    const data = localStorage.getItem("aprobados");
    if (data) {
        aprobados = new Set(JSON.parse(data));
    }
}

// Guardar en localStorage
function guardarAprobados() {
    localStorage.setItem("aprobados", JSON.stringify([...aprobados]));
}

function crearColumna(titulo, esOptativo = false, esIngles = false) {
    const div = document.createElement("div");
    div.classList.add("columna");
    const h2 = document.createElement("h2");
    h2.textContent = titulo;
    div.appendChild(h2);

    if (esOptativo) {
        const contador = document.createElement("div");
        contador.classList.add("contador-optativos");
        contador.textContent = "Horas optativas aprobadas: 0 / 270 hs";
        div.appendChild(contador);
    }

    return div;
}

function crearSubseccion(titulo) {
    const div = document.createElement("div");
    div.classList.add("subseccion");
    const h3 = document.createElement("h3");
    h3.textContent = titulo;
    div.appendChild(h3);
    return div;
}

function renderMalla() {
    const contenedor = document.getElementById("malla");
    contenedor.innerHTML = "";

    const titulosColumnas = [
        "1er Año", "2do Año", "3er Año",
        "4to Año", "5to Año", "Optativos", "Inglés"
    ];

    const columnas = titulosColumnas.map(titulo => {
        if (titulo === "Optativos") {
            return crearColumna(titulo, true);
        } else if (titulo === "Inglés") {
            return crearColumna(titulo, false, true);
        } else {
            const col = crearColumna(titulo);
            const sub1 = crearSubseccion("Primer Cuatrimestre");
            const sub2 = crearSubseccion("Segundo Cuatrimestre");
            col.appendChild(sub1);
            col.appendChild(sub2);
            return col;
        }
    });

    // Insertar ramos
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

        if (aprobados.has(ramo.id)) {
            div.classList.add("activo");
            div.onclick = () => toggleRamo(ramo.id);
        }

        const col = columnas[ramo.columna - 1];
        if (ramo.columna === 6 || ramo.columna === 7) {
            col.appendChild(div);
        } else {
            const subContenedor = ramo.cuatrimestre === 1
                ? col.querySelector(".subseccion:nth-child(2)")
                : col.querySelector(".subseccion:nth-child(3)");
            subContenedor.appendChild(div);
        }
    });

    // Actualizar contador optativos
    const horasOptativas = Array.from(aprobados)
        .filter(id => id >= 37 && id <= 47).length * 30;
    const contadorDiv = columnas[5].querySelector(".contador-optativos");
    contadorDiv.textContent = `Horas optativas aprobadas: ${horasOptativas} / 270 hs`;

    columnas.forEach(col => contenedor.appendChild(col));
}

function toggleRamo(id) {
    if (aprobados.has(id)) {
        aprobados.delete(id);
    } else {
        aprobados.add(id);
    }
    guardarAprobados();
    renderMalla();
}

// Al cargar la página
cargarAprobados();
renderMalla();
