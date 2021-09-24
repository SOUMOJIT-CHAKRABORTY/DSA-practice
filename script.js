//var iconClick = document.getElementsById("Icon-function")
//var textbox = document.getElementsById("Textbox")
//var button = document.getElementsById("Button")

var messages = document.getElementById("messages");
var textbox = document.getElementById("text-input");
var button1 = document.getElementById("Icon-function");
var button2 = document.getElementById("button2");

button1.addEventListener("click", function(){
    var newMessage = document.createElement("p");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
})
