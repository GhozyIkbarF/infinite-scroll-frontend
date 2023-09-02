import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

const accessKey = "-f839JHMlc53y0wtPSS_OCwqZOHbx9j6aKBzEr7UaG8";
const bashURL = "https://api.unsplash.com";
const headers = {
  Authorization: `Client-ID ${accessKey}`,
};

const btn_to_top = document.getElementById("btn-to-top");
const btn_search = document.getElementById("btn-search-photo");
const imagesContainer = document.getElementById("imagesContainer");
let currentPage = 1;

btn_search.addEventListener("click", () => getPhoto());

async function getPhoto() {
  try {
    const res = await axios.get(
      `${bashURL}/photos/?page=${currentPage}&per_page=5`,
      { headers }
    );
    console.log(res.data);
    imageElement(res.data);
    currentPage++;
  } catch (error) {
    console.log(error);
  }
}

function imageElement(images) {
  images?.forEach((element) => {
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = element.urls.regular;
    imagesContainer.append(image);
  });
}

window.addEventListener("scroll", () => {
  const wsy = window.scrollY;
  wsy > 150
    ? (btn_to_top.style.bottom = "50px")
    : (btn_to_top.style.bottom = "-50px");
});

btn_to_top.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
