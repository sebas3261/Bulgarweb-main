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

async function fetchData() {
  try {
    const response = await fetch("http://localhost:1337/api/work-page");
    const data = await response.json();

    const Subtitle = document.getElementById("subtitle");
    Subtitle.textContent = data.data.attributes.Subtitle;

    const Text1 = document.getElementById("text1");
    const Text1P = document.createElement("p");
    const processedText = data.data.attributes.Text1.split("").join(" ");
    Text1P.textContent = processedText;
    Text1.appendChild(Text1P);

    const unSplit = data.data.attributes.SplitWord;
    const long = unSplit.length;
    const half = Math.floor(long / 2);
    const firstHalf = unSplit.slice(0, half);
    const secondHalf = unSplit.slice(half);

    const Split1 = document.getElementById("split1");
    Split1.textContent = firstHalf.toUpperCase();

    const Split2 = document.getElementById("split2");
    Split2.textContent = secondHalf.toUpperCase();

    const Title1 = document.getElementById("title1");
    Title1.textContent = data.data.attributes.Title1.toUpperCase();

    const Title2 = document.getElementById("title2");
    Title2.textContent = data.data.attributes.Title2.toUpperCase();

    const Slider1 = document.getElementById("slider1");
    Slider1.textContent = data.data.attributes.Slider1.toUpperCase();
    const Slider2 = document.getElementById("slider2");
    Slider2.textContent = data.data.attributes.Slider2.toUpperCase();
    
   
    
    
    

  } catch (error) {
    console.error("Se produjo un error:", error);
  }
}

// Llamar a la función
fetchData();
