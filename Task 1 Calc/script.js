display= document.getElementById("display");

function calculateRes(){
    try{
        display.value =  eval(display.value.replace(/ /g, ''));
    }
    catch(e){
        alert('Invalid expression');
    }
}

function clearDisplay(){
    display.value = '';
}

function appendNumber(number){
    display.value += number;
}

function appendOperator(operator){
    display.value += `${operator}`;
}