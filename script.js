const btn_to_top = document.getElementById("btn-to-top");
const btn_search = document.getElementById("btn-search-photo");
const imagesContainer = document.getElementById("imagesContainer");
let currentPage = 1;
let isLoaded = false;

btn_search.addEventListener("click", () => getPhoto());
btn_to_top.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  const wsy = window.scrollY;
  wsy > 150
  ? (btn_to_top.style.bottom = "50px")
  : (btn_to_top.style.bottom = "-70px");
  
  if (!isLoaded && ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-200)) getPhoto() 
});

const bashURL = "https://infinite-scroll-backend.vercel.app";
async function getPhoto() {
  try {
    isLoaded = true;
    const response = await fetch(
      `${bashURL}/${currentPage}`, {
        method: 'GET',
      }
    );
    const photo = await response.json();
    imageElement(photo);
  } catch (error) {
    throw error;
  }finally {
    isLoaded = false;
  }
}

function imageElement(images) {
  images?.forEach((element) => {
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = element.urls.regular;
    imagesContainer.append(image);
  });
  currentPage++;
}

