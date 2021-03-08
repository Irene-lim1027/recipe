const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search-result');
const container = document.querySelector('.container');
let search ='';
const APP_ID = '83e22c62';
const APP_KEY = '1219cdf9a803c6515a36c2fe3722e7aa';



searchForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    search = event.target.querySelector('input').value;
   fetchAPI();

});
async function fetchAPI(){
    const BASE_URL =`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&to=25`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    generateHTML(data.hits);
    
}

function generateHTML(result){
    let generatedHTML = '';
    result.map(result => {
        generatedHTML += `
         <div class="item">
            <img src="${result.recipe.image}"/>
            <div class="recipe-container">
              <h3 class="recipe-title">${result.recipe.label}</h3>
              <a href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
          </div>
        `
    })
    searchResult.innerHTML =generatedHTML;
}