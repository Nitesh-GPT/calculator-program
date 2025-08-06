//calculator program

const Display = document.getElementById("Display");

function appendToDisplay(input){
    Display.value += input;
}
function cleardisplay (){
    Display.value = "";
}
function deletelast (){
    Display.value=Display.value.slice(0, -1);
}
function calculate(){
    try{
    Display.value=eval(Display.value);
}
catch{
    Display.value="error";

}
}