const cards = document.querySelectorAll('.card')

let score = 0
let clicked = null
let duplicate = true

function checkMatch(cards){
  const cardClass = cards
  // const card = cards.dataset.color
  
  if(clicked){
    console.log('true')
    if(cardClass.dataset.color === clicked.dataset.color){
      showCard(cardClass, clicked, 'match')
      clicked = null
    } else {
      showCard(cardClass, clicked, 'no-match')
      console.log('dont match')
      clicked = null
    }

  } else if (!clicked){
    clicked = cardClass
   cardClass.classList.remove('color-hidden')
  }

}


function showCard(card, clicked, type){
  console.log(type)

  if(type === 'match'){
  card.classList.remove('color-hidden')
  clicked.classList.remove('color-hidden')
  }

  if(type === 'no-match'){
    card.classList.remove('color-hidden')
    clicked.classList.remove('color-hidden')
    addColor(card, clicked)
  }

}

function addColor(card, clicked){
  setTimeout(() => {
    card.classList.add('color-hidden')
    clicked.classList.add('color-hidden')
  }, 2000)
}

function increaseScore(){
  score++
}



function runGame(e){

  checkMatch(e.target);
  increaseScore();
  
}


 


cards.forEach((card) => {
  card.addEventListener('click', runGame)
})