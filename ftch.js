function aplicarConfiguracion(config) {
  document.querySelector(".navbar-brand.d-flex.align-items-center.m-1.p-0.aabtn").innerHTML = config.title;
  document.querySelector(".page-header-headings").innerHTML = `<h1>${config.header}</h1>`;
  document.querySelector(".usertext.mr-1").innerHTML = config.username;
  document.querySelector(".userinitials.size-35").innerHTML = config.initials;
  document.getElementById("instance-4-header").innerHTML = config.courseHeader;

  var userInitials = document.querySelector(".userinitials");
  var img = document.createElement("img");
  img.src = config.profileImage;
  img.alt = userInitials.innerHTML;
  img.width = 35;
  img.height = 35;
  img.style.borderRadius = "50%";
  userInitials.innerHTML = "";
  userInitials.appendChild(img);
}

async function obtenerConfiguracion() {
  try {
    const response = await fetch('URL_DEL_SERVIDOR');
    if (!response.ok) {
      throw new Error('Error al obtener la configuración');
    }
    const config = await response.json();
    aplicarConfiguracion(config);
  } catch (error) {
    console.error('Ha ocurrido un error:', error);
  }
}

// Llamar a la función para obtener y aplicar la configuración
obtenerConfiguracion();
