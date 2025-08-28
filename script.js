const loginScreen = document.getElementById("login-screen");
const mainScreen = document.getElementById("main-screen");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const themeToggle = document.getElementById("theme-toggle");
const backBtn = document.getElementById("back-btn");
const sectionContent = document.getElementById("section-content");

let currentSection = "";

loginBtn.addEventListener("click", () => {
  loginScreen.classList.remove("active");
  mainScreen.classList.add("active");
});

logoutBtn.addEventListener("click", () => {
  mainScreen.classList.remove("active");
  loginScreen.classList.add("active");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

backBtn.addEventListener("click", () => {
  sectionContent.innerHTML = "";
  currentSection = "";
});

document.querySelectorAll(".app-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentSection = btn.dataset.section;
    if (currentSection === "projects") {
      sectionContent.innerHTML = `
        <h3>Mis Proyectos</h3>
        <div class="folder">Proyecto Matemáticas</div>
        <div class="folder">Proyecto Historia</div>
        <div class="folder">Proyecto Arte</div>
      `;
    } else if (currentSection === "calendar") {
      sectionContent.innerHTML = `
        <h3>Calendario</h3>
        <p>📅 12/08 - Entrega de tarea</p>
        <p>📅 15/08 - Presentación de proyecto</p>
      `;
    } else if (currentSection === "assistant") {
      sectionContent.innerHTML = `
        <h3>Asistente</h3>
        <p>Hola, soy tu asistente. ¿En qué puedo ayudarte?</p>
      `;
    }
  });
});
