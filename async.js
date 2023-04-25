const url1 ="https://fakestoreapi.com/products"
const url2 ="https://fakestoreapi.com/products/1"
const url3 ="https://restcountries.com/v3.1/all"

fetch(url1)
.then((response)=> response.json())
.then((data) => {
    console.log(data)
    const div = document.getElementById('ptag');
    data.map((element)=> {
    
        const paragragh= document.createElement('p')
    paragragh.innerHTML=element.category
    div.appendChild(paragragh )
    })
    
    
})
.catch ((error) =>
    console.log(error)
)

axios.get(url2)
      .then((response)=>console.log(response.data))
      .catch((error)=> console.log(error)) 
    


 async function testresult (){
      try {
        const response = await fetch(url1)
        const data =await response.json()
         
    const div = document.getElementById('ptag');
    data.map((element) =>{
    const paragragh= document.createElement('p')
    paragragh.innerHTML=element.description
    div.appendChild(paragragh )
})

      } catch (error) {
        console.log(error)
      }

    }
    
    testresult()