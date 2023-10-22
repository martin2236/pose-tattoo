(function main() {
    document.addEventListener("DOMContentLoaded", function () {
      // Obtener el parámetro 'tab' de la URL
      const urlParams = new URLSearchParams(window.location.search);
      const tabToActivate = urlParams.get("tab");
  
      // Activar la pestaña correspondiente
      if (tabToActivate) {
        // Desactivar todas las pestañas
        const tabs = document.querySelectorAll(".tab-content");
        tabs.forEach((tab) => tab.classList.remove("current"));
  
        // Activar la pestaña deseada
        const activeTab = document.getElementById(tabToActivate);
        if (activeTab) {
          activeTab.classList.add("current");
  
          // Cambiar estilos de los botones de las pestañas
          const tabLinks = document.querySelectorAll(".tab-link");
          tabLinks.forEach((link) => {
            link.classList.remove("current"); // Eliminar el estilo activo de todos los botones
            if (link.getAttribute("data-tab") === tabToActivate) {
              link.classList.add("current"); // Agregar el estilo activo al botón de la pestaña correspondiente
            }
          });
        }
      }
    });
  
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");
  
    // Agregar un evento clic a cada pestaña
    tabLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Ocultar todo el contenido de las pestañas
        tabContents.forEach((content) => {
          content.classList.remove("current");
        });
  
        // Mostrar el contenido de la pestaña seleccionada
        const tabId = link.getAttribute("data-tab");
        const selectedTab = document.getElementById(tabId);
        selectedTab.classList.add("current");
  
        // Cambiar estilos de los botones de las pestañas
        tabLinks.forEach((tabLink) => {
          tabLink.classList.remove("current"); // Eliminar el estilo activo de todos los botones
        });
        link.classList.add("current"); // Agregar el estilo activo al botón de la pestaña seleccionada
      });
    });
  })();
  