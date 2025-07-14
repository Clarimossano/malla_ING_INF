const courses = [
    // id, nombre, requisitos (array de ids)
    { id: 1, name: "Introducción a la Programación", reqs: [] },
    { id: 2, name: "Álgebra Lineal", reqs: [] },
    { id: 3, name: "Organización de computadoras", reqs: [] },
    { id: 4, name: "Análisis Matemático I", reqs: [] },
    { id: 5, name: "Metodología de la Programación", reqs: [1] },
    { id: 6, name: "Análisis Matemático II", reqs: [4] },
    { id: 7, name: "Física Mecánica", reqs: [2,4] },
    { id: 8, name: "Estructura de Datos", reqs: [1] },
    { id: 9, name: "Matemática Discreta", reqs: [2] },
    { id: 10, name: "Teoría de la Información", reqs: [3] },
    { id: 11, name: "Desarrollo Sistemático de Programas", reqs: [5,8] },
    { id: 12, name: "Probabilidades y Estadística", reqs: [2,6] },
    { id: 13, name: "Electricidad y Magnetismo", reqs: [7] },
    { id: 14, name: "Bases de Datos", reqs: [5,8] },
    { id: 15, name: "Programación Concurrente", reqs: [5,8] },
    { id: 16, name: "Cálculo Numérico", reqs: [6] },
    { id: 17, name: "Lógica Computacional", reqs: [2] },
    { id: 18, name: "Sistemas Operativos I", reqs: [3,5,8] },
    { id: 19, name: "Org. Empresarial y Negocios", reqs: [5,8] },
    { id: 20, name: "Modelado Orientado a Objetos", reqs: [15] },
    { id: 21, name: "Cursos optativos 90hs", reqs: [] },
    { id: 22, name: "Teoría de Autómatas", reqs: [8,17] },
    { id: 23, name: "Sistemas Operativos II", reqs: [18] },
    { id: 24, name: "Métodos de Simulación", reqs: [12,16] },
    { id: 25, name: "Formulación y Proyectos", reqs: [19] },
    { id: 26, name: "Calidad y Testing", reqs: [20] },
    { id: 27, name: "Arquitectura de Redes", reqs: [23] },
    { id: 28, name: "Ingeniería del Conocimiento", reqs: [17,20] },
    { id: 29, name: "Arq. Computadoras Paralelas", reqs: [23,27] },
    { id: 30, name: "Sistemas de Información", reqs: [20] },
    { id: 31, name: "Cursos optativos 180hs", reqs: [] },
    { id: 32, name: "Seguridad y Auditoría", reqs: [23] },
    { id: 33, name: "Ingeniería de Software I", reqs: [30] },
    { id: 34, name: "Sistemas Inteligentes", reqs: [9,12,16] },
    { id: 35, name: "Legislación, Ética y Profesional", reqs: [] },
    { id: 36, name: "Ingeniería de Software II", reqs: [33] },
];

const state = {};
const container = document.getElementById("malla");

function createSubjects() {
    courses.forEach(course => {
        state[course.id] = { approved: false };
        const div = document.createElement("div");
        div.className = "subject";
        div.innerText = course.name;
        div.id = `course-${course.id}`;
        div.onclick = () => approveCourse(course.id);
        container.appendChild(div);
    });
    updateCourses();
}

function updateCourses() {
    courses.forEach(course => {
        const div = document.getElementById(`course-${course.id}`);
        const unlocked = course.reqs.every(req => state[req].approved);
        if (state[course.id].approved) {
            div.classList.add("approved");
            div.classList.remove("unlocked");
        } else if (unlocked) {
            div.classList.add("unlocked");
        } else {
            div.classList.remove("unlocked");
        }
    });
}

function approveCourse(id) {
    const course = courses.find(c => c.id === id);
    const canApprove = course.reqs.every(req => state[req].approved);
    if (!state[id].approved && canApprove) {
        state[id].approved = true;
        updateCourses();
    }
}

createSubjects();
