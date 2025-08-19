let textInput = document.getElementById("textInput");
let button = document.getElementById("submitBtn"); 
let div = document.createElement('div')
let curseWords = ['cunt','fuck','bitch']

let wordUsed = []


button.addEventListener("click", () => {
  let curseCounter = 0;
let obj = {};
  let words = textInput.value.toLowerCase().trim().split(/\s+/);
  for(let word of words){
  if(curseWords.includes(word)){
  storeWords(word,obj)
  curseCounter++
  wordUsed.push(word)
  }
    
  }
 let wordListArr = []
  for(let [word,count] of Object.entries(obj)){
    // let word = entries[0];
    // let count = entries[1];
    wordListArr.push(`${word}(${count})`) 
    console.log(wordListArr);
    
    
  }
  div.innerHTML = `<div>curse count : ${curseCounter}</div>
  <div>curse words use :${wordListArr.join("| ")}</div>`
  document.body.append(div)
  // console.log(curseCounter);
  // console.log(obj);
  
  textInput.value = "";
 
  
}) 



function storeWords(word,obj){
if(obj[word]){
  obj[word]++
}else{
  obj[word] = 1
}
}