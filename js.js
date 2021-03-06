// add product
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

for(let i=0 ; i < addIcons.length ; i++ ){
    addIcons[i].addEventListener("click",()=> {
        cardsNumbers(products[i])
    })
}


// baraye inke ba refresh tedade sabad napare
function onLoadcardNumbers(){
    let productNumbers = localStorage.getItem("cardsNumbers");
    if(productNumbers){
        document.querySelector(".basket span").textContent = productNumbers
    }   
}

function cardsNumbers(product){
   
    // baraye inke ba refresh etelaat napare az local browser bahre mijueim
    let productNumbers = localStorage.getItem("cardsNumbers")
    // khate bala baes mishe harbar click ro sabt kone amma addadi k mide stringe va bayad number beshe
    productNumbers = parseInt(productNumbers)
    if(productNumbers){
        localStorage.setItem("cardsNumbers",productNumbers + 1)
        document.querySelector(".basket span").textContent = productNumbers + 1
    }else{
        localStorage.setItem("cardsNumbers",1)
        document.querySelector(".basket span").textContent = 1
    }
    setItems(product);
}

function setItems(product){
    let cardItems = localStorage.getItem("productsInCard")
    cardItems = JSON.parse(cardItems)
    if(cardItems != null){
        if(cardItems[product.tag] == undefined){
            cardItems={
                ...cardItems,
            [product.tag]: product
            }
        }
        cardItems[product.tag].inCard += 1
    }else{
        product.inCard = 1;
        cardItems = {
            [product.tag] : product
        }
    }
   
    
    localStorage.setItem("productsInCard", JSON.stringify(cardItems))
   
}


onLoadcardNumbers()