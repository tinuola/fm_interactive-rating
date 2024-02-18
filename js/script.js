const ratings = document.querySelectorAll('.rating-item')

const ratingCardOpen = document.querySelector('.wrapper-rating')

const ratingCardClose = document.querySelector('.wrapper-thankyou')

const ratingMsg = document.querySelector('.rating-msg')

const errorMsg = document.getElementById('error-msg')

const submitBtn = document.getElementById('submit-btn')

const closeBtn = document.getElementById('close-btn')

let ratingValue = ''


/**********************/
/** Event Listeners **/
/*********************/

submitBtn.addEventListener('click', function(e){
  e.preventDefault()

  ratings.forEach( (rating) => {
    if(rating.checked) {
      ratingValue = rating.getAttribute('data-number')
      displayResult(ratingValue)
    } else {
      errorMsg.style.display = 'block'
    }
  })
})

closeBtn.addEventListener('click', resetApp)

ratings.forEach( rating => {
  rating.addEventListener('click', enableSubmit)
})


/*************/
/** Methods **/
/*************/

function displayResult(num){
  ratingMsg.textContent = `You selected ${num} out of 5`
  ratingCardOpen.style.display = 'none'
  ratingCardClose.style.display = 'block'
}

function enableSubmit(){
  errorMsg.style.display = 'none'
  submitBtn.classList.add('active-btn')
}

function resetApp(){
  submitBtn.classList.remove('active-btn')
  ratingCardOpen.style.display = 'block'
  ratingCardClose.style.display = 'none'
  errorMsg.style.display = 'none'
  ratingValue = ''

  ratings.forEach( rating => {
    if(rating.checked) {
      rating.checked = false
    }
  })
}