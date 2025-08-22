let textInput = document.getElementById("textInput");
let button = document.getElementById("submitBtn"); 
let historyBtn = document.getElementById("historyBtn")
let div  = document.createElement('div')
let div2 = document.createElement('div')
let curseWords = ['cunt','fuck','bitch']

let wordUsed = []
let storedObj = {}

button.addEventListener("click", () => {
  let curseCounter = 0;
  let obj = {};
  
  let words = textInput.value.toLowerCase().trim().split(/\s+/);
  for(let word of words){
  if(curseWords.includes(word)){
  storeWords(word,obj)
  saveTotalWords(word)
  
  curseCounter++
  wordUsed.push(word)
  }
    
  }
//  let wordListArr = []
//   for(let [word,count] of Object.entries(obj)){
//     // let word = entries[0];
//     // let count = entries[1];
//     wordListArr.push(`${word}(${count})`) 
//     console.log(wordListArr);
    
    
//   }
let wordListArr = Object.entries(obj)
.map(([word , count]) => {
  return `${word}(${count})`})
.join("| ")


  div.innerHTML = `<div>curse count : ${curseCounter}</div>
  <div>curse words use :${wordListArr}</div>`
  document.body.append(div)
  // console.log(curseCounter);
  // console.log(obj);
  
  textInput.value = "";
 
  
}) 
historyBtn.addEventListener("click",() => {
  let historyList = Object.entries(storedObj)
  .map(([word,count])=>{
    return `you have used ${word} ${count} times`
  }).join(" and ") 
  div2.innerHTML = `<div>${historyList}</div>
  <div>total curse words used : ${wordUsed.length}</div>
  <div>curse words sequence : ${wordUsed.join(", ")}</div>`
  document.body.append(div2)
})


function storeWords(word,obj){
if(obj[word]){
  obj[word]++
}else{
  obj[word] = 1
}
}
function saveTotalWords(word){
if(storedObj[word]){
  storedObj[word]++
}else{
  storedObj[word] = 1
}

}