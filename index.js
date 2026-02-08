
let rollResult = 0;
const output = document.getElementById("roll")

// Rolling Fucntions
function roll(size){
    let result = Math.floor(Math.random() * (size)) + 1 ;
    return result;
}

function d4(){
    rollResult = roll(4);
    update();

}

function d6(){
    rollResult = roll(6);
    update();
}
function d8(){
    rollResult = roll(8);
    update();
}
function d10(){
   rollResult = Math.floor(Math.random() * 11);
    update();
}
function d12(){
    rollResult = roll(12);
    update();
}
function d20(){
    rollResult = roll(20);
    update();
}

function update(){
    output.innerHTML = rollResult;
}

console.log(roll(6))


