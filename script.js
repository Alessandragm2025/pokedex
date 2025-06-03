//VARIAVEIS GLOBAIS
const pokemonImage = document.querySelector(".pokemon__image");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonName = document.querySelector(".pokemon__name");
const form = document.querySelector(".form"); 
const input = document.querySelector(".input__search"); 
const buttonPrev = document.querySelector(".btn-prev"); 
const buttonNext = document.querySelector(".btn-next"); 


//captura as informações da Pokeapi
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status=== 200) {

        

        const data = await APIResponse.json();
        
        return data;
        
    } else {
        console.log("error de conexão com a API");
        
    }
};

//RENDERIZAR POKEMON 
const renderPokemon = async(pokemon) => {

    const data = await fetchPokemon(pokemon);

    //condição se tiver algo em data 
    if (data) {
        console.log("conectado com a API"); 
        pokemonNumber.innerHTML = data.id;
        pokemonName.innerHTML = data.name;
        pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        
    } else {
       
    }

    console.log(data);

};

renderPokemon(19); 