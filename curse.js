let textInput = document.getElementById("textInput");
let button = document.getElementById("submitBtn"); 
let curseWords = ['cunt','fuck','bitch']
let curseCounter = 0

button.addEventListener("click", () => {
  let words = textInput.value.toLowerCase().trim().split(/\s+/);
  for(let word of words){
    curseWords.forEach((curse) => {
   if(word === curse){
    curseCounter++
   }
    })
    
  }
  console.log(curseCounter);
  
})