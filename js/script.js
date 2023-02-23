const ratings = document.querySelectorAll('.rating-item')

const ratingCardOpen = document.querySelector('.wrapper-rating')

const ratingCardClose = document.querySelector('.wrapper-thankyou')

const ratingMsg = document.querySelector('.rating-msg')

const submitBtn = document.querySelector('.submit-btn')

let ratingValue = ''


ratings.forEach( (rating,idx) => {
  rating.addEventListener('click', function(){
    ratingValue = rating.innerText
    rating.classList.toggle('rating-item--initial-state')
    rating.classList.toggle('rating-item--selected-state')
    deselectOtherRatings(idx)
  })
})


// Ensure only one rating has "selected-state"
const deselectOtherRatings = index => {
  ratings.forEach( (rating, idx) => {
    if(idx !== index){
      rating.classList.remove('rating-item--selected-state')
      rating.classList.add('rating-item--initial-state')
    }
  })
}


// Confirm that a rating has been selected
const checkSelectedState = () => {
  for(let rating of ratings){
    const isSelected = rating.classList.contains('rating-item--selected-state')
    if(isSelected){
      return true;
    }
  }
}


submitBtn.addEventListener('click', function(){
  let hasRating = checkSelectedState()

  if(ratingValue && hasRating){
    ratingMsg.textContent = `You selected ${ratingValue} out of 5`
    ratingCardOpen.style.display = 'none'
    ratingCardClose.style.display = 'block'
  }
})

