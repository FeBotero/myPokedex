
function getPokemon(){
    
    const cls = document.getElementById("card").className
    // document.getElementById("card").classList.replace("card",cls+data.types[0].type.name)
    
    
    const pokemon = document.getElementById("pokemon").value
    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon)
    .then(response=>response.json())
    .then(data => {

        
        const nPoke = data.name
           
        document.getElementById("card").classList.replace(cls,data.types[0].type.name)
        
        document.getElementById("card").innerHTML = `
        <h3 id="name">${nPoke[0].toUpperCase()+nPoke.substring(1)}</h3>
        <h5 id="tipo">${data.types[0].type.name[0].toUpperCase()+data.types[0].type.name.substring(1)}</h5>
        
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="Pikachu" id="foto">
        
        <label for="atributos">Atributos</label>
        <ul id="atributos">
            <li>${data.stats[0].stat.name[0].toUpperCase()+data.stats[0].stat.name.substring(1)} : ${data.stats[0].base_stat}</li>
            <li>${data.stats[1].stat.name[0].toUpperCase()+data.stats[1].stat.name.substring(1)} : ${data.stats[1].base_stat}</li>
            <li>${data.stats[2].stat.name[0].toUpperCase()+data.stats[2].stat.name.substring(1)} : ${data.stats[2].base_stat}</li>
            <li>${data.stats[5].stat.name[0].toUpperCase()+data.stats[5].stat.name.substring(1)} : ${data.stats[5].base_stat}</li>
        </ul>`
        
    },
    
    
    )
    .catch(error =>alert("Pokemon não encontrado, favor verificar nome do pokemon.\n\nErro: "+error.message))
}

