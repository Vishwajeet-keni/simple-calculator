const scr = document.getElementById("scr");
 
function putToDisplay(Input){
    scr.value +=Input;
}

function AC(){
    scr.value = "";
}

function DEL(){
    string = scr.value
    string = string.substring(0, string.length-1)
    scr.value = string
}

function calculate(){
    try{
        scr.value = eval(scr.value);
    }
    catch(error){
        scr.value = "Error"
    }
    
}
