const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url) /* Fetch API - faz o fetch e espera uma resposta que é uma promessa*/
    .then((response) => response.json()) /* então, a promessa recebida no fetch é convertida para JSON */
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error));   
}