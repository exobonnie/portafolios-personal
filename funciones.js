
const DatosPortafolio = {
    "ingeniero": "Jorge Rodríguez",
    "titulo": "Especialista TI & Desarrollador",
    "sobreMi": "Cuento con 3 años de estudios universitarios y sólida experiencia laboral en áreas de TI.",
    "cursos": [
        { "codigo": "CCNA-1", "nombre": "Introducción a las Redes" },
        { "codigo": "PY-01", "nombre": "Fundamentos de Python 1" },
        { "codigo": "CCNA-2", "nombre": "Fundamentos de Conmutación, Enrutamiento y Redes" },
        { "codigo": "LNX-01", "nombre": "Linux Unhatched" },
        { "codigo": "EMP-01", "nombre": "Descubriendo el Emprendimiento" }
    ],
    "contacto": {
        "telefono": "+504 9409-0398",
        "correos": ["jjmart344@icloud.com", "jjmart344@gmail.com"]
    }
};

class PortafolioUI {
    datos = null;
    tarjetas = [];

    constructor(datos) {
        if (!datos) {
            throw new Error("Se requieren datos para inicializar el portafolio.");
        }
        this.datos = datos;
        this.init();
    }

    init() {
        this.configurarEfectoElevar();
        this.configurarScrollNavegacion();
    }

    
    configurarEfectoElevar() {
        this.tarjetas = document.querySelectorAll('.course-card, .contact-card, .about-card');

        this.tarjetas.forEach((tarjeta) => {
            tarjeta.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

            tarjeta.addEventListener("mouseenter", () => {
                tarjeta.style.transform = "translateY(-8px)";
                tarjeta.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.5)";
            });

            tarjeta.addEventListener("mouseleave", () => {
                tarjeta.style.transform = "translateY(0)";
                tarjeta.style.boxShadow = "none";
            });
        });
    }

   
    configurarScrollNavegacion() {
        const enlaces = document.querySelectorAll('.nav-links a');

        enlaces.forEach((enlace) => {
            enlace.addEventListener("click", (e) => {
                const targetId = enlace.getAttribute("href");
                if (targetId.startsWith("#")) {
                    e.preventDefault();
                    const destino = document.querySelector(targetId);
                    if (destino) {
                        destino.scrollIntoView({ behavior: "smooth" });
                    }
                }
            });
        });
    }
}


document.addEventListener("DOMContentLoaded", () => {
    new PortafolioUI(DatosPortafolio);
});