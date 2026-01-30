
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");
// btn.addEventListener("click", function(){
// let item=document.createElement("li");
// item.innerText=inp.value;

// let delbtn=document.createElement("button");
// delbtn.innerText= "delete";
// delbtn.classList.add("del");
// item.appendChild(delbtn);
// ul.append(item);
// inp.value="";
// });

// ul.addEventListener("click",function(event){
//    if(event.target.nodeName=="BUTTON"){
//       let listitem = event.target.parentElement;
//       listitem.remove();
//       console.log("deleted");
//    }
// });
// let delbtns = document.querySelectorAll(".del");

// for ( delbtn of delbtns) {
//     delbtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
let btn = document.querySelector(".normal");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    if (inp.value.trim() === "") return;

    let item = document.createElement("li");
    item.classList.add("list");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("del", "normal");

    item.appendChild(delbtn);
    ul.appendChild(item);

    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        event.target.parentElement.remove();
    }
});

