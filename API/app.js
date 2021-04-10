// API Application Programming Interface

/* an interface between two applications allow interactions between them without the use of less abstract language

-two types of APIs: 
-1. browser APIs: built into the browser and able to expose data from browser and environment (ex DOM API allowing us to style page, make popup windows appear, etc)
-2. third party APIs: require retrieval of their code fomr the web such as GoogleMaps API
-also object based - have containers for the data (JSON format)

//HTTP requests: set of methods; REST : representation state transfer; architectural style for stateless standard of communication 
-GET - retrieves resources using an id
_POST - creates a new resource using an id
_PUT - updates a resource using an id
_DELETE - removes specific resource using an id

//when we send the http request, we send one of those 4 to the link and we get a response in a JSON format. All of these reach an endpoint. 
//an endpoint is a URL that a website uses to communicate with the server*/

let cardImg = document.querySelector("body > div > div > div.card-img > img") // needs to be div DOT card because it's the class, that's the path it's taking
console.log(cardImg)
let name = document.querySelector(".name")

let ability = document.querySelector(".ability")

let weight = document.querySelector("body > div > div > div.card-body > div.paragraph > p > em > strong")


let generateBtn = document.querySelector(".submit-btn")

generateBtn.addEventListener("click", (e) => {
    e.preventDefault()

let id = document.querySelector(".search-input").value;
    console.log(id)

//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //this will send a request to the endpoint and THEN the response 
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         name.innerText = data.name
//        cardImg.src = data.sprites.front_shiny
//        ability.innerText = data.abilities[0].ability.name
//        weight.innerText = data.weight
//     })
// })

async function getPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    name.innerText = data.name
       cardImg.src = data.sprites.front_shiny
       ability.innerText = data.abilities[0].ability.name
       weight.innerText = data.weight
}

getPokemon();

})