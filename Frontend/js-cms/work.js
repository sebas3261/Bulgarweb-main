// Asigna el evento de clic al botón para alternar el menú
document.getElementById("menuButton").addEventListener("click", () => {
  const menu = document.querySelector(".menu"); // Cambiar a querySelector para usar clase
  menu.classList.toggle("active"); // Cambiar "hidden" por "active"
});

document.getElementById("toggle-menu").addEventListener("click", () => {
  const menu = document.querySelector(".menu"); // Cambiar a querySelector 
  menu.classList.toggle("active"); // Cambiar "hidden" por "active"
});


// Cerrar el menú si se hace clic fuera de él o fuera del botón
document.addEventListener("click", (event) => {
  const menu = document.querySelector(".menu");
  const menuButton = document.getElementById("menuButton");

  // Si se hace clic fuera del menú o del botón, lo cierra
  if (!menu.contains(event.target) && event.target !== menuButton) {
    menu.classList.remove("active");
  }
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
