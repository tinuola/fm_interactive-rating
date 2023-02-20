const ratingItems = document.querySelectorAll('.rating-item')

const ratingOpen = document.querySelector('.wrapper-rating')

const ratingClose = document.querySelector('.wrapper-thankyou')

const displayRating = document.querySelector('.rating-msg')

const submitBtn = document.querySelector('.submit-btn')

let ratingValue = ''


ratingItems.forEach( (rating,idx) => {
  rating.addEventListener('click', function(){
    ratingValue = rating.innerText
    console.log(ratingValue)
    // check if it has selected state
    // Add selected state
    // Remove focus state
    // Check and remove selected state from any other state
    rating.classList.toggle('rating-item--focus')
    rating.classList.toggle('rating-item--selected')
    checkOtherRatings(idx)
  })
})

const checkOtherRatings = index => {
  ratingItems.forEach( (rating, i) => {
    if(i !== index){
      rating.classList.remove('rating-item--selected')
      rating.classList.add('rating-item--focus')
    }
  })
}

submitBtn.addEventListener('click', function(){
  // Display rating message
  ratingOpen.style.display = 'none'
  ratingClose.style.display = 'block'
})

