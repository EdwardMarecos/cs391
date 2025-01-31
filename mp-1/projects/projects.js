function add() {
    let val1=document.getElementById("val1").value;
    let val2=document.getElementById("val2").value;
    let output=Number(val1)+Number(val2);
    aboveOrBelow(output);
}

function subtract() {
    let val1=document.getElementById("val1").value;
    let val2=document.getElementById("val2").value;
    let output=Number(val1)-Number(val2);
    aboveOrBelow(output);
}

function multiply() {
    let val1=document.getElementById("val1").value;
    let val2=document.getElementById("val2").value;
    let output=Number(val1)*Number(val2);
    aboveOrBelow(output);
}

function divide() {
    let val1=document.getElementById("val1").value;
    let val2=document.getElementById("val2").value;
    let output=Number(val1)/Number(val2);
    aboveOrBelow(output);
}

function power() {
    let val1=document.getElementById("val1").value;
    let val2=document.getElementById("val2").value;

    let output=1;
    for(let i=0;i<val2;i++){
        output=val1*output;
    }

    aboveOrBelow(output);
}

function aboveOrBelow(output) {
    if (output<0){
        document.getElementById("output-val").style.color="red";
        document.getElementById("output-val").innerHTML=String(output);
    } else {
        document.getElementById("output-val").style.color="#22223b";
        document.getElementById("output-val").innerHTML=String(output);
    }
}

function reset() {
    document.getElementById("val1").value="";
    document.getElementById("val2").value="";
    document.getElementById("output-val").innerHTML="";
}