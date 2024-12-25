const toggleButton =document.querySelector(".tog-nav");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".sidebar>div");

toggleButton.addEventListener("click" ,() =>{
 sidebar.Style.right =   "0px";  
});







//const toggleButton = document.querySelector(".tog-nav");
//const sidebar = document.querySelector(".sidebar");
//const closeButton = document.querySelector(".sidebar>div");

//toggleButton.addEventListener("click", () => {
  //sidebar.style.right = "0px";
//});

//closeButton.addEventListener("click", () => {
  //sidebar.style.right = "-130%";
//});


// button toggle

const but1 = document.querySelector(".but-1");
const but2 = document.querySelector(".but-2");

but1.addEventListener("click", () => {
  but2.classList.remove("bg-violet-900");
  but2.classList.remove("text-white");
  but2.classList.add("text-black");
  but1.classList.remove("text-black");
  but1.classList.add("bg-violet-900");
  but1.classList.add("text-white");
});

but2.addEventListener("click", () => {
  but1.classList.remove("bg-violet-900");
  but1.classList.remove("text-white");
  but1.classList.add("text-black");
  but2.classList.remove("text-black");
  but2.classList.add("bg-violet-900");
  but2.classList.add("text-white");
});//