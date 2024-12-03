async function fetchAtt() {
  try {
    const response = await fetch(
      "http://localhost:1337/api/servicios-pag?populate=*"
    );
    const data = await response.json();
    console.log(data);

    // Acceso a los atributos del artículo
    const info = data.data.attributes;

    // Selecciona los elementos existentes
    const titleElement = document.getElementById("headerTitle");
    const footerElement = document.getElementById("footerTitle");
    const sectionsContainer = document.getElementById("sections-container");
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
      const spanElement = document.createElement("span");
      spanElement.textContent = char;
      titleElement.appendChild(spanElement);
    }

    // Cover

    const videoUrl = "http://localhost:1337" + info.Cover.data.attributes.url;
    coverVideoElement.src = videoUrl;
    console.log(videoUrl);

    // Secciones servicios

    info.Section.forEach((section) => {
      const sectionDiv = document.createElement("div");
      sectionDiv.className = "section";

      const contentDiv = document.createElement("div");
      contentDiv.className = "section-content";
      contentDiv.innerHTML = `<h2>${section.Header}</h2><p>${section.Description}</p>`;

      const imgDiv = document.createElement("div");
      imgDiv.className = "img-sect";
      const img = document.createElement("img");
      img.src = "img/avance-rapido.png";
      imgDiv.appendChild(img);

      const listDiv = document.createElement("div");
      listDiv.className = "section-list";
      const ul = document.createElement("ul");

      section.List.split("\n").forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });

      listDiv.appendChild(ul);

      sectionDiv.appendChild(contentDiv);
      sectionDiv.appendChild(imgDiv);
      sectionDiv.appendChild(listDiv);

      sectionsContainer.appendChild(sectionDiv);
    });

    // swiperImages

    // LAS RUTAS SE DEBEN CONFIGURAR

    const imageUrl1 =
      "http://localhost:1337" + info.Carousel.data[0].attributes.url;
    carouselImageElement1.src = imageUrl1;
    console.log(imageUrl1);

    const imageUrl2 =
      "http://localhost:1337" + info.Carousel.data[1].attributes.url;
    carouselImageElement2.src = imageUrl2;
    console.log(imageUrl2);

    const imageUrl3 =
      "http://localhost:1337" + info.Carousel.data[2].attributes.url;
    carouselImageElement3.src = imageUrl3;
    console.log(imageUrl3);

    const imageUrl4 =
      "http://localhost:1337" + info.Carousel.data[3].attributes.url;
    carouselImageElement4.src = imageUrl4;
    console.log(imageUrl4);

    const imageUrl5 =
      "http://localhost:1337" + info.Carousel.data[4].attributes.url;
    carouselImageElement5.src = imageUrl5;
    console.log(imageUrl5);

    const imageUrl6 =
      "http://localhost:1337" + info.Carousel.data[0].attributes.url;
    carouselImageElement6.src = imageUrl6;
    console.log(imageUrl6);

    const imageUrl7 =
      "http://localhost:1337" + info.Carousel.data[1].attributes.url;
    carouselImageElement7.src = imageUrl7;
    console.log(imageUrl7);

    const imageUrl8 =
      "http://localhost:1337" + info.Carousel.data[2].attributes.url;
    carouselImageElement8.src = imageUrl8;
    console.log(imageUrl8);

    const imageUrl9 =
      "http://localhost:1337" + info.Carousel.data[3].attributes.url;
    carouselImageElement9.src = imageUrl9;
    console.log(imageUrl9);

    const imageUrl10 =
      "http://localhost:1337" + info.Carousel.data[4].attributes.url;
    carouselImageElement10.src = imageUrl10;
    console.log(imageUrl10);

    // footerTitle
    for (let char of info.FooterText) {
      const spanElement = document.createElement("span");
      spanElement.textContent = char;
      spanElement.classList.add("last");
      footerElement.appendChild(spanElement);
    }
  } catch (error) {
    console.error("Error fetching the article:", error);
  }
}

window.onload = fetchAtt;
