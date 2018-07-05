const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(data => data.json())
    .then(data => cities.push(...data));


function getMatches(inputText){
    return cities.filter( place => {
        
        const regEx = new RegExp(inputText,'gi');
        return place.city.match(regEx) ||place.state.match(regEx);
    });
}

function displayMatches(){
    let matchesCity = getMatches(this.value);
    let html = matchesCity.map( place =>{
        let regEx = new RegExp(this.value,'gi');
        let cityName = place.city.replace(regEx,`<span class="hl">${this.value}</span>`);
        let stateName = place.state.replace(regEx,`<span class="hl">${this.value}</span>`);
        return `<li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
        <li>`;
    }).join('');
    cityList.innerHTML = html;
}


const inputSearch = document.querySelector(".search");
const cityList = document.querySelector(".suggestions");
inputSearch.addEventListener('change',displayMatches);
inputSearch.addEventListener('keyup',displayMatches);