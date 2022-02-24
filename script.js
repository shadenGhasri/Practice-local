// scroll navbar
window.addEventListener("scroll",()=>{
    const header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0)
})

const products = [
    {
        name : "mascara",
        image: "img/gold.jpg",
        price : "20",
        id : 1
    },
    {
        name : "lip Stick",
        image:"img/lips.jpg",
        price : "13",
        id : 2
    },
    {
        name : "Eye Liner",
        image:"img/pen.jpg",
        price : "16",
        id : 3
    }
]

const renderProducts = ()=> {
   const productDiv = document.querySelector(".container");
   productDiv.textContent = ""
}