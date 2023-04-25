const url1 ="https://fakestoreapi.com/products"
const url2 ="https://fakestoreapi.com/products/1"
const url3 ="https://restcountries.com/v3.1/all"

fetch(url1)
.then((response)=> response.json())
.then((data) => {
    console.log(data)
    
})
.catch ((error) =>
    console.log(error)
)

axios.get(url2)
      .then((response)=>console.log(response.data))
      .catch((error)=> console.log(error))