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
        const response = await fetch('http://localhost:1337/api/nosotros-pag?populate=*');
        const data = await response.json();
        console.log(data);

        // Acceso a los atributos del artículo
        const info = data.data.attributes;

        // Selecciona los elementos existentes
        const titleElement = document.getElementById("headerTitle");
        const footerElement = document.getElementById("footerTitle");
        const carouselImageElement1 = document.getElementById("carImg1");
        const carouselImageElement2 = document.getElementById("carImg2");
        const carouselImageElement3 = document.getElementById("carImg3");
        const carouselImageElement4 = document.getElementById("carImg4");
        const carouselImageElement5 = document.getElementById("carImg5");
        const carouselImageElement6 = document.getElementById("carImg6");
        const carouselImageElement7 = document.getElementById("carImg7");
        const carouselImageElement8 = document.getElementById("carImg8");
        const carouselImageElement9 = document.getElementById("carImg9");
        const carouselImageElement10 = document.getElementById("carImg10");
        const coverVideoElement = document.getElementById("coverVideo");
        const sectionsContainer = document.getElementById("sectionsContainer");
        const circle = document.getElementById("circle");
        const fullImage = document.getElementById("fullImage");

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
            sectionDiv.className = 'section';

            const titleElement = document.createElement('h2');
            titleElement.textContent = section.Title;
            sectionDiv.appendChild(titleElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = section.Description;
            sectionDiv.appendChild(descriptionElement);

            sectionsContainer.appendChild(sectionDiv);
        });

        // Circle Title

        circle.textContent = info.CircleTitle;

        // Full Image

        const fullImageUrl = 'http://localhost:1337' + info.FullImage.data.attributes.url;
        fullImage.src = fullImageUrl;
        console.log(fullImageUrl);

        // swiperImages

        // LAS RUTAS SE DEBEN CONFIGURAR

        const imageUrl1 = 'http://localhost:1337' + info.Carousel.data[0].attributes.url;
        carouselImageElement1.src = imageUrl1;
        console.log(imageUrl1);

        const imageUrl2 = 'http://localhost:1337' + info.Carousel.data[1].attributes.url;
        carouselImageElement2.src = imageUrl2;
        console.log(imageUrl2);

        const imageUrl3 = 'http://localhost:1337' + info.Carousel.data[2].attributes.url;
        carouselImageElement3.src = imageUrl3;
        console.log(imageUrl3);

        const imageUrl4 = 'http://localhost:1337' + info.Carousel.data[3].attributes.url;
        carouselImageElement4.src = imageUrl4;
        console.log(imageUrl4);

        const imageUrl5 = 'http://localhost:1337' + info.Carousel.data[4].attributes.url;
        carouselImageElement5.src = imageUrl5;
        console.log(imageUrl5);

        const imageUrl6 = 'http://localhost:1337' + info.Carousel.data[0].attributes.url;
        carouselImageElement6.src = imageUrl6;
        console.log(imageUrl6);

        const imageUrl7 = 'http://localhost:1337' + info.Carousel.data[1].attributes.url;
        carouselImageElement7.src = imageUrl7;
        console.log(imageUrl7);

        const imageUrl8 = 'http://localhost:1337' + info.Carousel.data[2].attributes.url;
        carouselImageElement8.src = imageUrl8;
        console.log(imageUrl8);

        const imageUrl9 = 'http://localhost:1337' + info.Carousel.data[3].attributes.url;
        carouselImageElement9.src = imageUrl9;
        console.log(imageUrl9);

        const imageUrl10 = 'http://localhost:1337' + info.Carousel.data[4].attributes.url;
        carouselImageElement10.src = imageUrl10;
        console.log(imageUrl10);

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