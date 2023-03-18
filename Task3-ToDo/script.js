let todoTask = document.getElementById("inputField");
let addbtn = document.querySelector("#select");
const listItems = document.getElementById("listBox");

addbtn.addEventListener('click', ()=>{
  
        let listIem = document.createElement("li");
    listIem.innerHTML = `
        ${todoTask.value} 
        <div class="checked">
        <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="del"><i class="fa-solid fa-circle-xmark"></i></div> `
   
        if(todoTask.value === "")
        {
            todoTask.setAttribute("placeholder", "Please Enter Something")
            return;
        }
   else{
    listItems.appendChild(listIem);
    todoTask.value = "";
    

    listIem.querySelector(".checked").addEventListener('click', ()=>{
        listIem.classList.toggle("done");
    })

    listIem.querySelector(".del").addEventListener('click', ()=>{
        listIem.remove();
    })
    }}
)