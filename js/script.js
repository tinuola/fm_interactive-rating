const ratings = document.querySelectorAll('.rating-item')

const ratingCardOpen = document.querySelector('.wrapper-rating')

const ratingCardClose = document.querySelector('.wrapper-thankyou')

const ratingMsg = document.querySelector('.rating-msg')

const errorMsg = document.getElementById('error-msg')

const submitBtn = document.querySelector('.submit-btn')

let ratingValue = ''
let errorState = false


submitBtn.addEventListener('click', function(e){
  e.preventDefault()

  ratings.forEach( (rating) => {
    if(rating.checked) {
      ratingValue = rating.getAttribute('data-number')
      displayResult(ratingValue)
    } else {
      displayError()
    }
  })
})


// Clear error message when a rating is selected
ratings.forEach( rating => {
    rating.addEventListener('click', clearError)
})


function displayResult(num){
  ratingMsg.textContent = `You selected ${num} out of 5`
  ratingCardOpen.style.display = 'none'
  ratingCardClose.style.display = 'block'
}


function displayError(){
  errorState = true
  errorMsg.style.display = 'block'
}


function clearError(){
  if(errorState){
    errorMsg.style.display = 'none'
    errorState = false
  }
}
