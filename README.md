# Cinephile

Cinephile es un proyecto web desarrollado en equipo como práctica de maquetación, organización ágil y trabajo colaborativo con GitHub.

El objetivo principal del proyecto fue crear una plataforma visual inspirada en un servicio de streaming de cine, con páginas responsive para escritorio y móvil, aplicando buenas prácticas de desarrollo frontend, planificación con Scrum y organización de tareas mediante Kanban.

---

## Enlace del Repositorio

[Cinephile](https://github.com/cinephile-team-1/cinephile-team-1.git)

---

## Equipo

| Nombre | Rol |
|--------|-----|
| Fabiana | Product Owner / Developer |
| Ivanna | Developer |
| Siuzanna | Scrum Master / Developer |

---

## Objetivo del proyecto

El objetivo de Cinephile fue desarrollar una interfaz web moderna, clara y responsive, centrada en una experiencia cinematográfica.

El proyecto permitió practicar:

- Trabajo en equipo
- Organización de tareas
- Uso de Git y GitHub
- Desarrollo con ramas
- Maquetación responsive
- Revisión e integración de código
- Presentación de un proyecto final

---

## Páginas desarrolladas

El proyecto incluye las siguientes páginas principales:

- **Landing Page / Movies**
- **Pricing Plans**
- **Contact Us**

Cada página fue diseñada y adaptada para funcionar correctamente tanto en versión desktop como en versión mobile.

---

## Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-0052CC?style=flat&logo=trello&logoColor=white)

---

## Herramientas de organización

### GitHub

Creamos una organización en GitHub llamada **cinephile-team-1** para centralizar el trabajo del equipo.

Utilizamos dos ramas principales:

- `main`: rama principal con la versión final y estable del proyecto.
- `dev`: rama de desarrollo donde se integraban las funcionalidades antes de pasarlas a producción.

Además, cada integrante trabajó en su propia rama de funcionalidad, realizando commits y subiendo los cambios para después integrarlos en `dev`.

**Flujo general de trabajo:**

```bash
git checkout dev
git pull origin dev
git checkout -b feature/nombre-de-la-tarea
git add .
git commit -m "Descripción de los cambios"
git push origin feature/nombre-de-la-tarea
```

Después de revisar los cambios, se integraban en la rama `dev` y, al finalizar el proyecto, se realizó el merge final hacia `main`.

---

## Metodología ágil

Durante el proyecto utilizamos una metodología inspirada en **Scrum**.

Realizamos reuniones tipo daily para revisar:

- Qué había hecho cada integrante
- Qué tareas estaban pendientes
- Qué bloqueos existían
- Qué parte del proyecto debía avanzar cada persona

La división de roles ayudó a organizar mejor el trabajo:

- **Product Owner:** visión general del producto y prioridades
- **Scrum Master:** seguimiento de tareas y coordinación del equipo
- **Developers:** desarrollo de las páginas y funcionalidades

---

## Kanban y Trello

Utilizamos **Trello** como herramienta Kanban para organizar las tareas del Sprint.

El tablero se organizó en columnas:

| Backlog | En Proceso | Review / QA | Hecho |
|---------|------------|-------------|-------|

Ejemplos de tareas:

- Configuración inicial con Vite + React + Router
- Creación de la organización en GitHub
- Creación de Header, Footer y Navbar
- Maquetación de Landing Page
- Maquetación de Pricing Plans
- Maquetación de Contact Us
- Revisión de diseño responsive
- Finalización del README profesional

---

## Historias de usuario

### Historia 1 — Ver catálogo de películas

> Como usuario, quiero acceder a una página principal atractiva para descubrir contenido cinematográfico disponible.

**Criterios de aceptación:**
- La página debe mostrar una presentación visual clara
- Debe incluir llamadas a la acción
- Debe adaptarse correctamente a mobile y desktop

### Historia 2 — Consultar planes de suscripción

> Como usuario, quiero ver diferentes planes de precios para elegir el que mejor se adapte a mis necesidades.

**Criterios de aceptación:**
- La página debe mostrar varios planes
- Cada plan debe incluir precio y características
- El diseño debe ser responsive

### Historia 3 — Contactar con la plataforma

> Como usuario, quiero poder enviar un mensaje a través de un formulario de contacto.

**Criterios de aceptación:**
- El formulario debe incluir nombre, email y mensaje
- El diseño debe ser claro y accesible
- Debe existir una versión adaptada para móvil

---

## Responsive Design

Uno de los requisitos principales del proyecto fue que la web fuera responsive. Se trabajaron versiones para:

- Pantallas de escritorio
- Pantallas móviles

Se cuidaron aspectos como adaptación de tamaños, distribución de tarjetas, navegación, espaciado, legibilidad y jerarquía visual.

---

## Mockups y diseño visual

Antes de la implementación, trabajamos con referencias visuales y mockups para definir la apariencia del proyecto, organizando la estructura de las páginas, distribución de elementos, colores principales, navegación y experiencia visual en desktop y mobile.

---

## Code Review e integración

La integración final fue realizada por **Ivanna**, quien reunió las páginas desarrolladas por el equipo y verificó que el proyecto funcionara correctamente.

Durante la revisión se comprobaron:

- Estructura de carpetas
- Componentes principales
- Navegación con React Router DOM
- Consistencia visual
- Responsive design
- Funcionamiento general de las páginas

---

## Pruebas realizadas

Realizamos pruebas manuales para verificar:

- Navegación entre páginas
- Correcta visualización en desktop y mobile
- Funcionamiento de botones y enlaces
- Coherencia visual entre páginas
- Integración de Header, Footer y Navbar
- Ausencia de errores visibles en la ejecución

---

## Instalación y ejecución

Clona el repositorio:

```bash
git clone git@github.com:cinephile-team-1/cinephile-team-1.git
```

Entra en la carpeta del proyecto:

```bash
cd nombre-del-repositorio
```

Instala las dependencias:

```bash
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre el proyecto en el navegador en:
http://localhost:5173

---
## Estructura del proyecto
```bash
cinephile-team-1/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Login.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Pricing.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── Home.scss
│   │   ├── Pricing.scss
│   │   ├── Contact.scss
│   │   ├── Header.scss
│   │   ├── Footer.scss
│   │   ├── Navbar.scss
│   │   └── Login.scss
│   ├── main.scss
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```
---

## Conclusión

El proyecto Cinephile nos permitió aplicar conocimientos técnicos y metodológicos en un entorno colaborativo. Aprendimos a trabajar con GitHub, organizar tareas con Trello, aplicar una metodología ágil tipo Scrum, realizar integraciones de código y desarrollar una interfaz responsive con una estética profesional.

Este proyecto representa una práctica completa de desarrollo frontend y trabajo en equipo.