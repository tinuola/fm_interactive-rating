const ratingItems = document.querySelectorAll('.rating-item')

const ratingOpen = document.querySelector('.wrapper-rating')

const ratingClose = document.querySelector('.wrapper-thankyou')

const displayRating = document.querySelector('.rating-msg')

const submitBtn = document.querySelector('.submit-btn')

let ratingValue = ''


ratingItems.forEach( (rating,idx) => {
  rating.addEventListener('click', function(){
    ratingValue = rating.innerText
    rating.classList.toggle('rating-item--focus')
    rating.classList.toggle('rating-item--selected')
    deselectOtherRatings(idx)
  })
})


const deselectOtherRatings = index => {
  ratingItems.forEach( (rating, idx) => {
    if(idx !== index){
      rating.classList.remove('rating-item--selected')
      rating.classList.add('rating-item--focus')
    }
  })
}


submitBtn.addEventListener('click', function(){
  displayRating.textContent = `You selected ${ratingValue} out of 5`
  ratingOpen.style.display = 'none'
  ratingClose.style.display = 'block'
})

