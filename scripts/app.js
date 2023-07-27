let apiUrl = "https://fakestoreapi.com/products"

fetch(apiUrl).then( res => res.json()).then( json => console.log(json))