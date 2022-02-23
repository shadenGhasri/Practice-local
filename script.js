window.addEventListener("scroll",()=>{
    const header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0)
})

const addIcons = document.querySelectorAll(".add-icon")

let products = [
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

for (let addIcon of addIcons) {
    addIcon.addEventListener("click",()=>{
        cardsNumbers()
    })
}

// baraye inke ba refresh tedade sabad napare
function onLoadcardNumbers(){
    let productNumbers = localStorage.getItem("cardsNumbers");
    if(productNumbers){
        document.querySelector(".basket span").textContent = productNumbers
    }   
}

function cardsNumbers(){
    // baraye inke ba refresh etelaat napare az local browser bahre mijueim
    let productNumbers = localStorage.getItem("cardsNumbers")
    // khate bala baes mishe harbar click to sabt kone amma addadi k mide stringe va bayad number beshe
    productNumbers = parseInt(productNumbers)
    if(productNumbers){
        localStorage.setItem("cardsNumbers",productNumbers + 1)
        document.querySelector(".basket span").textContent = productNumbers + 1
    }else{
        localStorage.setItem("cardsNumbers",1)
        document.querySelector(".basket span").textContent = 1
    }
}
onLoadcardNumbers()