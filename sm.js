// Cambiar el título de la página
document.querySelector(
  ".navbar-brand.d-flex.align-items-center.m-1.p-0.aabtn",
).innerHTML = "Hey! Que tal?";

// Cambiar el encabezado principal
document.querySelector(".page-header-headings").innerHTML =
  "<h1>El teu tauler de control ultra personal.</h1>";

// Cambiar el nombre de usuario
document.querySelector(".usertext.mr-1").innerHTML = "ChatGPT OpenAI";

// Cambiar las iniciales del usuario
document.querySelector(".userinitials.size-35").innerHTML = "CA";

// Cambiar el texto de un elemento con el ID 'instance-4-header'
document.getElementById("instance-4-header").innerHTML = "Els meus cursos";

// Agregar una imagen de perfil personalizada
var userInitials = document.querySelector(".userinitials");
var img = document.createElement("img");

img.src =
  "https://lh3.googleusercontent.com/ogw/AKPQZvx1skmtqQXuhsZ5oxGtorMGS4rFRlcTQVeL2XCxTQ=s32-c-mo";
img.alt = userInitials.innerHTML;
img.width = 35;
img.height = 35;
img.style.borderRadius = "50%";

userInitials.innerHTML = "";
userInitials.appendChild(img);
