const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            const pokePhoto = document.getElementById("pokeImg");
                        pokePhoto.src = "img/error.gif"
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);

            const radioButtons = document.querySelectorAll('input[name="shiny"]');
            let selectedSize
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    if(selectedSize =="base")
                    {
                        let pokeImg = data.sprites.other.home.front_default;

                        const pokePhoto = document.getElementById("pokeImg");
                        pokePhoto.src = pokeImg; 
                    }
                    if (selectedSize =="shiny"){
                        let pokeImg = data.sprites.front_shiny;

                        const pokePhoto = document.getElementById("pokeImg");
                        pokePhoto.src = pokeImg; 
                    }
                    break;
                }
            }
            
            document.getElementById("nombre").innerHTML= data.name;
            document.getElementById("numero").innerHTML= data.id;
            document.getElementById("peso").innerHTML= data.weight;

            document.getElementById("altura").innerHTML= data.height;

            document.getElementById("exp").innerHTML= data.base_experience;


            for (let i = 0; i < Object.values(data.stats).length; i++){

                let stats = Object.values(data.stats[i]);
                let pokestats = document.getElementById("stats_"+i);
                pokestats.innerHTML = stats[0];
            }

            let pokelength=Object.values(data.moves).length
            let pokestop=0;

            if ( pokelength >= 4 ){
                pokestop=4;
            }else{pokestop=pokelength;}

            for (let i = 0; i < pokestop; i++){
            let pokemov= Object(data.moves[i].move.name);
            console.log(pokemov)
            pokemovi = document.getElementById("mov_"+i);
            pokemovi.innerHTML = pokemov;
            }
        
            for (let i = 0; i < Object.values(data.types).length; i++){
            let poketipo= Object(data.types[i].type.name);
            
            const pokeima = document.getElementById("pokeImg_"+i);
            
                if (poketipo == 'normal'){
                    pokeima.src = "tipos/1.png"
                }
                if (poketipo =='fighting'){
                    pokeima.src = "tipos/2.png"
                    }
                if (poketipo =='flying'){
                    pokeima.src = "tipos/3.png"
                    }

                if (poketipo =='poison'){
                    pokeima.src = "tipos/4.png"
                    }
                if (poketipo =='ground'){
                    pokeima.src = "tipos/5.png"
                    }
                if (poketipo =='rock'){
                    pokeima.src = "tipos/6.png"
                    }
                if (poketipo =='bug'){
                    pokeima.src = "tipos/7.png"
                    }
                if (poketipo =='ghost'){
                    pokeima.src = "tipos/8.png"
                    }    
                if (poketipo =='steel'){
                    pokeima.src = "tipos/9.png"
                    }
                if (poketipo =='fire'){
                    pokeima.src = "tipos/10.png"
                    }
                if (poketipo =='water'){
                    pokeima.src = "tipos/11.png"
                    }
                if (poketipo =='grass'){
                    pokeima.src = "tipos/12.png"
                    }
                if (poketipo =='electric'){
                    pokeima.src = "tipos/13.png"
                    }
                if (poketipo =='psychic'){
                    pokeima.src = "tipos/14.png"
                    }
                if (poketipo =='ice'){
                    pokeima.src = "tipos/15.png"
                    }
                if (poketipo =='dragon'){
                    pokeima.src = "tipos/16.png"
                    }
                if (poketipo =='dark'){
                    pokeima.src = "tipos/17.png"
                    }
                if (poketipo =='fairy'){
                    pokeima.src = "tipos/18.png"
                    }
            }
        }
    });
}

const pokemas = () => {

    var Myelement = document.getElementById("pokeName");
    var Myelement2 = document.getElementById("numero");
    var mass=Number(Myelement2.innerHTML) +1

  
    console.log(Myelement2.innerHTML)
    console.log(mass)
    
   
    Myelement.value = mass;
    console.log(Myelement.value);
    fetchPokemon(); 


}

const pokemenos = () => {

    var Myelement = document.getElementById("pokeName");
    var Myelement2 = document.getElementById("numero");
    var mass=Number(Myelement2.innerHTML) -1

  
    console.log(Myelement2.innerHTML)
    console.log(mass)
    
   
    Myelement.value = mass;
    console.log(Myelement.value);
    fetchPokemon(); 


}


