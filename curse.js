let textInput = document.getElementById("textInput");
let button = document.getElementById("submitBtn"); 
let div = document.createElement('div')
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
  div.innerHTML = `<div>curse count : ${curseCounter}</div>
  <div>curse word</div>`
  document.body.append(div)
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