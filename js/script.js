const ratings = document.querySelectorAll('.rating-item')

const ratingCardOpen = document.querySelector('.wrapper-rating')

const ratingCardClose = document.querySelector('.wrapper-thankyou')

const ratingMsg = document.querySelector('.rating-msg')

const submitBtn = document.querySelector('.submit-btn')

let ratingValue = ''



submitBtn.addEventListener('click', function(e){
  e.preventDefault()

  ratings.forEach( (rating) => {
    if(rating.checked) {
      ratingValue = rating.getAttribute('data-number')
      displayResult(ratingValue)
    }
  })
})

function displayResult(num){
  ratingMsg.textContent = `You selected ${num} out of 5`
  ratingCardOpen.style.display = 'none'
  ratingCardClose.style.display = 'block'
}