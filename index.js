let entryValue = document.getElementById('numbers')

function cleared() {
    entryValue.value    ="";
}


//button1
function seven() {
    entryValue.value+= 7;
}
function eight() {
    entryValue.value+= 8;
}

function nine() {
    entryValue.value+= 9;
}
function plus() {
    entryValue.value+= "+";
}





//button2
function four() {
    entryValue.value+= 4;
}
function five() {
    entryValue.value+= 5;
}

function six() {
    entryValue.value+= 6;
}
function minus() {
    entryValue.value+= "-";
}



//button3
function one() {
    entryValue.value+= 1;
}
function two() {
    entryValue.value+= 2;
}

function three() {
    entryValue.value+= 3;
}
function multiplication() {
    entryValue.value+= "*";
}



//button4
function zero() {
    entryValue.value+= 0;
}
function point() {
    entryValue.value+= ".";
}

function division() {
    entryValue.value+= "/";
}
function equalto() {
    let inputValue = document.getElementById('numbers').value;
    let Result = eval(inputValue)
    entryValue.value=Result;
}


