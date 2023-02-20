console.log('hello')

const ratingItems = document.querySelectorAll('.rating-item')
// console.log(ratingItems)

const ratingOpen = document.querySelector('.wrapper-rating')

const ratingClose = document.querySelector('.wrapper-thankyou')

const submitBtn = document.querySelector('.submit-btn')
// console.log(submitBtn)

let ratingValue = ''
// console.log(ratingValue)

ratingItems.forEach( rating => {
  rating.addEventListener('click', function(){
    // console.log('rating')
    // console.log(rating.innerText)
    ratingValue = rating.innerText

    // rating.classList.toggle('rating-item--focus')
  //   rating.classList.toggle('rating-item--selected')
  })
})

submitBtn.addEventListener('click', function(){
  console.log(ratingValue)
  ratingOpen.style.display = 'none'
  ratingClose.style.display = 'block'
})

