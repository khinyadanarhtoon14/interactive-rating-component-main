//selector
const ratingState=document.querySelector('#rating-state');
const submit=document.querySelector('#rating-btn');
const thankState=document.querySelector('#thank-state');
const rateAgain=document.querySelector('.rate-again');
const rating=document.querySelector('.rating');
const rates=document.querySelectorAll('.rate-btn')
submit.addEventListener('click',() => {
    thankState.classList.remove('hidden');
    ratingState.style.display='none'

})

rateAgain.addEventListener('click',() => {
    ratingState.style.display='block';
    thankState.classList.add('hidden');
    
})

rates.forEach((rate) => {
    rate.addEventListener('click',() => {
        rating.innerText=rate.innerText
    })
})


