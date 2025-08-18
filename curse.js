let textInput = document.getElementById("textInput");
let button = document.getElementById("submitBtn"); 
let div = document.createElement('div')
let curseWords = ['cunt','fuck','bitch']
let curseCounter = 0
let wordUsed = []
let obj = {

}

button.addEventListener("click", () => {
  let words = textInput.value.toLowerCase().trim().split(/\s+/);
  for(let word of words){
  if(curseWords.includes(word)){
  storeWords(word)
  curseCounter++
  wordUsed.push(word)
  }
    
  }
 let wordListArr = []
  for(let entries of Object.entries(obj)){
    let word = entries[0];
    let count = entries[1];
    wordListArr.push(`${word}(${count})`) 
    console.log(wordListArr);
    
    
  }
  div.innerHTML = `<div>curse count : ${curseCounter}</div>
  <div>curse words use :${wordListArr}</div>`
  document.body.append(div)
  // console.log(curseCounter);
  // console.log(obj);
  
  
}) 



function storeWords(word){
if(obj[word]){
  obj[word]++
}else{
  obj[word] = 1
}
}