let post=document.querySelector(".post_in");
let post_btn=document.querySelector(".post_btn");
let updateButton=document.querySelector(".btn2")
let nmfleid=document.querySelector(".nmfleid")
let cpfleid=document.querySelector(".cpfleid")

let serachinput=document.querySelector(".serach_in");
let search_btn=document.querySelector(".search_btn");

let allPost=document.querySelector(".allPost")

let arrList=[];
let indexBox;

post_btn.addEventListener("click",()=>{
   
         
    
    arrList.push({
        name:nmfleid.value,
        caption:cpfleid.value
    })
    
    nmfleid.value ="";
    cpfleid.value ="";
    allPost.innerHTML="";
    display()                                            
    
})
function display(){
    arrList.map(item=>{
        allPost.innerHTML+=`<div class="post_card">
                                <h3 class="post_nm">${item.name}</h3>
                                    <p class="post_cp">${item.caption}</p>
                                    <button class="del_btn">Delete</button>
                                <button class="edit_btn">Edit</button>
                            </div>`
    })
    let deleteButton = document.querySelectorAll(".del_btn");
    let arrayDeleteConvert=Array.from(deleteButton);
    arrayDeleteConvert.map((items,index)=>{
        items.addEventListener("click",()=>{
            arrList.splice(index,1)
            allPost.innerHTML="";
            display()
        })
    })
    let editButton = document.querySelectorAll(".edit_btn");
    editButtonConvert =Array.from(editButton);
    editButtonConvert.map((items,index)=>{
        items.addEventListener("click",()=>{
            nmfleid.value=arrList[index].name;
            cpfleid.value=arrList[index].caption;

            allPost.innerHTML="";
            updateButton.style.display="inline-block"
            post_btn.style.display ="none"
            indexBox = index;
            display()
        })
    })

}

updateButton.addEventListener("click",()=>{
    
        arrList[indexBox].name=nmfleid.value;
        arrList[indexBox].caption=cpfleid.value;

        allPost.innerHTML ="";
        updateButton.style.display ="none";
        post_btn.style.display ="inline-block";

        nmfleid.value ="";
        cpfleid.value ="";

        display()
    
})
                              

search_btn.addEventListener("click",()=>{
    allPost.innerHTML ="" ;   
    arrList.map(item =>{
        let text =""
        for(let i=0; i<serachinput.value.length;i++){
            text +=item.name.split("")[i]
        }
        if(text == serachinput.value){
            allPost.innerHTML = `<h3 class="post_nm">${item.name}</h3>`
        }
    })
  
})
