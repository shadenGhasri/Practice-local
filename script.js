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

let card = {
    items : [],
    total : 0
}

const renderProducts = ()=> {
   const productDiv = document.querySelector(".container");
   
   products.forEach((item,index)=>{

    const cardDiv1 = document.createElement("div")
    cardDiv1.classList.add("card")
    cardDiv1.style.width = "18rem"
    productDiv.append(cardDiv1);

    const cardImg = document.createElement("img")
    cardImg.classList.add("card-img" ,"card-img-top")
    cardImg.src =   `${item.image}`
    cardDiv1.appendChild(cardImg)

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    cardDiv1.appendChild(cardBody)

    const h5 = document.createElement("h5")
    h5.classList.add("card-title")
    h5.textContent =    `${item.name}`
    cardBody.appendChild(h5)

    const span = document.createElement("span")
    span.textContent =  `$${item.price}`
    cardBody.appendChild(span)

    const containerIcon = document.createElement("div")
    cardBody.appendChild(containerIcon)

    const a1 = document.createElement("a")
    a1.classList.add("add-icon")
    a1.href = ""
    const i1 = document.createElement("i")
    i1.classList.add("bi","bi-cart-plus")
    a1.appendChild(i1)
    cardBody.appendChild(a1)

    const a2 = document.createElement("a")
    a2.classList.add("add-icon")
    a2.href = ""
    const i2 = document.createElement("i")
    i2.classList.add("bi","bi-heart")
    a2.appendChild(i2)
    cardBody.appendChild(a2)

    containerIcon.append(a1,a2)

    // const getIcons = document.querySelectorAll(".bi-cart-plus")
    // for(let icon of getIcons){
    //     icon.addEventListener("click", addToCard(index))
    // }
    

   })

}

// const renderCardItems = ()=> {
//     const cardDiv = document.querySelector(".card__items");
//     const cardItemsText1 = document.querySelector(".card__items-text")
//     // cardDiv.innerHTML = ""
//     const totalPriceEl = document.querySelector(".card__total-price")
//     let totalPrice = 0

//     if(card.items.length === 0){
//         cardItemsText1.textContent =   `Your basket is empty`
//     }

//     card.items.forEach(item =>{
//         totalPrice += item.total

//         const cardItemDiv = document.createElement("div")
//         cardItemDiv.classList.add("card__item")
//         cardDiv.append(cardItemDiv)

//         const divCol1 = document.createElement("div")
//         divCol1.classList.add("col-md-4")
//         cardItemDiv.appendChild(divCol1)

//         const aRemove = document.createElement("a")
//         aRemove.href = ""
//         const iRemove = document.createElement("i")
//         iRemove.classList.add("bi","bi-file-earmark-x")
//         aRemove.appendChild(iRemove)
//         divCol1.appendChild(aRemove)

//         const divCol2 = document.createElement("div")
//         divCol2.classList.add("col-md-4")
//         cardItemDiv.appendChild(divCol2)
//         const qtyDiv = document.createElement("div")
//         qtyDiv.classList.add("qty")
//         qtyDiv.textContent =    `${item.qty}`
//         divCol2.appendChild(qtyDiv)

//         const divCol3 = document.createElement("div")
//         divCol3.classList.add("col-md-4")
//         cardItemDiv.appendChild(divCol3)
//         const h3ForDiv = document.createElement("h3")
//         h3ForDiv.classList.add("card__item-title")
//         h3ForDiv.textContent =  `${item.name}`  
//         divCol3.appendChild(h3ForDiv)



//     })
//     totalPriceEl.textContent =  `total: $${totalPrice}`
   
// }

// const addToCard = (productIndex) =>{
//     const product = products[productIndex]
    
//     let existingProduct = false
//     let newCardItems = card.items.reduce((state,item)=>{
//         if (item.name === product.name){
//             existingProduct = true
//             const newItem = {
//                 ...item ,
//                 qty : item.qty + 1 ,
//                 total : (item.qty + 1) * item.price
//             }
//             return [...state , newItem]
//         }
//         return [...state , item]
//     } , [])
//     if(!existingProduct){
//         newCardItems.push(
//             {
//                 ...product,
//                 qty:1,
//                 total:product.price
//             }
//         )
//     }
//     card = {
//         ...card,
//         items : newCardItems,
//     }
//     renderCardItems()
// }




renderProducts()
// addToCard()

// renderCardItems()
