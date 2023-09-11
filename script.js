const buttonToTop = document.getElementById("buttonToTop");
const buttonSearch = document.getElementById("search");
const imagesContainer = document.getElementById("imagesContainer");
let currentPage = 1;
let isLoaded = false;

buttonSearch.addEventListener("click", () => getPhoto());
buttonToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  scrollY > 150
    ? (buttonToTop.style.bottom = "50px")
    : (buttonToTop.style.bottom = "-70px");

  if (
    !isLoaded &&
    window.innerHeight + scrollY >= document.body.offsetHeight - 200
  )
    getPhoto();
});

const bashURL = "http://localhost:5000";
async function getPhoto() {
  try {
    isLoaded = true;
    const response = await fetch(`${bashURL}/${currentPage}`, {
      method: "GET",
    });
    const photo = await response.json();
    imageElement(photo);
  } catch (error) {
    throw error;
  } finally {
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
