let textInput = document.getElementById("textInput");
let button = document.getElementById("submitBtn"); 
let historyBtn = document.getElementById("historyBtn")
let div  = document.createElement('div')
document.body.append(div)
let div2 = document.createElement('div')
document.body.append(div2)
let curseWords = ['cunt','fuck','bitch']
let hiddenCurseCounter = 0
textInput.disabled = false
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
  
  hiddenCurseCounter++
  curseCounter++
  wordUsed.push(word)
  }
    
  }
  if(disableInput()){
    textInput.value = ""
    return
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
  
  // console.log(curseCounter);
  // console.log(obj);
  
  textInput.value = "";
 
  
}) 
function disableInput(){
if (hiddenCurseCounter >= 10){
  div.innerHTML = `you have used to many curse word u cant use the textInput for 10 seconds`
  textInput.disabled = true;
  setTimeout(()=>{
 textInput.disabled = false
 div.innerHTML = `Ready to use again`
  },10000)
return true}
return false
}

historyBtn.addEventListener("click",() => {
  let historyList = Object.entries(storedObj)
  .map(([word,count])=>{
    return `you have used ${word} ${count} times`
  }).join(" and ") 
  div2.innerHTML = `<div>${historyList}</div>
  <div>total curse words used : ${wordUsed.length}</div>
  <div>curse words sequence : ${wordUsed.join(", ")}</div>`
  
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