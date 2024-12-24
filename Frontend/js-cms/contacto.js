// Seleccionamos el botón de menú y el contenedor del menú
const menuButton = document.getElementById('menuButton');
const menu = document.querySelector('.menu');
const toggleText = document.querySelector('#toggle-menu span');  // Para cambiar el texto de "Close"

// Agregamos un evento de clic al botón de menú
menuButton.addEventListener('click', () => {
  menu.classList.toggle('open');  // Activa o desactiva el menú
});

toggleText.addEventListener('click', () => {
  menu.classList.toggle('open');  // Activa o desactiva el menú
});


async function fetchAtt() {
    try {
        const response = await fetch('http://localhost:1337/api/contacto-pag?populate=*');
        const data = await response.json();
        console.log(data);

        // Acceso a los atributos del artículo
        const info = data.data.attributes;

        // Selecciona los elementos existentes
        const titleElement = document.getElementById("headerTitle");
        const footerElement = document.getElementById("footerTitle");
        const coverVideoElement = document.getElementById("coverVideo");
        const descText = document.getElementById("contact-desc-h2");
        const sectionsContainer = document.getElementById("contact-info");

        // Asigna el contenido

        // headerTitle
        for (let char of info.HeaderTitle) {
            const spanElement = document.createElement('span');
            spanElement.textContent = char;
            titleElement.appendChild(spanElement);
        }

        // Cover

        const videoUrl = 'http://localhost:1337' + info.Cover.data.attributes.url;
        coverVideoElement.src = videoUrl;
        console.log(videoUrl);

        // Sections

        info.Sections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'contact-text';

            const titleElement = document.createElement('h1');
            titleElement.textContent = section.Title;
            sectionDiv.appendChild(titleElement);

            const descriptionElement = document.createElement('h2');
            descriptionElement.textContent = section.Description;
            sectionDiv.appendChild(descriptionElement);

            sectionsContainer.appendChild(sectionDiv);
        });

        // Contact desc

        descText.textContent = info.DescriptionText;


        // footerTitle
        for (let char of info.FooterText) {
            const spanElement = document.createElement('span');
            spanElement.textContent = char;
            spanElement.classList.add('last');
            footerElement.appendChild(spanElement);
        }

    } catch (error) {
        console.error('Error fetching the article:', error);
    }
}

window.onload = fetchAtt;