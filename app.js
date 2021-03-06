const images = ['./images/1.png','./images/2.png',
'./images/3.png','./images/4.png',
'./images/5.png','./images/6.png',]
const titles = [
    'Zdjęcie gór',
    'Jesienne góry',
    'Miast i tramwaj',
    'Widok na morze',
    'Widok z górkami',
    'Miasto nocą',
]
const heroImages = [
    './images/photo1.jpg',
    './images/photo2.jpg',
    './images/photo3.jpg',
    './images/photo4.jpg',
    './images/photo5.jpg',
    './images/photo6.jpg',
]
let counter = 0
const imgHero = document.querySelector(".img-hero")
const buttonLeft = document.querySelector(".left")
const buttonRight = document.querySelector(".right")
const desc = document.querySelector(".desc")
const counterDiv = document.querySelector(".counter")
const picker = document.querySelector(".picker")
buttonLeft.addEventListener("click", ()=>{
    counter <=0 ? counter = 5 : counter--
})
buttonRight.addEventListener("click", ()=>{
    counter >=5 ? counter = 0 : counter++
})
setInterval(()=>{
desc.textContent = titles[counter]
counterDiv.textContent = `${counter+1}/${images.length}`
imgHero.setAttribute(`src`, heroImages[counter])
},10)

for(let i = 0; i <= picker.children.length; i++){
    if(picker.children[i]){
        picker.children[i].addEventListener("click", () => counter = i)
    }
}

