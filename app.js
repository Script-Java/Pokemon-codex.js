let errorBox = $(".error").hide()
let errorMsg = document.getElementById("errorInfo")


window.onload = function() {
    let pokimonArr = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
    let randomNum = Math.floor(Math.random()*pokimonArr.length)
    let randomPoki = pokimonArr[randomNum].toLowerCase()
    getPokemonData(randomPoki)
}

async function getPokemonData(pokimon){
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimon}`)
const data = await response.json()
console.log(data)      

nameEl = document.getElementById("pokemonName").innerHTML = data.name
pokeImage = document.getElementById("pokemonImage").setAttribute("src",data.sprites.other.dream_world.front_default)
pokeId = document.getElementById("pokeId").innerHTML = `ID : ${data.id}`
pokeHeight = document.getElementById("pokeHeight").innerHTML = `Height : ${data.height}ft`
pokeWeight = document.getElementById("pokeWeight").innerHTML = `Weight : ${data.weight}lb`
pokeType = document.getElementById("pokeType").innerHTML = `Type : ${data.types[0].type.name}`
pokeHp = document.getElementById("pokeHp").innerHTML = `Hp : ${data.stats[0].base_stat} / ${data.stats[0].base_stat}`
pokeAttack = document.getElementById("pokeAttack").innerHTML = `Attack : ${data.stats[1].base_stat} Dmg`
 
}

let searchBtn = document.getElementById("submitButton")
let userInput = document.getElementById("userInput")

searchBtn.addEventListener('click', ()=> {
    let pokimon = userInput.value.toLowerCase()

    async function catchError() {
        try {
            await getPokemonData(pokimon)
            console.log(pokimon)
            errorBox.hide()
        }catch (err) {

            errorBox.show()
            errorMsg.innerText = `Error : ${err}`
            
        }
    
    }
    catchError()
})





