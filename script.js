let myTodo = [];
var button = document.getElementById("btn");
var popup = document.getElementById("messages");
// var buttons = document.querySelectorAll(".btn");
var close = document.getElementById("close");
var Add = document.getElementById("add");
var cards = document.querySelector('.card');
var getInput = document.getElementById("text-input");
var input = document.getElementById("textinp");
var nolist = document.getElementById("nolist");

// if (myTodo.length === 0){
//     nolist.classList.add('activ');
// }else{
//     nolist.classList.remove('activ');
// }

//popup --> 1
// button.addEventListener("click", () => {
//     popup.classList.add('active');
//     document.querySelector(".main-header").classList.add('activ');
//     nolist.classList.add('activ');
// });

function popapear() {
    popup.classList.add('active');
    document.querySelector(".main-header").classList.add('activ');
    nolist.classList.add('activ');
}

// close.addEventListener("click", () => {
//     popup.classList.remove('active');
//     document.querySelector(".main-header").classList.remove('activ');
//     nolist.classList.remove('activ');
// });
function popclose (){
    popup.classList.remove('active');
    document.querySelector(".main-header").classList.remove('activ');
    nolist.classList.remove('activ');
}

//adding in header --> 

// Add.addEventListener("click", () => {
//     nolist.classList.remove('activ');
//     var newInput = document.createElement("h2");
//     newInput.setAttribute("class", `head`);
//     newInput.innerHTML = getInput.value;
//    // if(getInput.value !== null){
//     input.appendChild(newInput);
//     popup.classList.remove('active');
//     document.getElementById("nolist").style.display = "none";
//     document.querySelector(".main-header").classList.remove('activ');
//     cards.classList.add("act");
    

// })
function headadd () {
    nolist.classList.remove('activ');
    var newInput = document.createElement("h2");
    newInput.setAttribute("class", `head`);
    newInput.innerHTML = getInput.value;
    input.appendChild(newInput);
    popup.classList.remove('active');
    document.getElementById("nolist").style.display = "none";
    document.querySelector(".main-header").classList.remove('activ');
    cards.classList.add("act");
}

// popup 2 -->

var popup1 = document.getElementById("messages1");
var close1 = document.getElementById("close1");



//button.addEventListener("click", () => {
    //popup1.classList.add('active');
    //document.querySelector(".main-header").classList.add('activ');
    //nolist.classList.add('activ');
//});

//close.addEventListener("click", () => {
    //popup1.classList.remove('active');
    //document.querySelector(".main-header").classList.remove('activ');
    //nolist.classList.remove('activ');
//})

//inner card updating -->

var button2 = document.getElementById("btn-class-del");
var button3 = document.getElementById("btn-class-add");

// del button -->
function carddel () {
    nolist.style.display="block";
   cards.remove();
}

// Adding lists -->
button3.addEventListener("click", () => {
 popup1.classList.add('active');
 document.querySelector(".main-header").classList.add('activ');
 nolist.classList.add('activ');
 cards.classList.add('activ');
});

//popup 2nd close -->
function pop1close () {
    popup1.classList.remove('active');
    document.querySelector(".main-header").classList.remove('activ');
    nolist.classList.remove('activ');
    cards.classList.remove('activ');
}

// Adding from 2nd popup -->
var ninput = document.getElementById("textinp1")
var nodeInput = document.getElementById("text-input1");
function head1add () {
    cards.classList.remove("activ");
    popup1.classList.remove('active');
    document.querySelector(".main-header").classList.remove('activ');
    var newinp = document.createElement("span");
    newinp.setAttribute("class",`markdone`);
    newinp.innerHTML = nodeInput.value;
    markDone();
    ninput.appendChild(newinp);
    //ninput.innerHTML = `<button class="markDone" onclick="markDoneComplete()"> Mark Done </button>`;

}
function markDone () {
    //var markinput = document.createElement("span")
    ninput.innerHTML = `<button class="markDone" onclick="markDoneComplete()"> Mark Done </button>`;

}
function markDoneComplete () {
    document.querySelector(".markDone").style.display ="none";
    ninput.classList.add('strike');
}









