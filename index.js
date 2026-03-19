
const output = document.getElementById("roll")
const log = document.getElementById("previous-rolls") // our ul of rolls

// Rolling Fucntions
function roll(size){
    let result = Math.floor(Math.random() * (size)) + 1 ;
    return result;
}

function d4(){
    update(roll(4));
}
function d6(){
   update(roll(6));
}
function d8(){
    update(roll(8));
}
function d10(){
   let rollResult = Math.floor(Math.random() * 11);
    update(rollResult);
}
function d12(){
    update(roll(12));
}
function d20(){
   update(roll(20));
}

////////////////////////////////////////////

// HTML Altering functions 
function update(result){
    output.innerHTML = result;
    addToLog(result)
}

function addToLog(result){
    const li = document.createElement("li")
    li.textContent = result
    log.appendChild(li)
}
