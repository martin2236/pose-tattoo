(function main(){
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Agrega un evento clic a cada pestaña
    tabLinks.forEach((link) => {
        link.addEventListener('click', () => {
            // Oculta todo el contenido de las pestañas
            tabContents.forEach((content) => {
                content.classList.remove('current');
            });
    
            // Muestra el contenido de la pestaña seleccionada
            const tabId = link.getAttribute('data-tab');
            const selectedTab = document.getElementById(tabId);
            selectedTab.classList.add('current');
    
            // Resalta la pestaña seleccionada
            tabLinks.forEach((tabLink) => {
                tabLink.classList.remove('current');
            });
            link.classList.add('current');
        });
    });
})()