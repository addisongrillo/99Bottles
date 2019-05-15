const bottle = document.querySelectorAll('.bottle')
const counters = document.querySelectorAll('.count')
const bottleWord = document.querySelector('bottle-word')
let remainingBottles = 99
function takeOneDown(){
  confirm('Are you sure?')
  this.classList.add('hidden')
  remainingBottles --
  counters.forEach(counter => counter.textContent = remainingBottles)
  if(remainingBottles === 1){
    bottleWord.textContent = 'bottle'
  }
}
bottle.forEach(function(bottle){
  bottle.addEventListener('click', takeOneDown)
})
