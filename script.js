import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
const btn_search = document.getElementById('btn-search-photo');
const btn_to_top = document.getElementById('btn-to-top');

let photo = []
const accessKey = '-f839JHMlc53y0wtPSS_OCwqZOHbx9j6aKBzEr7UaG8';
const bashURL = 'https://api.unsplash.com'
const headers = {
    'Authorization': `Client-ID ${accessKey}`
  };


btn_search.addEventListener('click', () => getPhoto());
async function getPhoto(){
    try{    
        const data = await axios.get(`${bashURL}/photos/?per_page=5`, {headers});
        console.log(data);

    }catch(error){
        console.log(error);
    }
}

window.addEventListener('scroll', () => {
    const section1 = document.getElementById('section-1');
    const wsy = window.scrollY;
    wsy > 150 ? btn_to_top.style.bottom = '50px' : btn_to_top.style.bottom = '-50px'
});

btn_to_top.addEventListener('click', () => {
    window.scrollTo(0, 0);
});