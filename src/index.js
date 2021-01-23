let quoteDiv = document.getElementById('quotes')

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quoteDiv.innerHTML += '<p> ${quote.quote} </p>'
})


let catButton = document.getElementById('give-cat')


catButton.addEventListener("click", evt => {

    let catDiv = document.getElementById('cat-pic')

    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = '<h3>Here is a cat wishing you the best day ever🌈</h3> <img src="${cat.url}" alt="Kitty <3" />'
        });
    })
})
