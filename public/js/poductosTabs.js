const organizarDatos = (items, assets) =>{
    let itemsOrganizados = items.map( (item) => {
        let imagen = assets.find((asset) => asset.sys.id === item.fields.foto.sys.id);
        return {...item,imagen}
    })
    return itemsOrganizados; 
 } 

const getInfo = async() =>{
    let res = await fetch('https://cdn.contentful.com/spaces/dq87mr462mv8/environments/master/entries?access_token=SKuUJoKsvmG_zuRkicdIBzIsnsBShV2677CDCe6go3A')
    let data = await res.json();
    let assets = data.includes.Asset
    let items =  data.items
    const itemsOrganizados = organizarDatos(items, assets);
    return itemsOrganizados;
  }

(async function main() {
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

   const items = await getInfo();
   const tattoos = items.filter(item => item.fields.tipo == 'tattoo');
   const diseños = items.filter(item => item.fields.tipo == 'diseño');
   const cuadros = items.filter(item => item.fields.tipo == 'cuadro');

   const tattoosDiv = document.getElementById('tattooRow');

        const tattooDivs = tattoos.map(tattoo => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'col-md-6', 'mt-4');
        div.innerHTML = `
            <img src="${tattoo.imagen.fields.file.url}" alt="${tattoo.imagen.fields.title}" class="img-fluid">
        `;
        return div;
        });

        tattoosDiv.innerHTML = '';

        tattooDivs.forEach(tattooDiv => {
        tattoosDiv.appendChild(tattooDiv);
        });
            //DISEÑOS

        const diseñosDiv = document.getElementById('designsRow');

        const diseñoDivs = diseños.map(diseño => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'col-md-6', 'mt-4');
        div.innerHTML = `
            <img src="${diseño.imagen.fields.file.url}" alt="${diseño.imagen.fields.title}" class="img-fluid">
        `;
        return div;
        });

        diseñosDiv.innerHTML = '';

        diseñoDivs.forEach(diseñoDiv => {
        diseñosDiv.appendChild(diseñoDiv);
        });

        //CUADROS

        const cuadrosDiv = document.getElementById('paintingsRow');

        const cuadroDivs = cuadros.map(cuadro => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'col-md-6', 'mt-4');
        div.innerHTML = `
            <img src="${cuadro.imagen.fields.file.url}" alt="${cuadro.imagen.fields.title}" class="img-fluid">
        `;
        return div;
        });

        cuadrosDiv.innerHTML = '';

        cuadroDivs.forEach(cuadroDiv => {
        cuadrosDiv.appendChild(cuadroDiv);
        });

  })();
  
 