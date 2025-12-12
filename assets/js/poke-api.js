const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url) /* Fetch API - faz o fetch e espera uma resposta que é uma promessa*/
    .then((response) => response.json()) /* então, a promessa recebida no fetch é convertida para JSON */
    .then((jsonBody) => jsonBody.results)/* necessário para descartar outras informações e ficar só com o corpo da resposta*/
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))/*map da lista dos pokemons, para extrair os detalhes dos pokemons que precisam de outra chamada de url*/
    .then((detailRequests) => Promise.all(detailRequests))/* promise.all aguarda até que tenha todas as respostas da lista para retornar*/
    .then((pokemonsDetails) => pokemonsDetails)
       
}

