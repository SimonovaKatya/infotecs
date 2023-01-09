// import axios from "axios";

let popUpPanel = document.querySelector('.popUpPanel')
let objects = document.querySelectorAll('.object')

for (const object of objects) {
    object.addEventListener('mouseover', () => {
        popUpPanel.style.display = "block"
    })
    object.addEventListener('mouseout', () => {
        popUpPanel.style.display = "none"
    })

}

async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)
}

// async function fetchPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(responce => responce.json()).then(json => console.log(json))
//     console.log(response.data)
// }