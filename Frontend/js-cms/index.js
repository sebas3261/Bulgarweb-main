async function fetchAtt() {
    try {
        const response = await fetch('http://localhost:1337/api/indexpage?populate=*');
        const data = await response.json();
        console.log(data);

        // Acceso a los atributos del artículo
        const info = data.data.attributes;

        // Selecciona los elementos existentes
        const titleElement = document.getElementById("headerTitle");
        const footerElement = document.getElementById("footerTitle");
        const descElement1 = document.getElementById("descriptionText1");
        const descElement2 = document.getElementById("descriptionText2");
        const servElement1 = document.getElementById("servicios1");
        const servElement2 = document.getElementById("servicios2");
        const servElement3 = document.getElementById("servicios3");
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

        // descriptionTexts
        descElement1.textContent = info.DescriptionText1;
        descElement2.textContent = info.DescriptionText2;

        // serviciosTexts
        servElement1.textContent = info.Servicios1;
        servElement2.textContent = info.Servicios2;
        servElement3.textContent = info.Servicios3;

        // swiperImages
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