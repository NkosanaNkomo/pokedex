// link for pokedex api
// es6 document ready function
// onclick function to actually search for info
// be able to input the users search into the api
// populate the data
// set a variable for the user input
// fetch the actual data
// async await to grab data
// prevent default info from population

$(()=>{

    $('form').on("submit", (event)=>{
        event.preventDefault()
        const userInput = $('input[type="text"]').val()
        

        console.log(userInput)
        async function getPokeData(){
            const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${userInput}`)
            // change the data to json data
            const data = await response.json()
            $('#pokeName').html(data.forms[0].name);
            console.log(data);
            $('.pokeType').html(data.forms[0].name);
            console.log(data);
            
        }
        getPokeData()

    
    })

})