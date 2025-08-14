let textInput = document.getElementById("textInput");
let button = document.getElementById("submitBtn"); 
let curseWords = ['cunt','fuck','bitch']
let curseCounter = 0
let obj = {

}

button.addEventListener("click", () => {
  let words = textInput.value.toLowerCase().trim().split(/\s+/);
  for(let word of words){
  if(curseWords.includes(word)){
  storeWords(word)
  curseCounter++
  }
    
  }
  console.log(curseCounter);
  console.log(obj);
  
  
}) 

function storeWords(word){
if(obj[word]){
  obj[word]++
}else{
  obj[word] = 1
}
}