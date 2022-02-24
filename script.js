// scroll navbar
window.addEventListener("scroll",()=>{
    const header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0)
})

const products = [
    {
        name : "mascara",
        tag : "lash lift",
        price : "20",
        inCard : 0
    },
    {
        name : "lip Stick",
        tag : "mac",
        price : "13",
        inCard : 0
    },
    {
        name : "Eye Liner",
        tag : "black Eyeliner",
        price : "16",
        inCard : 0
    }
]

