const changeFontSize = () => {
  const changeSize = document.querySelector(`.mess-with-me`)
  changeSize.style.fontSize = `3em`
}
changeFontSize()


const makeGreen = () => {
  const color = document.querySelector(`p`)
  color.style.backgroundColor = `green`
}
makeGreen()


const hideImage = () => {
  const hide = document.querySelector(`#hide-me`)
  hide.style.visibility = `hidden`
}
hideImage()


const changeImageWidth = () => {
  const changeSize = document.querySelector(`#triceratops`)
  changeSize.style.width = `324px`
}
changeImageWidth() 


const  changeFontColor = document.querySelector(`.mess-with-me`) 
const makeOrange = () => {
  changeFontColor.style.color = `orange`
}
changeFontColor.addEventListener(`click`, makeOrange)


const dinoBorder = document.querySelector(`#triceratops`) 
const makeBorder = () => {
  dinoBorder.style.border = `solid red`
}
dinoBorder.addEventListener(`click`, makeBorder)


const transparentDino = document.querySelector(`#feathers`)
const makeTransparent = () => {
  transparentDino.style.opacity = `50%`
}
transparentDino.addEventListener(`click`, makeTransparent)


const button = document.querySelector(`#toggle`)
const changeRowColor = document.querySelector(`#row`)
const colors = [`red`, `blue`, `green`, `purple`, `pink`, `orange`, `yellow`]
const backRoundColor = () => {
  const random = colors[Math.floor(Math.random() * colors.length -1)]
  changeRowColor.style.backgroundColor = random 
}
button.addEventListener(`click`, backRoundColor)

const hoverOver = document.querySelector(`#biggify`)
const hover = () => {
  hoverOver.style.width = `200px`
}
hoverOver.addEventListener(`mouseover`, hover)
