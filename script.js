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
    { id:22, nombre: "Teoría de Autómatas", req
