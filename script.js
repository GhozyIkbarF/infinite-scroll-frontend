import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
const btn_search = document.getElementById('btn-search-photo');

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