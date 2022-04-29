const btns = document.querySelectorAll('.buttons');
const sumbit = document.querySelector('.submit-btn');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const result = document.querySelector('.result')

btns.forEach(function(e){

  e.addEventListener("click", function(){
    const id =  e.id;
  result.textContent = `You selected ${id} out of 5`   
  })

})
;
sumbit.addEventListener("click", function(){
  if(!front.classList.contains("hide-front") & !back.classList.contains("show-back")){
    front.classList.add("hide-front");
    back.classList.add("show-back");
  }

})
