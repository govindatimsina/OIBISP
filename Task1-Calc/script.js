let numButtons = document.querySelectorAll('[data-Values]');
let oprButtons = document.querySelectorAll('[data-Operators]');
let sqRootButton = document.querySelector('[data-Operator-sqRoot]');

let clearButton = document.getElementById("dataClear");
let delButton = document.getElementById("dataDelete");

let resButton = document.getElementById("result");

let previousDisplaySection = document.getElementById("previousDisplay");
let currentDisplaySection = document.getElementById("currentDisplay");

let tempDisplay;
let operator;



function calculate()
{
    let prevContent = currentDisplaySection.innerText;
    previousDisplaySection.innerText = prevContent;
    try {
        let result = eval(currentDisplaySection.innerText);
        currentDisplaySection.innerText = result;
        
    } catch (error) {
        previousDisplaySection.innerText = '';
        currentDisplaySection.innerText = "Error";    
    }
}

numButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(button.innerText === '.' && currentDisplaySection.innerText.includes('.'))
            return;
        currentDisplaySection.innerText = currentDisplaySection.innerText.toString()+ button.innerText.toString();
    })
})

oprButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        // for(let i = 0; i<oprButtons.length; i++)
        // {
        //     let len = currentDisplaySection.innerText.toString().length;
        //     if(oprButtons.item(i)=== currentDisplaySection.innerText[len-1])
        //         break;
        //     else
            
        // }
       // getOperation(button.innerText);
        currentDisplaySection.innerText = currentDisplaySection.innerText.toString()+ button.innerText.toString();
       // console.log(oprButtons.item(0));
     //  let mystr = currentDisplaySection.innerText.toString();
     //  console.log(mystr);
    //   console.log(mystr.(mystr.length));
     //   if(button.innerText === oprButtons.values && currentDisplaySection.innerText.endsWith(oprButtons.values))
      //      return;
        

        
    //    console.log(currentDisplaySection.innerText[mystr-1]);
    })
})

clearButton.addEventListener('click', ()=>{
    currentDisplaySection.innerText='';
    previousDisplaySection.innerText='';
})

delButton.addEventListener('click', ()=>{
    currentDisplaySection.innerText = currentDisplaySection.innerText.slice(0, -1);
})

resButton.addEventListener('click', ()=>{
    calculate();
})

sqRootButton.addEventListener('click', ()=>{
  
    let num = parseFloat(currentDisplaySection.innerText);
    let res = Math.sqrt(num);
    previousDisplaySection.innerText = `${sqRootButton.innerText}${num}`
   currentDisplaySection.innerText = res;    
})